import { WHATSAPP_CTA } from "./data";

export function CTA({
  label = "Agendar Demo Agora",
  helper,
  title,
  description,
  buttonText,
  buttonLink,
}: {
  label?: string;
  helper?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 px-4 py-12">
      {title && <h2 className="font-serif text-3xl italic text-foreground sm:text-4xl">{title}</h2>}
      {description && <p className="text-muted-foreground">{description}</p>}
      <a
        href={buttonLink ?? WHATSAPP_CTA}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-mono text-sm font-medium tracking-[0.02em] text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        {buttonText ?? label}
      </a>
      {helper && (
        <p className="font-mono text-xs tracking-[0.02em] text-muted-foreground">{helper}</p>
      )}
    </div>
  );
}
