import { redirect } from "next/navigation";
import { getPermissionUserToReports } from "./_data-access/get-permission-reports";
import getSession from "@/lib/getSession";

export default async function Reports() {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  const user = await getPermissionUserToReports({ userId: session?.user?.id! });

  if (!user) {
    return (
      <main>
        <h1>Você não tem permissão para acessar essa página</h1>
        <p>Assine o plano PROFESSIONAL para ter acesso completo.</p>
      </main>
    );
  }

  return (
    <main>
      <div>
        <h1>Relatórios</h1>
        <p>Esta página está em desenvolvimento.</p>
        <p>
          Em breve, você poderá acessar relatórios detalhados sobre o desempenho
          do seu site.
        </p>
      </div>
    </main>
  );
}
