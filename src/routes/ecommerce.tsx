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

const title = "E-commerce com Suporte IA 24/7 | ZapBook";
const description =
  "Agente que responde dúvida de compra, processa pedido e reduz devolução.";

export const Route = createFileRoute("/ecommerce")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EcommercePage,
});

function EcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero
        title="E-commerce com suporte IA 24/7"
        subtitle="Agente que responde dúvida de compra, processa pedido e reduz devolução"
        ctaText="Demo Grátis"
        ctaLink="https://wa.me/5553991774147"
      />

      <Section>
        <SectionTitle>Carrinho abandonado = dinheiro perdido</SectionTitle>
        <p className="text-center text-lg text-gray-700 mb-8">
          70% dos carrinhos abandonados porque: cliente tem dúvida + não consegue resposta rápida + desiste
        </p>
        <div className="text-6xl text-center">🛒</div>
      </Section>

      <Section>
        <SectionTitle>IA salva venda</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WinCard
            icon="✅"
            title="Cliente pergunta"
            description="Serve em 32?"
          />
          <WinCard
            icon="✅"
            title="Agente responde"
            description="Foto, preço, frete confirmado"
          />
          <WinCard
            icon="✅"
            title="Venda fechada"
            description="Em 30 segundos"
          />
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionTitle>ROI comprovado</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PriceCard title="-50%" subtitle="carrinho abandonado" />
          <PriceCard title="+35%" subtitle="conversão" />
          <PriceCard title="-20%" subtitle="devoluções" />
        </div>
      </Section>

      <Section>
        <SectionTitle>Preço</SectionTitle>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span>Setup (único)</span>
              <span className="text-2xl font-bold">R$ 2.500</span>
            </div>
            <div className="flex justify-between text-lg border-t pt-4">
              <span>Mensalidade</span>
              <span className="text-2xl font-bold">R$ 500/mês</span>
            </div>
          </div>
        </div>
      </Section>

      <CTA 
        title="Recupere seus carrinhos"
        description="Começe grátis hoje"
        buttonText="Ver Sistema"
        buttonLink="https://wa.me/5553991774147"
      />

      <Footer />
    </div>
  );
}
