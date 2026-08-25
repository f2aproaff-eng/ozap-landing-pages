const WHATSAPP_CTA =
  "https://wa.me/5553991774147?text=Oi!%20Gostaria%20de%20uma%20demo";

export function CTA({
  label = "Agendar Demo Agora",
  helper,
}: {
  label?: string;
  helper?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={WHATSAPP_CTA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-success to-brand px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
      >
        {label}
      </a>
      {helper && <p className="text-sm text-muted-foreground">{helper}</p>}
    </div>
  );
}
