"use client";
import { useState } from "react";
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, X } from "lucide-react";
import { DialogSevice } from "./dialog-service";
import { Service } from "@prisma/client";
import { formatCurrency } from "@/utils/formatCurrency";
import { deleteService } from "../_actions/delete-service";
import { toast } from "sonner";
import { ResultPermissionProp } from "@/utils/permissions/canPermission";
import Link from "next/link";

interface ServicesListProps {
  services: Service[];
  permission: ResultPermissionProp;
}

export function ServicesList({ services, permission }: ServicesListProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);

  const servicesList = permission.hasPermission
    ? services
    : services.slice(0, 3);

  async function handleDeleteService(serviceId: string) {
    const response = await deleteService({ serviceId: serviceId });

    if (response.error) {
      toast(response.error);
      return;
    }

    toast.success(response.data);
  }

  function handleEditService(service: Service) {
    setEditingService(service);
    setIsDialogOpen(true);
  }

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        setIsDialogOpen(open);

        if (!open) {
          setEditingService(null);
        }
      }}
    >
      <section className="mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-8 pb-2">
            <CardTitle className="text-xl md:text-2xl font-bold">
              Serviços
            </CardTitle>
            {permission.hasPermission && (
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4" />
                </Button>
              </DialogTrigger>
            )}

            {!permission.hasPermission && (
              <Link href="/dashboard/plans" className="text-red-500">
                Limite de serviços atingido.
              </Link>
            )}

            <DialogContent
              onInteractOutside={(e) => {
                e.preventDefault();
                setIsDialogOpen(false);
                setEditingService(null);
              }}
            >
              <DialogSevice
                closeModal={() => {
                  setIsDialogOpen(false);
                  setEditingService(null);
                }}
                serviceId={editingService ? editingService.id : undefined}
                initialValues={
                  editingService
                    ? {
                        name: editingService.name,
                        price: (editingService.price / 100)
                          .toFixed(2)
                          .replace(".", ","),
                        hours: Math.floor(
                          editingService.duration / 60
                        ).toLocaleString(),
                        minutes: (
                          editingService.duration % 60
                        ).toLocaleString(),
                      }
                    : undefined
                }
              />
            </DialogContent>
          </CardHeader>
          <CardContent>
            <section className="space-y-4 mt-5">
              {servicesList.map((service) => (
                <article
                  className="flex items-center justify-between"
                  key={service.id}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{service.name}</span>
                    <span className="text-gray-500">-</span>
                    <span className="text-gray-500">
                      {formatCurrency(service.price / 100)}
                    </span>
                  </div>
                  <div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditService(service)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteService(service.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </article>
              ))}
            </section>
          </CardContent>
        </Card>
      </section>
    </Dialog>
  );
}
