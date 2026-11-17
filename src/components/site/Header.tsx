import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-foreground" aria-label="ZapPulse — início">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"><MessageCircle className="size-5" /></span>
          <span>Zap<span className="text-brand">Pulse</span></span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <div
            className="relative"
          >
            <Button
              type="button"
              variant="ghost"
              className="gap-1 text-sm text-muted-foreground"
              onClick={() => setSegOpen((v) => !v)}
              aria-expanded={segOpen}
              aria-controls="segment-menu"
            >
              Segmentos
              <ChevronDown className="size-3.5" />
            </Button>
            {segOpen && (
              <div id="segment-menu" className="site-menu absolute left-1/2 top-full grid w-[400px] -translate-x-1/2 grid-cols-2 gap-1 rounded-lg border border-border bg-card p-3">
                {segments.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setSegOpen(false)}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-brand-soft hover:text-foreground"
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
          <Button asChild className="hidden h-10 sm:inline-flex">
          <a
            href={WHATSAPP_DEMO}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Demo <ArrowUpRight aria-hidden />
          </a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-foreground md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
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
                className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-brand-soft hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Button asChild className="mt-3 w-full">
          <a
            href={WHATSAPP_DEMO}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Demo
          </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
