import { redirect } from "next/navigation";
import { getInfoSchedule } from "./_data-access/get-info-schedule";
import { ScheduleContent } from "./_components/schedule-content";

export default async function SchedulePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const userId = (await params).id;
  const user = await getInfoSchedule({ userId: userId });

  console.log(user);

  if (!user) {
    redirect("/");
  }

  return (
    <div>
      <ScheduleContent clinic={user} />
    </div>
  );
}
