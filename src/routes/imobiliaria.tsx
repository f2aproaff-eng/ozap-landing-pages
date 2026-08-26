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
import { FAQS, FEATURES, IMOBILIARIA_CHAT } from "@/components/site/data";

const title = "Venda Imóvel com Agente de IA | ZapPulse";
const description = "Qualifica lead, agenda visita e reduz tempo de venda — direto no WhatsApp.";

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
  component: ImobiliariaPage,
});

const featured = FEATURES.filter((f) =>
  [
    "IA própria, sem custo extra",
    "Pipeline visual de leads",
    "Integrações prontas",
    "Múltiplos números",
    "Você sempre no controle",
    "Configuração em minutos",
  ].includes(f.title),
);

const imobiliariaFaqs = [
  {
    q: "O agente consegue enviar fotos e detalhes de vários imóveis?",
    a: "Sim, você cadastra o catálogo de imóveis e o agente busca e envia as informações certas conforme o interesse do lead.",
  },
  {
    q: "Dá pra qualificar o lead antes de agendar a visita?",
    a: "Dá. O agente pergunta orçamento, região e urgência antes de marcar, então você só recebe visita de quem realmente tem chance de fechar.",
  },
  ...FAQS.filter((f) =>
    [
      "Posso assumir a conversa manualmente quando quiser?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function ImobiliariaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para imobiliárias e corretores"
          headline="Pare de Perder Lead por Demora no WhatsApp"
          sub="Seu agente de IA qualifica lead, envia detalhes do imóvel e agenda visita na hora."
          cta={<CTA helper="Resposta em minutos, sem compromisso." />}
          visual={<ChatSim messages={IMOBILIARIA_CHAT} />}
          stats={[
            { value: "+30%", label: "Vendas/mês" },
            { value: "-40%", label: "Ciclo de venda" },
            { value: "+50%", label: "Conversão de lead" },
            { value: "< 10 min", label: "Para colocar no ar" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Todo dia a mesma corrida" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Lead pergunta detalhe e demora resposta = compra com concorrente" />
            <PainCard text="Visita agendada sem confirmação vira furo" />
            <PainCard text="Corretor perde tempo repetindo a mesma informação" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Um agente que atende como você" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente envia foto, preço e detalhes na hora" />
            <WinCard text="Qualifica o lead antes de agendar a visita" />
            <WinCard text="Agenda visita direto no seu calendário" />
            <WinCard text="Confirmação + lembrete reduz furo de visita" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text="Lead pergunta sobre um imóvel no WhatsApp" />
            <StepCard n={2} text="IA envia detalhes, fotos e qualifica o interesse" />
            <StepCard n={3} text="Agenda a visita direto no calendário" />
            <StepCard n={4} text="Confirmação automática + lembrete antes da visita" />
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="O que vem junto com o seu agente"
            subtitle="Os mesmos recursos que rodam por trás da plataforma ZapPulse, aplicados ao dia a dia da imobiliária."
          />
          <FeatureGrid features={featured} />
        </Section>

        <Section alt>
          <SectionTitle title="Investimento" subtitle="Sem fidelidade. Cancele quando quiser." />
          <PriceCard
            highlight
            setup="R$ 1.200"
            monthly="R$ 300/mês"
            includes={["Configuração completa", "Google Calendar integrado", "Suporte contínuo"]}
          />
        </Section>

        <Section>
          <SectionTitle eyebrow="Dúvidas comuns" title="Perguntas frequentes" />
          <FaqSection items={imobiliariaFaqs} />
        </Section>

        <Section alt>
          <SectionTitle title="Pronto pra vender mais rápido?" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
