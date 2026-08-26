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
import { CAFETERIA_CHAT, FAQS, FEATURES } from "@/components/site/data";

const title = "Cafeteria com Pedido 24h no WhatsApp | ZapBook";
const description =
  "Agente de IA que tira pedido, confirma retirada e avisa quando está pronto — sem fila de mensagem.";

export const Route = createFileRoute("/cafeteria")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CafeteriaPage,
});

const featured = FEATURES.filter((f) =>
  [
    "IA própria, sem custo extra",
    "Digitação humanizada",
    "Múltiplos números",
    "Entende áudio e imagem",
    "Você sempre no controle",
    "Configuração em minutos",
  ].includes(f.title),
);

const cafeteriaFaqs = [
  {
    q: "O agente consegue anotar pedidos com várias opções (tamanho, sabor)?",
    a: "Sim, você configura o cardápio e as variações, e o agente confirma cada detalhe com o cliente antes de fechar o pedido.",
  },
  {
    q: "Dá pra avisar o cliente quando o pedido está pronto?",
    a: "Dá. Você marca como pronto no painel e o agente manda o aviso automaticamente pro cliente no WhatsApp.",
  },
  ...FAQS.filter((f) =>
    [
      "Posso assumir a conversa manualmente quando quiser?",
      "Existe fidelidade ou multa de cancelamento?",
    ].includes(f.q),
  ),
];

function CafeteriaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero
          eyebrow="Para cafeterias e padarias"
          headline="Pare de Perder Pedido no WhatsApp"
          sub="Seu agente de IA tira pedido, confirma retirada e avisa quando está pronto."
          cta={<CTA helper="Resposta em minutos, sem compromisso." />}
          visual={<ChatSim messages={CAFETERIA_CHAT} />}
          stats={[
            { value: "0", label: "Pedido perdido" },
            { value: "-80%", label: "Reclamação" },
            { value: "+25%", label: "Volume/dia" },
            { value: "< 10 min", label: "Para colocar no ar" },
          ]}
        />

        <Section alt>
          <SectionTitle eyebrow="O problema" title="Todo dia a mesma corrida" />
          <div className="grid gap-6 md:grid-cols-3">
            <PainCard text="Pedido chega e ninguém vê a tempo" />
            <PainCard text="Cliente espera resposta e desiste" />
            <PainCard text="Fila de mensagem no horário de pico" />
          </div>
        </Section>

        <Section>
          <SectionTitle eyebrow="A solução" title="Um agente que atende como você" />
          <div className="grid gap-6 sm:grid-cols-2">
            <WinCard text="Agente tira pedido completo, sem ida e volta" />
            <WinCard text="Confirma horário de retirada na hora" />
            <WinCard text="Avisa automaticamente quando está pronto" />
            <WinCard text="Reduz reclamação por pedido esquecido" />
          </div>
        </Section>

        <Section alt>
          <SectionTitle title="Como funciona" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard n={1} text="Cliente manda pedido pelo WhatsApp" />
            <StepCard n={2} text="IA confirma itens, valor e horário de retirada" />
            <StepCard n={3} text="Pedido entra na fila da cozinha/balcão" />
            <StepCard n={4} text="Cliente recebe aviso automático quando está pronto" />
          </div>
        </Section>

        <Section>
          <SectionTitle
            eyebrow="Funcionalidades incluídas"
            title="O que vem junto com o seu agente"
            subtitle="Os mesmos recursos que rodam por trás da plataforma ZapBook, aplicados ao dia a dia da cafeteria."
          />
          <FeatureGrid features={featured} />
        </Section>

        <Section alt>
          <SectionTitle title="Investimento" subtitle="Sem fidelidade. Cancele quando quiser." />
          <PriceCard
            highlight
            setup="R$ 1.200"
            monthly="R$ 300/mês"
            includes={["Configuração completa", "Cardápio configurado", "Suporte contínuo"]}
          />
        </Section>

        <Section>
          <SectionTitle eyebrow="Dúvidas comuns" title="Perguntas frequentes" />
          <FaqSection items={cafeteriaFaqs} />
        </Section>

        <Section alt>
          <SectionTitle title="Pronto pra nunca mais perder um pedido?" />
          <CTA />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
