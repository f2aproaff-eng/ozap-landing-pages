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
import { ECOMMERCE_CHAT, FAQS, FEATURES } from "@/components/site/data";

const title = "E-commerce com Suporte IA 24/7 | ZapPulse";
const description =
  "Agente que responde dúvida de compra, processa pedido e reduz carrinho abandonado.";

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

const featured = FEATURES.filter((f) =>
  [
    "IA própria, sem custo extra",
    "Pipeline visual de leads",
    "Integrações prontas",
    "Entende áudio e imagem",
    "Múltiplos números",
    "Configuração em minutos",
  ].includes(f.title),
);

const ecommerceFaqs = [
  {
    q: "O agente sabe informar estoque e variações em tempo real?",
    a: "Sim, você conecta seu catálogo e o agente sempre responde com a disponibilidade e as variações atualizadas.",
  },
  {
    q: "Dá pra gerar o link de pagamento direto na conversa?",
    a: "Dá. O agente pode enviar o link de pagamento assim que o pedido é confirmado, sem sair do WhatsApp.",
  },
  ...FAQS.filter((f) =>
    [
      "Posso assumir a conversa manualmente quando quiser?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function EcommercePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para lojas online"
          headline="Pare de Perder Venda por Demora no WhatsApp"
          sub="Seu agente de IA responde dúvida, confirma pedido e recupera carrinho abandonado."
          cta={<CTA helper="Resposta em minutos, sem compromisso." />}
          visual={<ChatSim messages={ECOMMERCE_CHAT} />}
          stats={[
            { value: "-50%", label: "Carrinho abandonado" },
            { value: "+35%", label: "Conversão" },
            { value: "-20%", label: "Devoluções" },
            { value: "< 10 min", label: "Para colocar no ar" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Todo dia a mesma corrida" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Cliente pergunta e demora resposta = desiste" />
            <PainCard text="Carrinho fica parado sem ninguém retomar contato" />
            <PainCard text="Dúvida de tamanho ou cor gera devolução" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Um agente que atende como você" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente responde dúvida com foto, preço e frete na hora" />
            <WinCard text="Fecha pedido direto na conversa" />
            <WinCard text="Recupera carrinho abandonado automaticamente" />
            <WinCard text="Reduz devolução esclarecendo dúvida antes da compra" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text="Cliente pergunta sobre um produto no WhatsApp" />
            <StepCard n={2} text="IA responde com detalhes, preço e prazo de entrega" />
            <StepCard n={3} text="Fecha o pedido e envia o link de pagamento" />
            <StepCard n={4} text="Acompanha e recupera carrinhos parados" />
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="O que vem junto com o seu agente"
            subtitle="Os mesmos recursos que rodam por trás da plataforma ZapPulse, aplicados ao dia a dia do e-commerce."
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
          <FaqSection items={ecommerceFaqs} />
        </Section>

        <Section alt>
          <SectionTitle title="Pronto pra recuperar suas vendas?" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
