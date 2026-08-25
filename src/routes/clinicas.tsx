import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import {
  Card,
  ChatDemo,
  Hero,
  PainCard,
  PriceCard,
  Section,
  SectionTitle,
  WinCard,
} from "@/components/site/sections";

const title = "Agendamento Automático com IA | oZap - Clínicas";
const description =
  "Múltiplos profissionais e agendas confusas? A oZap direciona cada paciente ao especialista certo, evita duplicidade e reduz no-show.";

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

function ClinicasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          headline="Chega de Confusão em Agendamentos"
          sub="Múltiplos profissionais, múltiplas mensagens. Agora tudo organizado."
          cta={<CTA helper="Veja o painel de agendamentos ao vivo." />}
          visual={
            <ChatDemo
              messages={[
                { from: "user", text: "Preciso de fisioterapia" },
                { from: "ai", text: "Perfeito! Dra. Ana atende terça 10h e quinta 16h." },
                { from: "user", text: "Terça 10h" },
                { from: "ai", text: "Reservado na agenda da Dra. Ana ✅ Sem duplicidade." },
              ]}
            />
          }
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
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">{c.t}</p>
                <p className="mt-3 font-medium text-card-foreground">{c.d}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle title="Investimento" subtitle="Valor conforme número de especialidades." />
          <PriceCard
            setup="R$ 2.500"
            monthly="R$ 400-500/mês"
            includes={[
              "Configuração por especialidade",
              "Múltiplas agendas sincronizadas",
              "Suporte contínuo",
            ]}
          />
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
