import {
  Sparkles,
  Bot,
  Timer,
  KanbanSquare,
  Plug,
  Smartphone,
  Mic,
  Users,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const WHATSAPP_NUMBER = "5553991774147";
export const WHATSAPP_DEMO = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_CTA = `https://wa.me/${WHATSAPP_NUMBER}?text=Oi!%20Gostaria%20de%20uma%20demo`;

export type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

/** O que a plataforma faz de verdade — mesmo motor por trás de todas as páginas. */
export const FEATURES: Feature[] = [
  {
    icon: Sparkles,
    title: "IA própria, sem custo extra",
    text: "Nada de pagar tokens de OpenAI à parte. A inteligência já vem embutida no plano e responde no seu tom de voz.",
  },
  {
    icon: Bot,
    title: "Agentes ilimitados",
    text: "Crie quantos agentes quiser: um para agendamento, outro para dúvidas frequentes, outro para cada profissional.",
  },
  {
    icon: Timer,
    title: "Digitação humanizada",
    text: "O agente simula tempo de leitura e digitação real. Seus contatos não percebem que estão falando com uma IA.",
  },
  {
    icon: KanbanSquare,
    title: "Pipeline visual de leads",
    text: "Todo contato é classificado automaticamente em frio, morno, quente ou convertido — direto num painel Kanban.",
  },
  {
    icon: Plug,
    title: "Integrações prontas",
    text: "Google Calendar, Google Sheets, Gmail e Notion conectados de fábrica, sem precisar contratar um desenvolvedor.",
  },
  {
    icon: Smartphone,
    title: "Múltiplos números",
    text: "Gerencie mais de um WhatsApp em um só painel — ideal para quem tem mais de um profissional ou unidade.",
  },
  {
    icon: Mic,
    title: "Entende áudio e imagem",
    text: "Pacientes e clientes podem mandar áudio ou foto que o agente transcreve, entende e responde normalmente.",
  },
  {
    icon: Users,
    title: "Você sempre no controle",
    text: "Assuma qualquer conversa manualmente a qualquer momento — a transição é suave e o cliente nem percebe.",
  },
  {
    icon: ShieldCheck,
    title: "Configuração em minutos",
    text: "Escaneia o QR Code, define o comportamento do agente e já está no ar. Sem programar uma linha de código.",
  },
];

export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "Preciso saber programar ou mexer em API?",
    a: "Não. A configuração é feita escaneando um QR Code e respondendo perguntas simples sobre o seu negócio. Sem código, sem chave de API.",
  },
  {
    q: "O agente vai parecer um robô para meus clientes?",
    a: "Não. As respostas simulam tempo de digitação e leitura reais, então a conversa flui como se fosse uma pessoa do seu time respondendo.",
  },
  {
    q: "Posso assumir a conversa manualmente quando quiser?",
    a: "Sim. Você desativa a IA numa conversa específica a qualquer momento e assume o atendimento — a transição é transparente para quem está do outro lado.",
  },
  {
    q: "Funciona com áudio e foto, ou só texto?",
    a: "Funciona com os dois. O agente transcreve áudios e analisa imagens/documentos, então quem prefere mandar um áudio também é bem atendido.",
  },
  {
    q: "Quanto tempo leva para colocar no ar?",
    a: "Menos de 10 minutos para a configuração inicial. O restante do ajuste fino do comportamento do agente é feito junto com você no setup.",
  },
  {
    q: "Existe fidelidade ou multa de cancelamento?",
    a: "Não. É mensalidade sem contrato de fidelidade — você cancela quando quiser, sem multa.",
  },
];
