import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_DEMO = "https://wa.me/5553991774147";

const navItems = [
  { to: "/consultorio", label: "Consultório" },
  { to: "/clinicas", label: "Clínica" },
  { to: "/advogados", label: "Advogado" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-gradient-to-r from-brand-soft to-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-extrabold tracking-tight text-brand-deep">
          o<span className="text-success">Zap</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-soft hover:text-brand-deep"
              activeProps={{ className: "bg-brand-soft text-brand-deep" }}
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
            className="hidden rounded-xl bg-gradient-to-r from-success to-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
          >
            Ver Demo
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-brand-deep md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-brand-soft"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={WHATSAPP_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-lg bg-gradient-to-r from-success to-brand px-3 py-2 text-center text-sm font-semibold text-primary-foreground"
          >
            Ver Demo
          </a>
        </nav>
      )}
    </header>
  );
}
