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

const title = "Cafeteria com Pedidos 24h | ZapBook";
const description =
  "Agente que tira pedido, confirma retirada e envia notificação automática.";

export const Route = createFileRoute("/cafeteria")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CafetériaPage,
});

function CafetériaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero
        title="Cafeteria pedidos 24h no WhatsApp"
        subtitle="Agente que tira pedido, confirma retirada e envia notificação"
        ctaText="Testar Grátis"
        ctaLink="https://wa.me/5553991774147"
      />

      <Section>
        <SectionTitle>Café pronto que esfria = cliente chato</SectionTitle>
        <p className="text-center text-lg text-gray-700 mb-8">
          Cafeteria perde cliente porque: tira pedido mas cliente demora chegar | café fica pronto mas esquece de avisar
        </p>
        <div className="text-6xl text-center">☕</div>
      </Section>

      <Section>
        <SectionTitle>IA sincroniza tempo</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <WinCard
            icon="✅"
            title="Cliente pede"
            description="Cappuccino"
          />
          <WinCard
            icon="✅"
            title="Agente confirma"
            description="Horário de retirada"
          />
          <WinCard
            icon="✅"
            title="Avisa quando"
            description="Café tá pronto"
          />
        </div>
      </Section>

      <Section className="bg-gray-50">
        <SectionTitle>Café quentinho + cliente feliz</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PriceCard title="0" subtitle="café desperdiçado" />
          <PriceCard title="-80%" subtitle="reclamação" />
          <PriceCard title="+25%" subtitle="volume/dia" />
        </div>
      </Section>

      <Section>
        <SectionTitle>Preço</SectionTitle>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
          <div className="space-y-4">
            <div className="flex justify-between text-lg">
              <span>Setup (único)</span>
              <span className="text-2xl font-bold">R$ 1.500</span>
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
        description="Café melhor, cliente mais feliz"
        buttonText="Demo Grátis"
        buttonLink="https://wa.me/5553991774147"
      />

      <Footer />
    </div>
  );
}
