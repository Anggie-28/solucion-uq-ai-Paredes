"use client";

import { API_URL } from "@/lib/api";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error("No se pudo registrar el lead");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-soft">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Nombre
          <input required name="nombre" className="focus-ring rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input required name="email" type="email" className="focus-ring rounded-md border border-slate-300 px-3 py-2" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Empresa
          <input required name="empresa" className="focus-ring rounded-md border border-slate-300 px-3 py-2" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Telefono
          <input required name="telefono" className="focus-ring rounded-md border border-slate-300 px-3 py-2" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Mensaje
        <textarea required name="mensaje" rows={4} className="focus-ring rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <button
        disabled={status === "loading"}
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 font-semibold text-white hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        <Send size={18} />
        {status === "loading" ? "Enviando..." : "Enviar contacto"}
      </button>
      {status === "success" && <p className="text-sm font-medium text-ocean">Lead registrado correctamente.</p>}
      {status === "error" && <p className="text-sm font-medium text-coral">No se pudo enviar. Revisa que el backend este activo.</p>}
    </form>
  );
}
