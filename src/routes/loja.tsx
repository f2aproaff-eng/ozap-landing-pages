import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import {
  Hero,
  PainCard,
  PriceCard,
  Section,
  SectionTitle,
  WinCard,
} from "@/components/site/sections";

const title = "Loja Virtual com Agente de IA | ZapBook";
const description =
  "Sua loja vende 24 horas no WhatsApp. Agente de IA descreve produto, tira pedido e fecha venda automaticamente.";

export const Route = createFileRoute("/loja")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LojaPage,
});

function LojaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero
        title="Sua loja vende 24 horas no WhatsApp"
        subtitle="Agente de IA que descreve produto, tira pedido e fecha venda"
        ctaText="Testar Grátis"
        ctaLink="https://wa.me/5553991774147"
      />

      <Section>
        <SectionTitle>Cliente quer info NOW</SectionTitle>
        <p className="text-center text-lg text-gray-700 mb-8">
          Loja perde venda porque: cliente pergunta tamanho/cor/preço | você demora responder | ele compra no concorrente
        </p>
        <div className="text-6xl text-center">🏪</div>
      </Section>

      <Section>
        <SectionTitle>Agente vende automático</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WinCard
            icon="✅"
            title="Cliente pergunta"
            description="Qual cor essa blusa?"
          />
          <WinCard
            icon="✅"
            title="Agente responde"
            description="Descreve, mostra preço, oferece frete"
          />
          <WinCard
            icon="✅"
            title="Venda fechada"
            description="Cliente compra na hora (0 demora)"
          />
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionTitle>Crescimento garantido</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PriceCard title="+40%" subtitle="conversão" />
          <PriceCard title="-2h" subtitle="atendimento/dia" />
          <PriceCard title="+200%" subtitle="vendas possível" />
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
        title="Comece a vender agora"
        description="Demonstração grátis de 7 dias"
        buttonText="Demo Grátis"
        buttonLink="https://wa.me/5553991774147"
      />

      <Footer />
    </div>
  );
}
