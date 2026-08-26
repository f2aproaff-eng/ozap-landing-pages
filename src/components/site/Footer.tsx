import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

import { WHATSAPP_DEMO } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-alt">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="font-serif text-xl italic text-foreground">
            Zap<span className="text-brand">Book</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Agendamento e triagem automáticos com IA no WhatsApp.
          </p>
          <p className="mt-4 font-mono text-xs tracking-[0.02em] text-muted-foreground">
            © 2026 ZapBook
          </p>
        </div>

        <div className="text-sm">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Páginas
          </p>
          <ul className="mt-3 space-y-2 text-foreground">
            <li>
              <Link to="/consultorio" className="hover:text-brand">
                Consultórios
              </Link>
            </li>
            <li>
              <Link to="/clinicas" className="hover:text-brand">
                Clínicas
              </Link>
            </li>
            <li>
              <Link to="/advogados" className="hover:text-brand">
                Advogados
              </Link>
            </li>
            <li>
              <Link to="/" hash="segmentos" className="text-brand hover:underline">
                Todos os segmentos →
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            Contato & legal
          </p>
          <ul className="mt-3 space-y-2 text-foreground">
            <li>
              <a href="mailto:contato@zapbook.com.br" className="hover:text-brand">
                contato@zapbook.com.br
              </a>
            </li>
            <li>
              <a href="#privacidade" className="hover:text-brand">
                Privacidade
              </a>
            </li>
            <li>
              <a href="#termos" className="hover:text-brand">
                Termos
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-brand-soft"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-brand-soft"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={WHATSAPP_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full border border-border p-2 text-brand transition-colors hover:bg-brand-soft"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
