import type { ReactNode } from "react";

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
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
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

export function PriceCard({
  setup,
  monthly,
  includes,
}: {
  setup: string;
  monthly: string;
  includes: string[];
}) {
  return (
    <div className="mx-auto max-w-lg rounded-xl border border-brand/30 bg-card p-8 shadow-lg">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Setup (uma vez)</p>
          <p className="text-3xl font-bold text-brand-deep">{setup}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Recorrência</p>
          <p className="text-3xl font-bold text-success">{monthly}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
        {includes.map((i) => (
          <li key={i}>✅ {i}</li>
        ))}
      </ul>
    </div>
  );
}

export function ChatDemo({ messages }: { messages: { from: "user" | "ai"; text: string }[] }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-border bg-card p-4 shadow-xl">
      <p className="mb-3 border-b border-border pb-2 text-xs font-semibold text-muted-foreground">
        WhatsApp · Agente oZap
      </p>
      <div className="space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.from === "user"
                ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-brand-soft px-3 py-2 text-sm text-brand-deep"
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

export function Hero({
  headline,
  sub,
  cta,
  visual,
}: {
  headline: string;
  sub: string;
  cta?: ReactNode;
  visual?: ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-brand-deep via-brand to-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:py-28 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-5 text-lg text-primary-foreground/85">{sub}</p>
          <div className="mt-8 flex justify-start">{cta}</div>
        </div>
        <div>{visual}</div>
      </div>
    </section>
  );
}
