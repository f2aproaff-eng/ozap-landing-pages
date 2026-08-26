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
import { ACADEMIA_CHAT, FAQS, FEATURES } from "@/components/site/data";

const title = "Academia com IA Responde 24h | ZapBook";
const description =
  "Agente de IA que qualifica lead, agenda aula experimental e reduz cancelamento — direto no WhatsApp da sua academia.";

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

const featured = FEATURES.filter((f) =>
  [
    "IA própria, sem custo extra",
    "Digitação humanizada",
    "Pipeline visual de leads",
    "Múltiplos números",
    "Você sempre no controle",
    "Configuração em minutos",
  ].includes(f.title),
);

const academiaFaqs = [
  {
    q: "O agente consegue explicar os planos e valores certinho?",
    a: "Sim. Você configura os planos, valores e condições uma vez, e o agente responde de forma consistente pra qualquer aluno que perguntar, a qualquer hora.",
  },
  {
    q: "Dá pra usar pra cobrar mensalidade atrasada também?",
    a: "Dá. Você pode configurar lembretes automáticos de cobrança, sempre com tom cordial, sem precisar ligar ou mandar mensagem manual.",
  },
  ...FAQS.filter((f) =>
    [
      "Posso assumir a conversa manualmente quando quiser?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function AcademiaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para academias e studios"
          headline="Pare de Perder Aluno por Demora no WhatsApp"
          sub="Seu agente de IA responde 24/7, agenda aula experimental e reduz cancelamento."
          cta={<CTA helper="Resposta em minutos, sem compromisso." />}
          visual={<ChatSim messages={ACADEMIA_CHAT} />}
          stats={[
            { value: "+40%", label: "Matriculados/mês" },
            { value: "-30%", label: "Cancelamento" },
            { value: "2h", label: "Recuperadas/dia" },
            { value: "< 10 min", label: "Para colocar no ar" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Todo dia a mesma corrida" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Lead pergunta valor e nunca mais responde" />
            <PainCard text="Aluno cancela porque ninguém faz follow-up" />
            <PainCard text="Recepção sobrecarregada em horário de pico" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Um agente que atende como você" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente responde valor e condições na hora" />
            <WinCard text="Agenda aula experimental sem intervenção" />
            <WinCard text="Lembretes automáticos reduzem cancelamento" />
            <WinCard text="Acompanhamento pós-matrícula mantém aluno ativo" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text="Lead manda mensagem perguntando sobre planos" />
            <StepCard n={2} text="IA explica valores e agenda aula experimental" />
            <StepCard n={3} text="Confirmação automática + lembrete antes da aula" />
            <StepCard n={4} text="Pós-matrícula: acompanhamento reduz desistência" />
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="O que vem junto com o seu agente"
            subtitle="Os mesmos recursos que rodam por trás da plataforma ZapBook, aplicados ao dia a dia da academia."
          />
          <FeatureGrid features={featured} />
        </Section>

        <Section alt>
          <SectionTitle title="Investimento" subtitle="Sem fidelidade. Cancele quando quiser." />
          <PriceCard
            highlight
            setup="R$ 1.200"
            monthly="R$ 300/mês"
            includes={["Configuração completa", "Pipeline de leads incluso", "Suporte contínuo"]}
          />
        </Section>

        <Section>
          <SectionTitle eyebrow="Dúvidas comuns" title="Perguntas frequentes" />
          <FaqSection items={academiaFaqs} />
        </Section>

        <Section alt>
          <SectionTitle title="Pronto pra lotar sua academia?" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
