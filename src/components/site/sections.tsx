import { useEffect, useRef, useState, type ReactNode } from "react";
import { AlertCircle, ArrowUpRight, Check, MessageCircle, type LucideIcon } from "lucide-react";

import officeImage from "@/assets/atendimento-office.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IA_OFF_CHAT, type ChatMsg, type FaqItem } from "./data";

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
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">{children}</div>
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
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase text-brand">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {title ?? children}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="site-card group rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/30">
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
        "flex size-11 items-center justify-center rounded-lg bg-brand-soft transition-colors group-hover:bg-brand/10 group-hover:text-brand",
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
      <div className="flex size-11 items-center justify-center rounded-lg bg-brand-soft font-mono text-sm font-medium text-foreground transition-colors group-hover:bg-brand/10 group-hover:text-brand">
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
    <div className="site-card group relative rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/30">
      <div className="flex size-11 items-center justify-center rounded-lg bg-brand-soft text-foreground transition-colors group-hover:bg-brand/10 group-hover:text-brand">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-4 text-base font-bold text-foreground">
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
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <p className="text-3xl font-bold text-brand">{title}</p>
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
        "relative mx-auto max-w-lg rounded-lg border p-8",
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
          <p className="mt-1 text-3xl font-bold text-foreground">{setup}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
            Recorrência
          </p>
          <p className="mt-1 text-3xl font-bold text-brand">{monthly}</p>
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
    <div className="chat-window mx-auto w-full max-w-md rounded-lg border border-border bg-card p-5">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
        <p className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
          WhatsApp · Agente ZapPulse
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
                ? "ml-auto max-w-[85%] rounded-lg rounded-br-sm bg-secondary px-3 py-2 text-sm text-secondary-foreground"
                : "mr-auto max-w-[85%] rounded-lg rounded-bl-sm border border-brand/30 bg-card px-3 py-2 text-sm text-foreground"
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
    <div className="chat-window mx-auto w-full max-w-md rounded-lg border border-border bg-card p-5">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
        <p className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
          WhatsApp · Agente ZapPulse
        </p>
        <span className="flex items-center gap-1 font-mono text-[10px] text-brand">
          <span className="size-1.5 rounded-full bg-brand" /> online
        </span>
      </div>
      <img src={src} alt={alt} className="w-full rounded-lg" loading="lazy" />
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
  const [visible, setVisible] = useState(1);
  const [typing, setTyping] = useState(false);
  const [iaOn, setIaOn] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iaOn) return;
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
      const message = messages[i];
      if (!message) return;
      const delay = Math.min(2200, Math.max(700, 450 + message.text.length * 16));
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
  }, [messages, iaOn]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visible, typing, iaOn]);

  function toggleIa() {
    setIaOn((prev) => !prev);
    setVisible(0);
    setTyping(false);
  }

  const shown = iaOn ? messages.slice(0, visible) : IA_OFF_CHAT;
  const next = iaOn ? messages[visible] : undefined;

  return (
    <div className="chat-window mx-auto w-full max-w-md rounded-lg border border-border bg-card p-5">
      <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
        <span
          className={cn(
            "flex items-center gap-1.5 font-mono text-[11px] tracking-[0.04em]",
            iaOn ? "text-brand" : "text-muted-foreground",
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              iaOn ? "animate-pulse bg-brand" : "bg-muted-foreground/50",
            )}
          />
          {iaOn ? "IA Ativa" : "IA Desativada"}
        </span>
        <Button
          variant="outline"
          size="sm"
          type="button"
          onClick={toggleIa}
          className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
        >
          {iaOn ? "Desativar IA" : "Ativar IA"}
        </Button>
      </div>
      <div className="mb-4 flex items-center gap-3"><span className="flex size-10 items-center justify-center rounded-full bg-brand-soft text-brand"><MessageCircle className="size-5" /></span><div><p className="text-sm font-bold text-foreground">Assistente ZapPulse</p><p className="text-xs text-muted-foreground">Atendimento pelo WhatsApp</p></div></div>
      <div ref={scrollRef} className="h-[310px] space-y-2 overflow-y-auto pr-1">
        {!iaOn && (
          <p className="mb-2 rounded-lg border border-dashed border-border bg-background/40 px-3 py-2 text-center font-mono text-[10px] leading-relaxed text-muted-foreground">
            Sem IA, ninguém responde — o cliente insiste e desiste.
          </p>
        )}
        {shown.map((m, i) => (
          <div key={i} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
            <div
              className={
                m.from === "user"
                  ? "max-w-[85%] rounded-lg rounded-br-sm bg-secondary px-3 py-2 text-sm text-secondary-foreground"
                  : "max-w-[85%] rounded-lg rounded-bl-sm border border-brand/30 bg-card px-3 py-2 text-sm text-foreground"
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
                  ? "rounded-lg rounded-br-sm bg-secondary px-3.5 py-3"
                  : "rounded-lg rounded-bl-sm border border-brand/30 bg-card px-3.5 py-3"
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
    <div className="hero-stats relative border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-5 py-7 sm:grid-cols-4 sm:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl font-extrabold text-brand sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero({
  eyebrow, headline, sub, cta, visual, stats, wordmark = "ZapPulse",
  title, subtitle, ctaText, ctaLink, image = officeImage,
  imageAlt = "Profissional atendendo clientes em um escritório",
}: {
  eyebrow?: string; headline?: string; sub?: string; title?: string; subtitle?: string;
  ctaText?: string; ctaLink?: string; cta?: ReactNode; visual?: ReactNode;
  stats?: { value: string; label: string }[]; wordmark?: string | false;
  image?: string; imageAlt?: string;
}) {
  return (
    <section className="relative bg-background">
      <div className="hero-photo relative flex items-center overflow-hidden">
        <img src={image} alt={imageAlt} width={1920} height={1024} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-copy relative z-10 mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
          <div className="max-w-xl">
            {eyebrow && <p className="hero-eyebrow mb-4 flex items-center gap-2 text-xs font-semibold uppercase"><span className="h-px w-6 bg-current" />{eyebrow}</p>}
            {wordmark && <p className="mb-3 text-sm font-bold">{wordmark}</p>}
            <h1 className="text-4xl font-extrabold leading-[1.16] sm:text-[44px]">{headline ?? title}</h1>
            <p className="hero-sub mt-5 max-w-lg text-base leading-relaxed">{sub ?? subtitle}</p>
            <div className="mt-5">
              {cta ?? (ctaText && <Button asChild size="lg" className="h-12"><a href={ctaLink} target="_blank" rel="noopener noreferrer">{ctaText}<ArrowUpRight /></a></Button>)}
            </div>
          </div>
        </div>
      </div>
      {stats && <StatRow stats={stats} />}
      {visual && <div className="border-b border-border bg-surface-alt">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-12 sm:px-8 md:grid-cols-2">
          <div className="max-w-md"><p className="mb-3 text-xs font-bold uppercase text-brand">Atendimento que não para</p><h2 className="text-3xl font-bold leading-tight text-foreground">Mais tempo para o seu negócio.<br />Menos mensagens esperando.</h2><p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub ?? subtitle}</p><div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand"><Check className="size-4" /> Você sempre no controle</div></div>
          <div className="min-w-0">{visual}</div>
        </div>
      </div>}
    </section>
  );
}
