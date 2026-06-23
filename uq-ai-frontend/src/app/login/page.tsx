"use client";

import { API_URL, AuthResponse } from "@/lib/api";
import { Bot, Loader2, LogIn } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [blockedUntil, setBlockedUntil] = useState(0);
  const remaining = Math.max(0, Math.ceil((blockedUntil - Date.now()) / 1000));
  const isBlocked = remaining > 0;

  useEffect(() => {
    if (!isBlocked) return;
    const timer = window.setInterval(() => {
      if (Date.now() >= blockedUntil) setBlockedUntil(0);
    }, 500);
    return () => window.clearInterval(timer);
  }, [blockedUntil, isBlocked]);

  const buttonText = useMemo(() => {
    if (isBlocked) return `Bloqueado ${remaining}s`;
    if (loading) return "Validando...";
    return "Ingresar";
  }, [isBlocked, loading, remaining]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isBlocked) return;
    setError("");
    setLoading(true);

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error("Credenciales incorrectas");
      const auth: AuthResponse = await response.json();
      const user = {
        id: auth.id,
        nombre: auth.nombre,
        apellidos: auth.apellidos,
        email: auth.email,
        rol: auth.rol,
        area: auth.area
      };

      await fetch("/api/auth/set-cookie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: auth.token, user })
      });

      setAttempts(0);
      router.push("/dashboard");
      router.refresh();
    } catch {
      const nextAttempts = attempts + 1;
      setAttempts(nextAttempts);
      setError("Credenciales incorrectas");
      if (nextAttempts >= 3) {
        setBlockedUntil(Date.now() + 30_000);
        setAttempts(0);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-4">
      <section className="w-full max-w-md rounded-md border border-slate-200 bg-white p-6 shadow-soft">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-md bg-ink text-white">
            <Bot />
          </span>
          <div>
            <h1 className="text-2xl font-black text-ink">Iniciar Sesion</h1>
            <p className="text-sm text-slate-600">UQ AI Solution Company</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Email
            <input required name="email" type="email" className="focus-ring rounded-md border border-slate-300 px-3 py-2" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Contrasena
            <input required name="password" type="password" className="focus-ring rounded-md border border-slate-300 px-3 py-2" />
          </label>

          {error && <p className="rounded-md bg-rose-50 px-3 py-2 text-sm font-medium text-coral">{error}</p>}

          <button
            disabled={loading || isBlocked}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-ocean px-5 py-3 font-bold text-white hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : <LogIn size={18} />}
            {buttonText}
          </button>
        </form>

        <div className="mt-5 rounded-md bg-slate-100 p-3 text-xs leading-5 text-slate-600">
          Admin: admin@uqai.pe / Admin12345<br />
          User: user@uqai.pe / User12345
        </div>
      </section>
    </main>
  );
}
