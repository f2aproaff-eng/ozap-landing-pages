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
import { DESIGN_CHAT, FAQS, FEATURES } from "@/components/site/data";

const title = "Agência de Design com Briefing Automático | ZapBook";
const description =
  "IA tira briefing completo, qualifica projeto e agenda consultoria — sem retrabalho.";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DesignPage,
});

const featured = FEATURES.filter((f) =>
  [
    "Agentes ilimitados",
    "Digitação humanizada",
    "Pipeline visual de leads",
    "Integrações prontas",
    "Você sempre no controle",
    "Configuração em minutos",
  ].includes(f.title),
);

const designFaqs = [
  {
    q: "O agente consegue adaptar as perguntas pro tipo de projeto (site, logo, social media)?",
    a: "Sim, você configura roteiros de briefing diferentes por tipo de serviço, e o agente segue o roteiro certo conforme o cliente descreve o que precisa.",
  },
  {
    q: "Dá pra integrar com meu calendário de consultorias?",
    a: "Dá. A integração com Google Calendar já vem pronta, então a consultoria é agendada direto no seu horário disponível.",
  },
  ...FAQS.filter((f) =>
    [
      "Posso assumir a conversa manualmente quando quiser?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function DesignPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para agências e freelancers"
          headline="Pare de Perder Tempo com Briefing Incompleto"
          sub="Seu agente de IA tira o briefing certo, qualifica o projeto e agenda a consultoria."
          cta={<CTA helper="Resposta em minutos, sem compromisso." />}
          visual={<ChatSim messages={DESIGN_CHAT} />}
          stats={[
            { value: "3h", label: "Economizadas/semana" },
            { value: "-70%", label: "Retrabalho" },
            { value: "+50%", label: "Satisfação cliente" },
            { value: "< 10 min", label: "Para colocar no ar" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Todo dia a mesma corrida" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Cliente não sabe explicar o que quer" />
            <PainCard text="Você começa o projeto e descobre que entendeu errado" />
            <PainCard text="Retrabalho come sua margem de lucro" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Um agente que atende como você" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente faz as perguntas certas de briefing" />
            <WinCard text="Qualifica orçamento e escopo antes da reunião" />
            <WinCard text="Você chega na consultoria já com tudo mapeado" />
            <WinCard text="Reduz retrabalho e aumenta a satisfação do cliente" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text="Cliente entra em contato pelo WhatsApp" />
            <StepCard n={2} text="IA tira briefing completo: estilo, público, orçamento" />
            <StepCard n={3} text="Agenda a consultoria já com o projeto qualificado" />
            <StepCard n={4} text="Você chega preparado, sem perguntas básicas" />
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="O que vem junto com o seu agente"
            subtitle="Os mesmos recursos que rodam por trás da plataforma ZapBook, aplicados ao dia a dia da agência."
          />
          <FeatureGrid features={featured} />
        </Section>

        <Section alt>
          <SectionTitle title="Investimento" subtitle="Sem fidelidade. Cancele quando quiser." />
          <PriceCard
            highlight
            setup="R$ 1.200"
            monthly="R$ 300/mês"
            includes={["Configuração completa", "Roteiros de briefing", "Suporte contínuo"]}
          />
        </Section>

        <Section>
          <SectionTitle eyebrow="Dúvidas comuns" title="Perguntas frequentes" />
          <FaqSection items={designFaqs} />
        </Section>

        <Section alt>
          <SectionTitle title="Pronto pra parar o retrabalho?" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
