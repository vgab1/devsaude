import { LabelSubscription } from "@/components/ui/label-subscription";
import { getAllServices } from "../_data-access/get=all-services";
import { ServicesList } from "./services-list";
import { canPermission } from "@/utils/permissions/canPermission";

interface ServicesContentProps {
  userId: string;
}

export async function ServicesContent({ userId }: ServicesContentProps) {
  const services = await getAllServices({ userId: userId });
  const permissions = await canPermission({ type: "service" });

  return (
    <>
      {permissions.planId === "TRIAL" && (
        <div className="bg-emerald-400 text-white text-sm md:text-base px-3 py-2 my-4 rounded-md flex flex-col md:flex-row md:items-center justify-between gap-1">
          <h3 className="font-semibold">Você está no período de teste!</h3>
        </div>
      )}

      {!permissions.hasPermission && (
        <LabelSubscription expired={permissions.expired} />
      )}
      <ServicesList services={services.data || []} permission={permissions} />
    </>
  );
}
