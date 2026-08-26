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

const title = "Escola com Matrícula Automática | ZapBook";
const description =
  "IA responde dúvida de pai, agenda visita, qualifica candidato.";

export const Route = createFileRoute("/escola")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EscolaPage,
});

function EscolaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero
        title="Escola com matrícula automática"
        subtitle="IA responde dúvida de pai, agenda visita, qualifica candidato"
        ctaText="Começar Agora"
        ctaLink="https://wa.me/5553991774147"
      />

      <Section>
        <SectionTitle>Interessado que demora = oportunidade perdida</SectionTitle>
        <p className="text-center text-lg text-gray-700 mb-8">
          Escola perde aluno porque: pai tem dúvida | escola demora | desiste | coloca filho em outro lugar
        </p>
        <div className="text-6xl text-center">🎓</div>
      </Section>

      <Section>
        <SectionTitle>IA fideliza pai</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WinCard
            icon="✅"
            title="Pai pergunta"
            description="Qual valor?"
          />
          <WinCard
            icon="✅"
            title="Agente explica"
            description="Proposta, agenda visita"
          />
          <WinCard
            icon="✅"
            title="Acompanha"
            description="Reduz desistência"
          />
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionTitle>Cresce matrícula</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PriceCard title="+35%" subtitle="matrículas/ano" />
          <PriceCard title="-40%" subtitle="desistência visitante" />
          <PriceCard title="4h" subtitle="retrabalho reduzido/dia" />
        </div>
      </Section>

      <Section>
        <SectionTitle>Preço</SectionTitle>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span>Setup (único)</span>
              <span className="text-2xl font-bold">R$ 1.200</span>
            </div>
            <div className="flex justify-between text-lg border-t pt-4">
              <span>Mensalidade</span>
              <span className="text-2xl font-bold">R$ 300/mês</span>
            </div>
          </div>
        </div>
      </Section>

      <CTA 
        title="Comece agora"
        description="Mais alunos, mais receita"
        buttonText="Começar Agora"
        buttonLink="https://wa.me/5553991774147"
      />

      <Footer />
    </div>
  );
}
