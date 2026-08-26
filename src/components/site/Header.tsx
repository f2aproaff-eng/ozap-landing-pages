import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { WHATSAPP_DEMO } from "./data";

const segments = [
  { to: "/consultorio", label: "Consultório" },
  { to: "/clinicas", label: "Clínicas" },
  { to: "/advogados", label: "Advogados" },
  { to: "/academia", label: "Academia" },
  { to: "/cafeteria", label: "Cafeteria" },
  { to: "/design", label: "Design" },
  { to: "/ecommerce", label: "E-commerce" },
  { to: "/escola", label: "Escola" },
  { to: "/imobiliaria", label: "Imobiliária" },
  { to: "/loja", label: "Loja" },
  { to: "/barbearia", label: "Barbearia" },
  { to: "/restaurante", label: "Restaurante" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [segOpen, setSegOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-serif text-2xl italic tracking-tight text-foreground">
          Zap<span className="text-brand">Book</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setSegOpen(true)}
            onMouseLeave={() => setSegOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 rounded-full px-3 py-2 font-mono text-xs tracking-[0.02em] text-muted-foreground transition-colors hover:bg-brand-soft hover:text-foreground"
              aria-expanded={segOpen}
            >
              Segmentos
              <ChevronDown className="size-3.5" />
            </button>
            {segOpen && (
              <div className="absolute left-1/2 top-full grid w-[440px] -translate-x-1/2 grid-cols-2 gap-1 rounded-2xl border border-border bg-card p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.5)]">
                {segments.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rounded-xl px-3 py-2 font-mono text-xs tracking-[0.02em] text-muted-foreground transition-colors hover:bg-brand-soft hover:text-foreground"
                    activeProps={{ className: "bg-brand-soft text-foreground" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-4 py-2 font-mono text-xs font-medium tracking-[0.02em] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Ver Demo
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full p-2 text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
          <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Segmentos
          </p>
          <div className="grid grid-cols-2 gap-1">
            {segments.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-full px-3 py-2 font-mono text-xs tracking-[0.02em] text-muted-foreground hover:bg-brand-soft hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href={WHATSAPP_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-full bg-primary px-3 py-2 text-center font-mono text-xs font-medium tracking-[0.02em] text-primary-foreground"
          >
            Ver Demo
          </a>
        </nav>
      )}
    </header>
  );
}
