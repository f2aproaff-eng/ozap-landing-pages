import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

import { WHATSAPP_DEMO } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface-alt">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold text-foreground">
            Zap<span className="text-success">Book</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Agendamento e triagem automáticos com IA no WhatsApp.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">© 2026 ZapBook</p>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-foreground">Páginas</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <Link to="/consultorio" className="hover:text-foreground">
                Consultórios
              </Link>
            </li>
            <li>
              <Link to="/clinicas" className="hover:text-foreground">
                Clínicas
              </Link>
            </li>
            <li>
              <Link to="/advogados" className="hover:text-foreground">
                Advogados
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="font-semibold text-foreground">Contato & legal</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <a href="mailto:contato@zapbook.com.br" className="hover:text-foreground">
                contato@zapbook.com.br
              </a>
            </li>
            <li>
              <a href="#privacidade" className="hover:text-foreground">
                Privacidade
              </a>
            </li>
            <li>
              <a href="#termos" className="hover:text-foreground">
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
              className="rounded-lg border border-border p-2 text-foreground transition-colors hover:bg-brand-soft"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-border p-2 text-foreground transition-colors hover:bg-brand-soft"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={WHATSAPP_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-lg border border-border p-2 text-success transition-colors hover:bg-brand-soft"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
