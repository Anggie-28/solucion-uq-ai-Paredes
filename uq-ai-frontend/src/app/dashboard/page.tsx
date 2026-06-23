import { API_URL, AuthUser, Lead } from "@/lib/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { LogOut, ShieldCheck, UserRound } from "lucide-react";

async function getLeads(token: string): Promise<Lead[]> {
  const response = await fetch(`${API_URL}/api/leads`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store"
  });

  if (!response.ok) return [];
  return response.json();
}

function getUser(): AuthUser | null {
  const raw = cookies().get("uqai_user")?.value;
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export default async function DashboardPage() {
  const token = cookies().get("uqai_token")?.value;
  const user = getUser();

  if (!token || !user) redirect("/login");

  const leads = user.rol === "ADMIN" ? await getLeads(token) : [];

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-ocean">Panel protegido</p>
            <h1 className="text-2xl font-black text-ink">Dashboard UQ AI</h1>
          </div>
          <form action="/api/auth/logout" method="post">
            <button className="focus-ring inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-bold text-white">
              <LogOut size={17} />
              Cerrar Sesion
            </button>
          </form>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            {user.rol === "ADMIN" ? <ShieldCheck className="text-ocean" /> : <UserRound className="text-coral" />}
            <div>
              <h2 className="text-xl font-black text-ink">{user.nombre} {user.apellidos}</h2>
              <p className="text-sm text-slate-600">{user.email} · {user.area}</p>
            </div>
          </div>
          <p className="mt-4 inline-flex rounded-md bg-slate-100 px-3 py-1 text-sm font-bold text-ink">
            Rol: {user.rol}
          </p>
        </article>

        {user.rol === "ADMIN" ? (
          <article className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 p-5">
              <h2 className="text-xl font-black text-ink">Leads registrados</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Nombre</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Empresa</th>
                    <th className="px-4 py-3">Telefono</th>
                    <th className="px-4 py-3">Mensaje</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-t border-slate-200">
                      <td className="px-4 py-3 font-medium">{lead.nombre}</td>
                      <td className="px-4 py-3">{lead.email}</td>
                      <td className="px-4 py-3">{lead.empresa}</td>
                      <td className="px-4 py-3">{lead.telefono}</td>
                      <td className="px-4 py-3">{lead.mensaje}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        ) : (
          <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-black text-ink">Perfil de usuario</h2>
            <p className="mt-3 leading-7 text-slate-700">
              Tu rol USER solo permite ver tu propio perfil. La tabla completa de leads esta reservada para ADMIN.
            </p>
          </article>
        )}
      </section>
    </main>
  );
}
