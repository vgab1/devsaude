import { Button } from "@/components/ui/button";
import getSession from "@/lib/getSession";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ButtonCopyLink } from "./_components/button-copy-link";
import { Reminders } from "./_components/reminder/reminders";

export default async function Dashboard() {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  return (
    <main>
      <div className="space-x-2 flex items-center justify-end">
        <Link href={`/clinica/${session.user?.id}`} target="_blank">
          <Button className="bg-emerald-500 hover:bg-emerald-600 flex-1 md:flex-[0]">
            <Calendar className="w-5 h-5" />
            <span>Novo Agendamento</span>
          </Button>
        </Link>

        <ButtonCopyLink userId={session.user?.id} />
      </div>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2 mt-4">
        <div>Agenda</div>
        <Reminders userId={session.user?.id}/>
      </section>
    </main>
  );
}
