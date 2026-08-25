import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import {
  ChatDemo,
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
import { FAQS, FEATURES } from "@/components/site/data";

const title = "Agendamento Automático com IA | ZapBook - Consultórios";
const description =
  "Seu consultório perde agendamentos no WhatsApp? O agente de IA da ZapBook responde 24/7, agenda no Google Calendar e reduz no-show.";

export const Route = createFileRoute("/consultorio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConsultorioPage,
});

const featured = FEATURES.filter((f) =>
  [
    "IA própria, sem custo extra",
    "Digitação humanizada",
    "Integrações prontas",
    "Entende áudio e imagem",
    "Você sempre no controle",
    "Configuração em minutos",
  ].includes(f.title),
);

const consultorioFaqs = [
  {
    q: "Funciona com a minha agenda no Google Calendar?",
    a: "Sim. A integração já vem pronta: o agente confere seus horários livres em tempo real e agenda direto no seu Google Calendar, sem risco de choque de horário.",
  },
  {
    q: "E se o paciente quiser remarcar ou cancelar?",
    a: "O agente entende esses pedidos, ajusta o Google Calendar automaticamente e confirma a mudança pelo WhatsApp — sem precisar da sua intervenção.",
  },
  ...FAQS.filter((f) =>
    [
      "Posso assumir a conversa manualmente quando quiser?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function ConsultorioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para consultórios isolados"
          headline="Pare de Perder Agendamentos no WhatsApp"
          sub="Seu agente de IA responde 24/7. Pacientes agendam sozinhos, direto no seu Google Calendar."
          cta={<CTA helper="Resposta em minutos, sem compromisso." />}
          visual={
            <ChatDemo
              messages={[
                { from: "user", text: "Oi, tem horário essa semana?" },
                { from: "ai", text: "Olá! Tenho quinta às 14h ou sexta às 9h. Qual prefere?" },
                { from: "user", text: "Quinta 14h" },
                { from: "ai", text: "Agendado ✅ Enviei a confirmação e lembro você 24h antes." },
              ]}
            />
          }
          stats={[
            { value: "2-3h/dia", label: "Tempo economizado" },
            { value: "24/7", label: "Resposta imediata" },
            { value: "-40%", label: "Menos no-show*" },
            { value: "< 10 min", label: "Para colocar no ar" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Todo dia a mesma corrida" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Você gasta 2-3h/dia respondendo mensagens" />
            <PainCard text="Paciente desiste porque a resposta demora" />
            <PainCard text="Receita perdida por falta de resposta rápida" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Um agente que atende como você" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente de IA responde 24/7 no WhatsApp" />
            <WinCard text="Agendamento automático no Google Calendar" />
            <WinCard text="Confirmação + lembrete pré-consulta (reduz no-show)" />
            <WinCard text="Humanizado: não parece robô" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text="Paciente manda mensagem no WhatsApp" />
            <StepCard n={2} text="IA responde e coleta dados (nome, motivo, data)" />
            <StepCard n={3} text="Agenda direto no seu Google Calendar" />
            <StepCard n={4} text="Confirmação automática + lembrete 24h antes" />
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="O que vem junto com o seu agente"
            subtitle="Os mesmos recursos que rodam por trás da plataforma ZapBook, aplicados ao dia a dia do consultório."
          />
          <FeatureGrid features={featured} />
        </Section>

        <Section alt>
          <SectionTitle title="Investimento" subtitle="Sem fidelidade. Cancele quando quiser." />
          <PriceCard
            highlight
            setup="R$ 2.000"
            monthly="R$ 400/mês"
            includes={["Configuração completa", "Google Calendar integrado", "Suporte contínuo"]}
            note="*Redução de faltas estimada com lembrete automático 24h antes da consulta."
          />
        </Section>

        <Section>
          <SectionTitle eyebrow="Dúvidas comuns" title="Perguntas frequentes" />
          <FaqSection items={consultorioFaqs} />
        </Section>

        <Section alt>
          <SectionTitle title="Quer ver funcionando no seu consultório?" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
