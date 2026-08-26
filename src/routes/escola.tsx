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
import { ESCOLA_CHAT, FAQS, FEATURES } from "@/components/site/data";

const title = "Escola com Matrícula Automática | ZapPulse";
const description =
  "IA responde dúvida de pai, agenda visita e qualifica candidato — reduz desistência.";

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

const featured = FEATURES.filter((f) =>
  [
    "IA própria, sem custo extra",
    "Digitação humanizada",
    "Pipeline visual de leads",
    "Integrações prontas",
    "Você sempre no controle",
    "Configuração em minutos",
  ].includes(f.title),
);

const escolaFaqs = [
  {
    q: "O agente consegue explicar a proposta pedagógica certinho?",
    a: "Sim, você configura as informações da escola uma vez e o agente responde de forma consistente pra qualquer pai que perguntar.",
  },
  {
    q: "Dá pra agendar direto no calendário da secretaria?",
    a: "Dá. A integração com Google Calendar já vem pronta, então a visita é agendada sem risco de choque de horário.",
  },
  ...FAQS.filter((f) =>
    [
      "Posso assumir a conversa manualmente quando quiser?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function EscolaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para escolas e cursos"
          headline="Pare de Perder Matrícula por Demora no WhatsApp"
          sub="Seu agente de IA responde dúvida de pai, agenda visita e reduz desistência."
          cta={<CTA helper="Resposta em minutos, sem compromisso." />}
          visual={<ChatSim messages={ESCOLA_CHAT} />}
          stats={[
            { value: "+35%", label: "Matrículas/ano" },
            { value: "-40%", label: "Desistência visitante" },
            { value: "4h", label: "Retrabalho reduzido/dia" },
            { value: "< 10 min", label: "Para colocar no ar" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Todo dia a mesma corrida" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Pai com dúvida espera resposta e procura outra escola" />
            <PainCard text="Visita agendada sem confirmação vira falta" />
            <PainCard text="Secretaria sobrecarregada em época de matrícula" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Um agente que atende como você" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente explica valores e proposta pedagógica na hora" />
            <WinCard text="Agenda visita direto no calendário da escola" />
            <WinCard text="Confirmação + lembrete reduz falta na visita" />
            <WinCard text="Acompanhamento pós-visita reduz desistência" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text="Pai manda mensagem perguntando sobre vaga" />
            <StepCard n={2} text="IA explica proposta, valores e agenda a visita" />
            <StepCard n={3} text="Confirmação automática + lembrete antes da visita" />
            <StepCard n={4} text="Acompanhamento até a matrícula ser fechada" />
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="O que vem junto com o seu agente"
            subtitle="Os mesmos recursos que rodam por trás da plataforma ZapPulse, aplicados ao dia a dia da escola."
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
          <FaqSection items={escolaFaqs} />
        </Section>

        <Section alt>
          <SectionTitle title="Pronto pra lotar as vagas da sua escola?" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
