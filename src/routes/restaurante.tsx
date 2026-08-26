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
import { FAQS, FEATURES, RESTAURANTE_CHAT } from "@/components/site/data";

const title = "Restaurante com Reserva Automática | ZapBook";
const description =
  "Agente de IA que reserva mesa, tira pedido e atende no horário de pico — direto no WhatsApp.";

export const Route = createFileRoute("/restaurante")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RestaurantePage,
});

const featured = FEATURES.filter((f) =>
  [
    "IA própria, sem custo extra",
    "Pipeline visual de leads",
    "Múltiplos números",
    "Entende áudio e imagem",
    "Você sempre no controle",
    "Configuração em minutos",
  ].includes(f.title),
);

const restauranteFaqs = [
  {
    q: "O agente evita overbooking de mesa?",
    a: "Evita. Você configura a capacidade de mesas por horário e o agente só confirma reservas dentro do que está realmente disponível.",
  },
  {
    q: "Dá pra usar também pra pedido de delivery ou retirada?",
    a: "Dá. O mesmo agente pode tirar pedidos de delivery ou retirada, além de reservas, sem sobrecarregar a equipe do salão.",
  },
  ...FAQS.filter((f) =>
    [
      "Posso assumir a conversa manualmente quando quiser?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function RestaurantePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para restaurantes e bares"
          headline="Pare de Perder Reserva no Horário de Pico"
          sub="Seu agente de IA reserva mesa, tira pedido e atende 24/7, mesmo na correria do rush."
          cta={<CTA helper="Resposta em minutos, sem compromisso." />}
          visual={<ChatSim messages={RESTAURANTE_CHAT} />}
          stats={[
            { value: "0", label: "Reserva perdida" },
            { value: "+30%", label: "Reservas/mês" },
            { value: "-50%", label: "Ligação no rush" },
            { value: "< 10 min", label: "Para colocar no ar" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Todo dia a mesma corrida" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Telefone toca sem parar no horário de pico" />
            <PainCard text="Reserva feita de cabeça esquece e dá overbooking" />
            <PainCard text="Cliente desiste porque ninguém responde rápido" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Um agente que atende como você" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente reserva mesa e confirma horário na hora" />
            <WinCard text="Evita overbooking com controle automático de mesas" />
            <WinCard text="Tira pedido de delivery ou balcão sem sobrecarregar a equipe" />
            <WinCard text="Atende vários clientes ao mesmo tempo, sem fila" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text="Cliente manda mensagem pedindo reserva ou pedido" />
            <StepCard n={2} text="IA confirma disponibilidade e fecha o horário ou pedido" />
            <StepCard n={3} text="Confirmação automática enviada na hora" />
            <StepCard n={4} text="Equipe foca no salão, sem parar pra atender telefone" />
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="O que vem junto com o seu agente"
            subtitle="Os mesmos recursos que rodam por trás da plataforma ZapBook, aplicados ao dia a dia do restaurante."
          />
          <FeatureGrid features={featured} />
        </Section>

        <Section alt>
          <SectionTitle title="Investimento" subtitle="Sem fidelidade. Cancele quando quiser." />
          <PriceCard
            highlight
            setup="R$ 1.200"
            monthly="R$ 300/mês"
            includes={["Configuração completa", "Controle de mesas", "Suporte contínuo"]}
          />
        </Section>

        <Section>
          <SectionTitle eyebrow="Dúvidas comuns" title="Perguntas frequentes" />
          <FaqSection items={restauranteFaqs} />
        </Section>

        <Section alt>
          <SectionTitle title="Pronto pra parar de perder reserva?" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
