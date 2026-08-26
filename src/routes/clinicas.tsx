import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import {
  Card,
  ChatSim,
  FaqSection,
  FeatureGrid,
  Hero,
  PainCard,
  PriceCard,
  Section,
  SectionTitle,
  WinCard,
} from "@/components/site/sections";
import { CLINICAS_CHAT, FAQS, FEATURES } from "@/components/site/data";

const title = "Agendamento Automático com IA | ZapBook - Clínicas";
const description =
  "Múltiplos profissionais e agendas confusas? A ZapBook direciona cada paciente ao especialista certo, evita duplicidade e reduz no-show.";

export const Route = createFileRoute("/clinicas")({
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
  component: ClinicasPage,
});

const cases = [
  { t: "Caso 1", d: "Clínica com Dentista + Psicólogo" },
  { t: "Caso 2", d: "Clínica com Fisioterapia + Estética" },
  { t: "Caso 3", d: "Centro médico com múltiplas especialidades" },
  { t: "Caso 4", d: "Policlínica com mais de 3 profissionais" },
];

const featured = FEATURES.filter((f) =>
  [
    "Agentes ilimitados",
    "Pipeline visual de leads",
    "Integrações prontas",
    "Múltiplos números",
    "Você sempre no controle",
    "Configuração em minutos",
  ].includes(f.title),
);

const clinicasFaqs = [
  {
    q: "Como o agente sabe direcionar para o especialista certo?",
    a: "Você define, na configuração, os serviços de cada profissional. O agente identifica o assunto na mensagem e já oferece os horários daquele especialista específico.",
  },
  {
    q: "Dá para ter uma agenda por profissional?",
    a: "Sim. Cada especialista tem sua própria agenda sincronizada, então o sistema nunca marca dois pacientes no mesmo horário com o mesmo profissional.",
  },
  ...FAQS.filter((f) =>
    [
      "Preciso saber programar ou mexer em API?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function ClinicasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para clínicas com 2+ profissionais"
          headline="Chega de Confusão em Agendamentos"
          sub="Múltiplos profissionais, múltiplas mensagens. Agora tudo organizado num único agente de IA."
          cta={<CTA helper="Veja o painel de agendamentos ao vivo." />}
          visual={<ChatSim messages={CLINICAS_CHAT} />}
          stats={[
            { value: "2+", label: "Profissionais organizados" },
            { value: "0", label: "Agendamentos duplicados" },
            { value: "-40%", label: "Menos no-show*" },
            { value: "1", label: "Painel para tudo" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Agenda cheia, organização zero" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Pacientes confundem qual especialidade marcar" />
            <PainCard text="Agendamentos duplicados (mesmo horário, 2 pacientes)" />
            <PainCard text="No-show aumenta, receita cai" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Cada paciente no lugar certo" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente direciona a mensagem pro especialista certo" />
            <WinCard text="Confirmação antes de agendar (evita duplicação)" />
            <WinCard text="Lembretes reduzem no-show em até 40%" />
            <WinCard text="CRM integrado: todos os agendamentos em um lugar" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Para sua clínica" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cases.map((c) => (
              <Card key={c.t}>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand">{c.t}</p>
                <p className="mt-3 font-medium text-card-foreground">{c.d}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="Feito para operações com mais de um profissional"
            subtitle="Os mesmos recursos da plataforma ZapBook, aplicados à rotina de uma clínica."
          />
          <FeatureGrid features={featured} />
        </Section>

        <Section alt>
          <SectionTitle title="Investimento" subtitle="Valor conforme número de especialidades." />
          <PriceCard
            highlight
            setup="R$ 1.200"
            monthly="R$ 300/mês"
            includes={[
              "Configuração por especialidade",
              "Múltiplas agendas sincronizadas",
              "Suporte contínuo",
            ]}
            note="*Redução de faltas estimada com lembrete automático 24h antes da consulta."
          />
        </Section>

        <Section>
          <SectionTitle eyebrow="Dúvidas comuns" title="Perguntas frequentes" />
          <FaqSection items={clinicasFaqs} />
        </Section>

        <Section alt>
          <SectionTitle title="Organize sua clínica ainda esta semana" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
