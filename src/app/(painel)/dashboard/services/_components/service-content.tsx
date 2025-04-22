import { getAllServices } from "../_data-access/get=all-services";
import { ServicesList } from "./services-list";

interface ServicesContentProps {
  userId: string;
}

export async function ServicesContent({ userId }: ServicesContentProps) {
  const services = await getAllServices({ userId });

  console.log(services);

  return <ServicesList />;
}
