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
import { BARBEARIA_CHAT, FAQS, FEATURES } from "@/components/site/data";

const title = "Barbearia com Agendamento Automático | ZapPulse";
const description =
  "Agente de IA que marca horário, evita furo de agenda e responde 24/7 no WhatsApp da barbearia.";

export const Route = createFileRoute("/barbearia")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BarbeariaPage,
});

const featured = FEATURES.filter((f) =>
  [
    "IA própria, sem custo extra",
    "Digitação humanizada",
    "Integrações prontas",
    "Múltiplos números",
    "Você sempre no controle",
    "Configuração em minutos",
  ].includes(f.title),
);

const barbeariaFaqs = [
  {
    q: "O agente sabe os horários de cada profissional?",
    a: "Sabe. Você configura a agenda de cada barbeiro ou profissional e o agente só oferece os horários realmente disponíveis.",
  },
  {
    q: "Dá pra reduzir falta de cliente que esquece o horário?",
    a: "Dá. O agente manda lembrete automático antes do horário marcado, o que reduz bastante o furo de agenda.",
  },
  ...FAQS.filter((f) =>
    [
      "Posso assumir a conversa manualmente quando quiser?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function BarbeariaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para barbearias e salões"
          headline="Pare de Perder Horário por Demora no WhatsApp"
          sub="Seu agente de IA marca horário, confirma e reduz furo de agenda — sozinho, 24/7."
          cta={<CTA helper="Resposta em minutos, sem compromisso." />}
          visual={<ChatSim messages={BARBEARIA_CHAT} />}
          stats={[
            { value: "-35%", label: "Furo de agenda" },
            { value: "+25%", label: "Agendamentos/mês" },
            { value: "2h", label: "Economizadas/dia" },
            { value: "< 10 min", label: "Para colocar no ar" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Todo dia a mesma corrida" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Cliente manda mensagem e some sem resposta rápida" />
            <PainCard text="Agenda lotada de horário e ninguém confirma" />
            <PainCard text="Furo de agenda = cadeira vazia = dinheiro perdido" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Um agente que atende como você" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente responde e marca horário na hora, 24/7" />
            <WinCard text="Confirmação + lembrete reduz furo de agenda" />
            <WinCard text="Mostra horários livres em tempo real" />
            <WinCard text="Cliente remarca sozinho, sem ligar pro salão" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text="Cliente manda mensagem querendo marcar horário" />
            <StepCard n={2} text="IA mostra horários livres e confirma o agendamento" />
            <StepCard n={3} text="Confirmação automática + lembrete antes do horário" />
            <StepCard n={4} text="Cliente pode remarcar direto pelo WhatsApp" />
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="O que vem junto com o seu agente"
            subtitle="Os mesmos recursos que rodam por trás da plataforma ZapPulse, aplicados ao dia a dia da barbearia."
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
          <FaqSection items={barbeariaFaqs} />
        </Section>

        <Section alt>
          <SectionTitle title="Pronto pra lotar sua agenda?" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
