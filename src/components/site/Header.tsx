import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { WHATSAPP_DEMO } from "./data";

const navItems = [
  { to: "/consultorio", label: "Consultório" },
  { to: "/clinicas", label: "Clínica" },
  { to: "/advogados", label: "Advogado" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-serif text-2xl italic tracking-tight text-foreground">
          Zap<span className="text-brand">Book</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 font-mono text-xs tracking-[0.02em] text-muted-foreground transition-colors hover:bg-brand-soft hover:text-foreground"
              activeProps={{ className: "bg-brand-soft text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
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
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-full px-3 py-2 font-mono text-xs tracking-[0.02em] text-muted-foreground hover:bg-brand-soft hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
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
