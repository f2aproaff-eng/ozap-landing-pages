import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import {
  ChatSim,
  FaqSection,
  FeatureGrid,
  Hero,
  Section,
  SectionTitle,
  StepCard,
} from "@/components/site/sections";
import { FAQS, FEATURES, GENERAL_CHAT } from "@/components/site/data";

const title = "ZapPulse | Agendamento e Triagem Automáticos com IA no WhatsApp";
const description =
  "ZapPulse instala um agente de IA no seu WhatsApp: responde 24/7, agenda no Google Calendar e qualifica leads para consultórios, clínicas e advogados.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const niches = [
  {
    to: "/consultorio" as const,
    label: "Consultórios",
    text: "Pare de perder agendamentos no WhatsApp. IA responde 24/7.",
    price: "a partir de R$ 300/mês",
  },
  {
    to: "/clinicas" as const,
    label: "Clínicas",
    text: "Múltiplos profissionais, agenda organizada e sem duplicidade.",
    price: "a partir de R$ 300/mês",
  },
  {
    to: "/advogados" as const,
    label: "Advogados",
    text: "Triagem automática de leads: de 30min para 2min.",
    price: "a partir de R$ 300/mês",
  },
  {
    to: "/academia" as const,
    label: "Academia",
    text: "Lead que não fecha matrícula? Agente qualifica e agenda prova grátis.",
    price: "a partir de R$ 300/mês",
  },
  {
    to: "/cafeteria" as const,
    label: "Cafeteria",
    text: "Pedido no WhatsApp sem espera. Agente confirma e avisa a retirada.",
    price: "a partir de R$ 300/mês",
  },
  {
    to: "/design" as const,
    label: "Design",
    text: "Chega de retrabalho. Agente tira o briefing completo antes da reunião.",
    price: "a partir de R$ 300/mês",
  },
  {
    to: "/ecommerce" as const,
    label: "E-commerce",
    text: "Recupere carrinho abandonado com resposta em segundos, 24/7.",
    price: "a partir de R$ 300/mês",
  },
  {
    to: "/escola" as const,
    label: "Escola",
    text: "Pai com dúvida vira matrícula. Agente responde e agenda visita.",
    price: "a partir de R$ 300/mês",
  },
  {
    to: "/imobiliaria" as const,
    label: "Imobiliária",
    text: "Lead frio esfria rápido. Agente qualifica e agenda visita na hora.",
    price: "a partir de R$ 300/mês",
  },
  {
    to: "/loja" as const,
    label: "Loja",
    text: "Sua loja vendendo 24/7, sem perder nenhuma pergunta de cliente.",
    price: "a partir de R$ 300/mês",
  },
  {
    to: "/barbearia" as const,
    label: "Barbearia",
    text: "Fila cheia? Agente marca horário sozinho e evita furo de agenda.",
    price: "a partir de R$ 300/mês",
  },
  {
    to: "/restaurante" as const,
    label: "Restaurante",
    text: "Reserva e pedido sem ligação, mesmo no horário de pico.",
    price: "a partir de R$ 300/mês",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Agente de IA para WhatsApp"
          headline="Seu WhatsApp atendendo sozinho, 24 horas por dia"
          sub="Agente de IA que responde, agenda e qualifica — feito para o seu tipo de negócio. Sem programar, sem API key, no ar em minutos."
          cta={<CTA helper="Resposta em minutos, sem compromisso." />}
          visual={<ChatSim messages={GENERAL_CHAT} />}
          stats={[
            { value: "24/7", label: "Atendimento automático" },
            { value: "< 10 min", label: "Para colocar no ar" },
            { value: "Ilimitados", label: "Agentes de IA" },
            { value: "0", label: "Fidelidade ou multa" },
          ]}
        />

        <Section id="segmentos" alt>
          <SectionTitle
            eyebrow="Escolha seu segmento"
            title="Feito sob medida para o seu negócio"
            subtitle="Cada página abaixo mostra exatamente como o agente se comporta no seu tipo de atendimento."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {niches.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="group rounded-2xl border border-border bg-card p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.4)] transition-all hover:-translate-y-1 hover:border-brand/30"
              >
                <h2 className="font-serif text-xl italic text-foreground">{n.label}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{n.text}</p>
                <p className="mt-4 font-mono text-xs tracking-[0.04em] text-muted-foreground">
                  {n.price}
                </p>
                <p className="mt-2 font-mono text-xs tracking-[0.04em] text-brand">Ver página →</p>
              </Link>
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Por dentro da plataforma"
            title="Tudo que o ZapPulse faz pelo seu atendimento"
            subtitle="Nove recursos que rodam por trás de cada conversa, incluídos em qualquer plano."
          />
          <FeatureGrid features={FEATURES} />
        </Section>

        <Section alt>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text="Você escaneia o QR Code e conecta seu número de WhatsApp" />
            <StepCard n={2} text="Configuramos o agente com o comportamento do seu negócio" />
            <StepCard n={3} text="Ele passa a responder, agendar e qualificar sozinho" />
            <StepCard n={4} text="Você acompanha tudo pelo painel, sem perder o controle" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="Dúvidas comuns" title="Perguntas frequentes" />
          <FaqSection items={FAQS} />
        </Section>

        <Section alt>
          <SectionTitle title="Pronto para ver o seu WhatsApp atendendo sozinho?" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
