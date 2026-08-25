import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import {
  Hero,
  PriceCard,
  Section,
  SectionTitle,
  WinCard,
} from "@/components/site/sections";

const title = "Academia com IA Responde 24h | ZapBook";
const description =
  "Agente que qualifica lead, agenda prova, reduz cancelamento.";

export const Route = createFileRoute("/academia")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AcademiaPage,
});

function AcademiaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero
        title="Academia com IA responde 24h"
        subtitle="Agente que qualifica lead, agenda prova, reduz cancelamento"
        ctaText="Começar"
        ctaLink="https://wa.me/5553991774147"
      />

      <Section>
        <SectionTitle>Lead interessado que não fecha = frustração</SectionTitle>
        <p className="text-center text-lg text-gray-700 mb-8">
          Academia perde matriculado porque: pessoa interessa, demora confirmar aula experimento, desiste
        </p>
        <div className="text-6xl text-center">💪</div>
      </Section>

      <Section>
        <SectionTitle>IA converte lead</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WinCard
            icon="✅"
            title="Pessoa pergunta"
            description="Qual valor mensal?"
          />
          <WinCard
            icon="✅"
            title="Agente explica"
            description="Plano, prova grátis, horários"
          />
          <WinCard
            icon="✅"
            title="Reduz cancelamento"
            description="Lembretes + acompanhamento"
          />
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionTitle>Cresce e retém</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PriceCard title="+40%" subtitle="matriculados/mês" />
          <PriceCard title="-30%" subtitle="cancelamento" />
          <PriceCard title="2h" subtitle="recuperadas/dia" />
        </div>
      </Section>

      <Section>
        <SectionTitle>Preço</SectionTitle>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span>Setup (único)</span>
              <span className="text-2xl font-bold">R$ 2.000</span>
            </div>
            <div className="flex justify-between text-lg border-t pt-4">
              <span>Mensalidade</span>
              <span className="text-2xl font-bold">R$ 400/mês</span>
            </div>
          </div>
        </div>
      </Section>

      <CTA 
        title="Comece a crescer"
        description="Mais alunos, menos desistência"
        buttonText="Começar"
        buttonLink="https://wa.me/5553991774147"
      />

      <Footer />
    </div>
  );
}
