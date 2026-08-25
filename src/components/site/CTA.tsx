import { WHATSAPP_CTA } from "./data";

export function CTA({ label = "Agendar Demo Agora", helper }: { label?: string; helper?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={WHATSAPP_CTA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-success to-brand px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-success/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
      >
        {label}
      </a>
      {helper && <p className="text-sm text-muted-foreground">{helper}</p>}
    </div>
  );
}
