import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import {
  ChatDemo,
  FaqSection,
  FeatureGrid,
  Hero,
  Section,
  SectionTitle,
  StepCard,
} from "@/components/site/sections";
import { FAQS, FEATURES } from "@/components/site/data";

const title = "ZapBook | Agendamento e Triagem Automáticos com IA no WhatsApp";
const description =
  "ZapBook instala um agente de IA no seu WhatsApp: responde 24/7, agenda no Google Calendar e qualifica leads para consultórios, clínicas e advogados.";

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
    price: "a partir de R$ 400/mês",
  },
  {
    to: "/clinicas" as const,
    label: "Clínicas",
    text: "Múltiplos profissionais, agenda organizada e sem duplicidade.",
    price: "a partir de R$ 400/mês",
  },
  {
    to: "/advogados" as const,
    label: "Advogados",
    text: "Triagem automática de leads: de 30min para 2min.",
    price: "a partir de R$ 500/mês",
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
            { value: "24/7", label: "Atendimento automático" },
            { value: "< 10 min", label: "Para colocar no ar" },
            { value: "Ilimitados", label: "Agentes de IA" },
            { value: "0", label: "Fidelidade ou multa" },
          ]}
        />

        <Section alt>
          <SectionTitle
            eyebrow="Escolha seu segmento"
            title="Feito sob medida para o seu negócio"
            subtitle="Cada página abaixo mostra exatamente como o agente se comporta no seu tipo de atendimento."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {niches.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-success/40 hover:shadow-lg"
              >
                <h2 className="text-xl font-bold text-foreground">{n.label}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{n.text}</p>
                <p className="mt-4 text-xs font-medium text-muted-foreground">{n.price}</p>
                <p className="mt-2 text-sm font-semibold text-success">Ver página →</p>
              </Link>
            ))}
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Por dentro da plataforma"
            title="Tudo que o ZapBook faz pelo seu atendimento"
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
