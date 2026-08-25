import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { Section, SectionTitle } from "@/components/site/sections";

const title = "oZap | Agendamento e Triagem Automáticos com IA no WhatsApp";
const description =
  "A oZap instala um agente de IA no seu WhatsApp: responde 24/7, agenda no Google Calendar e qualifica leads para consultórios, clínicas e advogados.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const niches = [
  {
    to: "/consultorio" as const,
    label: "Consultórios",
    text: "Pare de perder agendamentos no WhatsApp. IA responde 24/7.",
  },
  {
    to: "/clinicas" as const,
    label: "Clínicas",
    text: "Múltiplos profissionais, agenda organizada e sem duplicidade.",
  },
  {
    to: "/advogados" as const,
    label: "Advogados",
    text: "Triagem automática de leads: de 30min para 2min.",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-brand-deep via-brand to-background">
          <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:py-32">
            <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl">
              Seu WhatsApp atendendo sozinho, 24 horas por dia
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/85">
              Agente de IA que responde, agenda e qualifica — feito para o seu tipo de negócio.
            </p>
            <div className="mt-8 flex justify-center">
              <CTA />
            </div>
          </div>
        </section>

        <Section alt>
          <SectionTitle title="Escolha o seu segmento" />
          <div className="grid gap-6 md:grid-cols-3">
            {niches.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="text-xl font-bold text-brand-deep">{n.label}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{n.text}</p>
                <p className="mt-4 text-sm font-semibold text-success">Ver página →</p>
              </Link>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
