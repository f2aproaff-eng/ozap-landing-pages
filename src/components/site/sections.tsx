import { useEffect, useRef, useState, type ReactNode } from "react";
import { AlertCircle, Check, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ChatMsg, FaqItem } from "./data";

export function Section({
  children,
  alt = false,
  id,
  className,
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={cn(alt ? "bg-surface-alt" : "bg-background", className)}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-24">{children}</div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl italic leading-[1.05] tracking-[-0.02em] text-foreground sm:text-5xl">
        {title ?? children}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-1 hover:border-brand/30">
      {children}
    </div>
  );
}

/** Caixa de ícone no mesmo padrão visual dos cards da home. */
function IconBadge({
  icon: Icon,
  tone = "neutral",
}: {
  icon: LucideIcon;
  tone?: "neutral" | "brand";
}) {
  return (
    <div
      className={cn(
        "flex size-11 items-center justify-center rounded-xl bg-white/[0.06] transition-colors group-hover:bg-brand/10 group-hover:text-brand",
        tone === "brand" ? "text-brand" : "text-foreground",
      )}
    >
      <Icon className="size-5" />
    </div>
  );
}

export function PainCard({ text }: { text: string }) {
  return (
    <Card>
      <IconBadge icon={AlertCircle} />
      <p className="mt-4 font-medium text-card-foreground">{text}</p>
    </Card>
  );
}

export function WinCard({
  text,
  title,
  description,
}: {
  text?: string;
  icon?: ReactNode;
  title?: string;
  description?: string;
}) {
  return (
    <Card>
      <IconBadge icon={Check} tone="brand" />
      {title && <h3 className="mt-4 font-medium text-card-foreground">{title}</h3>}
      <p
        className={cn(
          "font-medium text-card-foreground",
          title ? "mt-1 text-sm text-muted-foreground font-normal" : "mt-4",
        )}
      >
        {text ?? description}
      </p>
    </Card>
  );
}

export function StepCard({ n, text }: { n: number; text: string }) {
  return (
    <Card>
      <div className="flex size-11 items-center justify-center rounded-xl bg-white/[0.06] font-mono text-sm font-medium text-foreground transition-colors group-hover:bg-brand/10 group-hover:text-brand">
        {String(n).padStart(2, "0")}
      </div>
      <p className="mt-4 font-medium text-card-foreground">{text}</p>
    </Card>
  );
}

/** Card numerado com ícone, no estilo "o que torna a plataforma única". */
export function FeatureCard({
  icon: Icon,
  title,
  text,
  index,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  index: number;
}) {
  return (
    <div className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/30">
      <div className="flex size-11 items-center justify-center rounded-xl bg-white/[0.06] text-foreground transition-colors group-hover:bg-brand/10 group-hover:text-brand">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 font-mono text-xs uppercase tracking-[0.08em] text-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="h-px w-10 bg-border" />
        <span className="font-mono text-2xl font-medium text-muted-foreground/20">
          {String(index).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export function FeatureGrid({
  features,
}: {
  features: { icon: LucideIcon; title: string; text: string }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <FeatureCard key={f.title} icon={f.icon} title={f.title} text={f.text} index={i + 1} />
      ))}
    </div>
  );
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto w-full max-w-3xl">
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`item-${i}`} className="border-border">
          <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function PriceCard({
  setup,
  monthly,
  includes,
  highlight,
  note,
  title,
  subtitle,
}: {
  setup?: string;
  monthly?: string;
  includes?: string[];
  highlight?: boolean;
  note?: string;
  title?: string;
  subtitle?: string;
}) {
  if (title) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <p className="font-serif text-4xl italic text-brand">{title}</p>
        {subtitle && (
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
  return (
    <div
      className={cn(
        "relative mx-auto max-w-lg rounded-2xl border p-8",
        highlight ? "border-brand/40 bg-card" : "border-border bg-card",
      )}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-brand/40 bg-background px-4 py-1 font-mono text-[11px] tracking-[0.08em] text-brand">
          Sem fidelidade
        </span>
      )}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
            Setup (uma vez)
          </p>
          <p className="mt-1 font-serif text-3xl italic text-foreground">{setup}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
            Recorrência
          </p>
          <p className="mt-1 font-serif text-3xl italic text-brand">{monthly}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
        {(includes ?? []).map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-brand">✓</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
      {note && <p className="mt-6 font-mono text-[11px] text-muted-foreground/70">{note}</p>}
    </div>
  );
}

export function ChatDemo({ messages }: { messages: { from: "user" | "ai"; text: string }[] }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-border bg-card p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.5)]">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
        <p className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
          WhatsApp · Agente ZapBook
        </p>
        <span className="flex items-center gap-1 font-mono text-[10px] text-brand">
          <span className="size-1.5 rounded-full bg-brand" /> online
        </span>
      </div>
      <div className="space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.from === "user"
                ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-secondary px-3 py-2 text-sm text-secondary-foreground"
                : "mr-auto max-w-[85%] rounded-2xl rounded-bl-sm border border-brand/30 bg-card px-3 py-2 text-sm text-foreground"
            }
          >
            {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChatGif({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-border bg-card p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.5)]">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
        <p className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
          WhatsApp · Agente ZapBook
        </p>
        <span className="flex items-center gap-1 font-mono text-[10px] text-brand">
          <span className="size-1.5 rounded-full bg-brand" /> online
        </span>
      </div>
      <img src={src} alt={alt} className="w-full rounded-xl" loading="lazy" />
    </div>
  );
}

function renderBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

/**
 * Simulação de conversa animada, ritmo de "digitando..." — substitui os GIFs de
 * print real. Mesmo texto das conversas capturadas no simulador do agente, mas
 * como componente vivo: nítido, acessível, sem pipeline de vídeo/GIF pra manter.
 */
export function ChatSim({ messages }: { messages: ChatMsg[] }) {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    function step(i: number) {
      if (cancelled) return;
      if (i >= messages.length) {
        timer = setTimeout(() => {
          if (cancelled) return;
          setVisible(0);
          setTyping(false);
          step(0);
        }, 3800);
        return;
      }
      setTyping(true);
      const delay = Math.min(2200, Math.max(700, 450 + messages[i].text.length * 16));
      timer = setTimeout(() => {
        if (cancelled) return;
        setTyping(false);
        setVisible(i + 1);
        timer = setTimeout(() => step(i + 1), 380);
      }, delay);
    }

    step(0);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [messages]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visible, typing]);

  const shown = messages.slice(0, visible);
  const next = messages[visible];

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-border bg-card p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.5)]">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
        <span className="flex items-center gap-1.5 font-mono text-[11px] tracking-[0.04em] text-brand">
          <span className="size-1.5 animate-pulse rounded-full bg-brand" /> IA Ativa
        </span>
        <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
          Desativar IA
        </span>
      </div>
      <div ref={scrollRef} className="h-[340px] space-y-2 overflow-y-auto pr-1">
        {shown.map((m, i) => (
          <div key={i} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
            <div
              className={
                m.from === "user"
                  ? "max-w-[85%] rounded-2xl rounded-br-sm bg-secondary px-3 py-2 text-sm text-secondary-foreground"
                  : "max-w-[85%] rounded-2xl rounded-bl-sm border border-brand/30 bg-card px-3 py-2 text-sm text-foreground"
              }
            >
              <p className="leading-relaxed">{renderBold(m.text)}</p>
              <p className="mt-1 text-right font-mono text-[10px] text-muted-foreground/60">
                {m.time}
              </p>
            </div>
          </div>
        ))}
        {typing && next && (
          <div className={next.from === "user" ? "flex justify-end" : "flex justify-start"}>
            <div
              className={
                next.from === "user"
                  ? "rounded-2xl rounded-br-sm bg-secondary px-3.5 py-3"
                  : "rounded-2xl rounded-bl-sm border border-brand/30 bg-card px-3.5 py-3"
              }
            >
              <span className="flex gap-1">
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                <span className="size-1.5 animate-bounce rounded-full bg-muted-foreground" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="relative border-t border-border bg-card/30">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-mono text-2xl font-medium text-foreground sm:text-3xl">{s.value}</p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero({
  eyebrow,
  headline,
  sub,
  cta,
  visual,
  stats,
  wordmark = "ZapBook",
  title,
  subtitle,
  ctaText,
  ctaLink,
}: {
  eyebrow?: string;
  headline?: string;
  sub?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  cta?: ReactNode;
  visual?: ReactNode;
  stats?: { value: string; label: string }[];
  wordmark?: string | false;
}) {
  return (
    <section className="relative overflow-hidden bg-background">
      {wordmark && (
        <p
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-8 w-[200%] -translate-x-1/2 select-none whitespace-nowrap text-center font-serif italic leading-none"
          style={{
            fontSize: "min(38vw, 420px)",
            backgroundImage: "linear-gradient(180deg, rgb(209,209,209) 0%, rgb(255,255,255) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            opacity: 0.06,
          }}
        >
          {wordmark}
        </p>
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:py-32 md:grid-cols-2">
        <div>
          {eyebrow && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs tracking-[0.04em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-[40px] italic leading-[1.02] tracking-[-0.03em] text-foreground sm:text-[56px] lg:text-[64px] lg:tracking-[-0.04em]">
            {headline ?? title}
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
            {sub ?? subtitle}
          </p>
          <div className="mt-8 flex justify-start">
            {cta ??
              (ctaText && (
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-mono text-sm font-medium tracking-[0.02em] text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  {ctaText}
                </a>
              ))}
          </div>
        </div>
        <div className="relative">{visual}</div>
      </div>

      {stats && <StatRow stats={stats} />}
    </section>
  );
}
