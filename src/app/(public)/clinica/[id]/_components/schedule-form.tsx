"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const appointmentSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email é obrigatório" }),
  phone: z.string().min(1, { message: "Telefone é obrigatório" }),
  date: z.date(),
  serviceId: z.string().min(1, { message: "Serviço é obrigatório" }),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export function useAppointmentForm() {
  return useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: new Date(),
      serviceId: "",
    },
  });
}
