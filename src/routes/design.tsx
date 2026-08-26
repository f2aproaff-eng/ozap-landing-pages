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

const title = "Agência de Design com IA | ZapBook";
const description =
  "IA tira briefing, qualifica projeto, agenda consultoria automática.";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DesignPage,
});

function DesignPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero
        title="Agência de design recebe briefing automático"
        subtitle="IA tira briefing, qualifica projeto, agenda consultoria"
        ctaText="Ver Demo"
        ctaLink="https://wa.me/5553991774147"
      />

      <Section>
        <SectionTitle>Projeto vago = retrabalho</SectionTitle>
        <p className="text-center text-lg text-gray-700 mb-8">
          Agência perde tempo porque: cliente não sabe explicar | você faz | cliente odeia | refaz 3x
        </p>
        <div className="text-6xl text-center">🎨</div>
      </Section>

      <Section>
        <SectionTitle>IA tira briefing profissional</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WinCard
            icon="✅"
            title="Cliente diz"
            description="Quero site novo"
          />
          <WinCard
            icon="✅"
            title="Agente tira"
            description="Estilo, público, orçamento"
          />
          <WinCard
            icon="✅"
            title="Você sabe"
            description="Exatamente o que fazer"
          />
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionTitle>Vende mais + retrabalho zero</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PriceCard title="3h" subtitle="briefing economizadas/semana" />
          <PriceCard title="-70%" subtitle="retrabalho" />
          <PriceCard title="+50%" subtitle="satisfação cliente" />
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
        title="Melhore seus projetos"
        description="Menos retrabalho, mais lucro"
        buttonText="Ver Demo"
        buttonLink="https://wa.me/5553991774147"
      />

      <Footer />
    </div>
  );
}
