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

const title = "Venda Imóvel com Agente de IA | ZapBook";
const description =
  "Qualifica lead, agenda visita, reduz tempo de venda com inteligência artificial.";

export const Route = createFileRoute("/imobiliaria")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ImobiliáriaPage,
});

function ImobiliáriaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero
        title="Venda imóvel com agente de IA"
        subtitle="Qualifica lead, agenda visita, reduz tempo de venda"
        ctaText="Começar"
        ctaLink="https://wa.me/5553991774147"
      />

      <Section>
        <SectionTitle>Lead frio demora = oportunidade perdida</SectionTitle>
        <p className="text-center text-lg text-gray-700 mb-8">
          Imobiliária perde venda porque: cliente pergunta detalhe | demora responder | compra com concorrente
        </p>
        <div className="text-6xl text-center">🏠</div>
      </Section>

      <Section>
        <SectionTitle>IA qualifica cliente</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WinCard
            icon="✅"
            title="Cliente pergunta"
            description="Tem imóvel 2 quartos?"
          />
          <WinCard
            icon="✅"
            title="Agente descreve"
            description="Foto, preço, agendamento"
          />
          <WinCard
            icon="✅"
            title="Visita agendada"
            description="Na hora"
          />
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionTitle>Vende mais rápido</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PriceCard title="+30%" subtitle="vendas/mês" />
          <PriceCard title="-40%" subtitle="ciclo venda" />
          <PriceCard title="+50%" subtitle="conversão lead" />
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
        title="Comece a vender agora"
        description="Ganhe tempo, venda mais"
        buttonText="Começar"
        buttonLink="https://wa.me/5553991774147"
      />

      <Footer />
    </div>
  );
}
