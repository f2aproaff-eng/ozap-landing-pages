import { WHATSAPP_CTA } from "./data";

export function CTA({ label = "Agendar Demo Agora", helper }: { label?: string; helper?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={WHATSAPP_CTA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-mono text-sm font-medium tracking-[0.02em] text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        {label}
      </a>
      {helper && (
        <p className="font-mono text-xs tracking-[0.02em] text-muted-foreground">{helper}</p>
      )}
    </div>
  );
}
