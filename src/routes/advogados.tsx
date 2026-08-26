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
import { ADVOGADOS_CHAT, FAQS, FEATURES } from "@/components/site/data";

const title = "Triagem Automática com IA | ZapBook - Advogados";
const description =
  "Triagem de clientes consome 30min por dia? A IA da ZapBook qualifica leads no WhatsApp, resume por e-mail e libera você para fechar contratos.";

export const Route = createFileRoute("/advogados")({
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
  component: AdvogadosPage,
});

const featured = FEATURES.filter((f) =>
  [
    "IA própria, sem custo extra",
    "Pipeline visual de leads",
    "Integrações prontas",
    "Entende áudio e imagem",
    "Você sempre no controle",
    "Configuração em minutos",
  ].includes(f.title),
);

const advogadosFaqs = [
  {
    q: "O resumo do lead chega mesmo por e-mail?",
    a: "Sim. Assim que a IA termina a triagem, um resumo com tipo de caso, urgência e dados do cliente cai direto no seu e-mail ou no painel — pronto para você decidir o próximo passo.",
  },
  {
    q: "A triagem substitui a consulta jurídica?",
    a: "Não. O agente só organiza a informação inicial (tipo de caso, urgência, dados de contato) para você chegar à conversa já sabendo o que o cliente precisa — a análise jurídica continua sendo sua.",
  },
  ...FAQS.filter((f) =>
    [
      "Posso assumir a conversa manualmente quando quiser?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function AdvogadosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para escritórios de advocacia"
          headline="Você Gasta 30min/dia em Triagem de Cliente"
          sub="Automatize a qualificação inicial de leads no WhatsApp. Foque em fechar, não em triar."
          cta={<CTA helper="Leads qualificados direto no seu e-mail." />}
          visual={<ChatSim messages={ADVOGADOS_CHAT} />}
          stats={[
            { value: "30min → 2min", label: "Tempo de triagem" },
            { value: "24/7", label: "Primeiro contato" },
            { value: "100+", label: "Contatos/dia no seu ritmo" },
            { value: "< 10 min", label: "Para colocar no ar" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Triagem manual custa caro" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Cliente liga ou manda WhatsApp e você gasta 30min pra entender a demanda" />
            <PainCard text="Fila de espera cresce e o cliente fica na mão" />
            <PainCard text="Informações espalhadas entre mensagem, e-mail e ligação" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Triagem automática e organizada" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente coleta info automaticamente (tipo de caso, urgência, cliente)" />
            <WinCard text="Resume tudo em um e-mail para o seu painel" />
            <WinCard text="Cliente sabe os próximos passos (reduz ansiedade)" />
            <WinCard text="Você foca em fechar, não em triagem" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Fluxo do agente" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text='Cliente envia: "Preciso de ajuda com divórcio"' />
            <StepCard n={2} text="IA pergunta tipo de caso, urgência e dados pessoais" />
            <StepCard n={3} text='IA resume e envia e-mail: "Lead: divórcio, urgência média"' />
            <StepCard n={4} text="Você contacta com a proposta" />
          </div>
        </Section>

        <Section>
          <SectionTitle title="Benefícios" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Reduz o tempo de triagem: 30min → 2min" />
            <WinCard text="Qualifica leads: só recebe os sérios" />
            <WinCard text="Melhora a experiência: cliente atendido 24/7" />
            <WinCard text="Escalável: funciona com 100 contatos por dia" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="A mesma plataforma, pensada para triagem jurídica"
          />
          <FeatureGrid features={featured} />
        </Section>

        <Section>
          <SectionTitle title="Investimento" />
          <PriceCard
            highlight
            setup="R$ 1.200"
            monthly="R$ 300/mês"
            includes={[
              "Triagem automática de leads",
              "Integração com Gmail",
              "Relatórios e suporte",
            ]}
          />
        </Section>

        <Section alt>
          <SectionTitle eyebrow="Dúvidas comuns" title="Perguntas frequentes" />
          <FaqSection items={advogadosFaqs} />
        </Section>

        <Section>
          <SectionTitle title="Pare de perder tempo com triagem" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
