import { WHATSAPP_CTA } from "./data";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="site-cta flex flex-col items-center gap-3 py-5">
      {title && <h2 className="font-serif text-3xl italic text-foreground sm:text-4xl">{title}</h2>}
      {description && <p className="text-muted-foreground">{description}</p>}
      <Button asChild size="lg" className="h-12 rounded-lg px-6 text-sm font-semibold">
      <a
        href={buttonLink ?? WHATSAPP_CTA}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText ?? label}
        <ArrowUpRight aria-hidden className="size-4" />
      </a>
      </Button>
      {helper && (
        <p className="cta-helper text-xs text-muted-foreground">{helper}</p>
      )}
    </div>
  );
}
