import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "./data";

export function Section({
  children,
  alt = false,
  id,
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={alt ? "bg-surface-alt" : "bg-background"}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">{children}</div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-success">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-success/30 hover:shadow-lg">
      {children}
    </div>
  );
}

export function PainCard({ text }: { text: string }) {
  return (
    <Card>
      <span className="text-2xl">🔴</span>
      <p className="mt-3 font-medium text-card-foreground">{text}</p>
    </Card>
  );
}

export function WinCard({ text }: { text: string }) {
  return (
    <Card>
      <span className="text-2xl">✅</span>
      <p className="mt-3 font-medium text-card-foreground">{text}</p>
    </Card>
  );
}

export function StepCard({ n, text }: { n: number; text: string }) {
  return (
    <Card>
      <span className="inline-flex size-9 items-center justify-center rounded-full bg-gradient-to-r from-success to-brand text-sm font-bold text-primary-foreground">
        {n}
      </span>
      <p className="mt-3 font-medium text-card-foreground">{text}</p>
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
    <div className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-success/40">
      <div className="flex size-11 items-center justify-center rounded-xl bg-success/10 text-success transition-colors group-hover:bg-success/20">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
      <div className="mt-6 flex items-center justify-between">
        <span className="h-px w-10 bg-gradient-to-r from-success to-brand" />
        <span className="text-2xl font-extrabold text-border">
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
        <AccordionItem key={item.q} value={`item-${i}`} className="border-border/70">
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
}: {
  setup: string;
  monthly: string;
  includes: string[];
  highlight?: boolean;
  note?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto max-w-lg rounded-2xl border p-8 shadow-lg",
        highlight
          ? "border-success/50 bg-card shadow-success/10"
          : "border-border bg-card shadow-black/20",
      )}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-success to-brand px-4 py-1 text-xs font-bold text-primary-foreground shadow-md">
          Sem fidelidade
        </span>
      )}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Setup (uma vez)</p>
          <p className="text-3xl font-bold text-foreground">{setup}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Recorrência</p>
          <p className="text-3xl font-bold text-success">{monthly}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
        {includes.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-success">✅</span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
      {note && <p className="mt-6 text-xs text-muted-foreground">{note}</p>}
    </div>
  );
}

export function ChatDemo({ messages }: { messages: { from: "user" | "ai"; text: string }[] }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-border bg-card p-4 shadow-2xl shadow-black/40">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
        <p className="text-xs font-semibold text-muted-foreground">WhatsApp · Agente ZapBook</p>
        <span className="flex items-center gap-1 text-[10px] font-semibold text-success">
          <span className="size-1.5 rounded-full bg-success" /> online
        </span>
      </div>
      <div className="space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.from === "user"
                ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-secondary px-3 py-2 text-sm text-secondary-foreground"
                : "mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-gradient-to-r from-success to-brand px-3 py-2 text-sm text-primary-foreground"
            }
          >
            {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="relative border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl font-extrabold text-foreground sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
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
}: {
  eyebrow?: string;
  headline: string;
  sub: string;
  cta?: ReactNode;
  visual?: ReactNode;
  stats?: { value: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/4 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-0 h-[360px] w-[360px] rounded-full bg-success/20 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:py-28 md:grid-cols-2">
        <div>
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold text-success">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">{sub}</p>
          <div className="mt-8 flex justify-start">{cta}</div>
        </div>
        <div>{visual}</div>
      </div>

      {stats && <StatRow stats={stats} />}
    </section>
  );
}
