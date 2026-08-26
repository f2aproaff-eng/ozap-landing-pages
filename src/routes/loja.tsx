import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import {
  ChatSim,
  FaqSection,
  FeatureGrid,
  Hero,
  PainCard,
  PriceCard,
  Section,
  SectionTitle,
  StepCard,
  WinCard,
} from "@/components/site/sections";
import { FAQS, FEATURES, LOJA_CHAT } from "@/components/site/data";

const title = "Loja com Atendimento IA 24/7 | ZapPulse";
const description =
  "Agente que vende, tira dúvida de estoque e atende 24/7 — sem barreira de entrada.";

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

const featured = FEATURES.filter((f) =>
  [
    "IA própria, sem custo extra",
    "Digitação humanizada",
    "Múltiplos números",
    "Entende áudio e imagem",
    "Você sempre no controle",
    "Configuração em minutos",
  ].includes(f.title),
);

const lojaFaqs = [
  {
    q: "O agente sabe informar estoque em tempo real?",
    a: "Sim, você mantém o estoque atualizado e o agente sempre responde com a disponibilidade certa, sem prometer o que não tem.",
  },
  {
    q: "Funciona pra reserva de retirada na loja, não só entrega?",
    a: "Funciona. O agente pode reservar a peça e combinar horário de retirada, sem precisar de entrega.",
  },
  ...FAQS.filter((f) =>
    [
      "Posso assumir a conversa manualmente quando quiser?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function LojaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para lojas e comércio local"
          headline="Sua Loja Vendendo 24 Horas por Dia"
          sub="Agente de IA que atende, tira dúvida de estoque e fecha venda, mesmo fora do horário comercial."
          cta={<CTA helper="Resposta em minutos, sem compromisso." />}
          visual={<ChatSim messages={LOJA_CHAT} />}
          stats={[
            { value: "24/7", label: "Atendimento" },
            { value: "+30%", label: "Vendas/mês" },
            { value: "0", label: "Fidelidade ou multa" },
            { value: "< 10 min", label: "Para colocar no ar" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Todo dia a mesma corrida" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Cliente manda mensagem fora do horário e ninguém responde" />
            <PainCard text="Dúvida de estoque ou tamanho sem resposta = venda perdida" />
            <PainCard text="Você perde venda pra concorrente que responde mais rápido" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Um agente que atende como você" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente responde e vende mesmo fora do horário comercial" />
            <WinCard text="Confirma estoque, tamanho e cor em tempo real" />
            <WinCard text="Fecha reserva ou pedido direto na conversa" />
            <WinCard text="Recomendações inteligentes aumentam o ticket médio" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text="Cliente manda mensagem sobre um produto" />
            <StepCard n={2} text="IA responde com estoque, preço e disponibilidade" />
            <StepCard n={3} text="Fecha pedido ou reserva pra retirada" />
            <StepCard n={4} text="Você recebe o pedido pronto no seu painel" />
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="O que vem junto com o seu agente"
            subtitle="Os mesmos recursos que rodam por trás da plataforma ZapPulse, aplicados ao dia a dia da loja."
          />
          <FeatureGrid features={featured} />
        </Section>

        <Section alt>
          <SectionTitle title="Investimento" subtitle="Sem fidelidade. Cancele quando quiser." />
          <PriceCard
            highlight
            setup="R$ 1.200"
            monthly="R$ 300/mês"
            includes={["Configuração completa", "Catálogo integrado", "Suporte contínuo"]}
          />
        </Section>

        <Section>
          <SectionTitle eyebrow="Dúvidas comuns" title="Perguntas frequentes" />
          <FaqSection items={lojaFaqs} />
        </Section>

        <Section alt>
          <SectionTitle title="Pronto pra vender 24 horas por dia?" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
