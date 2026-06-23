"use client";

import { Bot, LogIn, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#academia", label: "Academia" },
  { href: "#lab", label: "Lab" },
  { href: "#contacto", label: "Contacto" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-ink">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-ink text-white">
            <Bot size={22} />
          </span>
          <span>UQ AI Solution</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-ocean">
              {link.label}
            </a>
          ))}
          <Link
            href="/login"
            className="focus-ring inline-flex items-center gap-2 rounded-md bg-ocean px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-teal-800"
          >
            <LogIn size={17} />
            Iniciar Sesion
          </Link>
        </div>

        <button
          className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-slate-300 md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/login"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-ocean px-4 py-2 text-sm font-semibold text-white"
            >
              <LogIn size={17} />
              Iniciar Sesion
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
