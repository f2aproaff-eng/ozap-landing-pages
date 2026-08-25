import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import {
  ChatDemo,
  Hero,
  PainCard,
  PriceCard,
  Section,
  SectionTitle,
  StepCard,
  WinCard,
} from "@/components/site/sections";

const title = "Agendamento Automático com IA | oZap - Advogados";
const description =
  "Triagem de clientes consome 30min por dia? A IA da oZap qualifica leads no WhatsApp, resume por e-mail e libera você para fechar contratos.";

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

function AdvogadosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          headline="Você Gasta 30min/dia em Triagem de Cliente"
          sub="Automatize tudo. Foque em fechar."
          cta={<CTA helper="Leads qualificados direto no seu e-mail." />}
          visual={
            <ChatDemo
              messages={[
                { from: "user", text: "Preciso de ajuda com divórcio" },
                { from: "ai", text: "Entendi. É consensual? Qual a urgência?" },
                { from: "user", text: "Consensual, urgência média" },
                { from: "ai", text: "Resumo enviado ao escritório ✅ Retornam em até 4h." },
              ]}
            />
          }
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
          <SectionTitle title="Investimento" />
          <PriceCard
            setup="R$ 3.000"
            monthly="R$ 500/mês"
            includes={[
              "Triagem automática de leads",
              "Integração com Gmail",
              "Relatórios e suporte",
            ]}
          />
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
