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

export type ChatMsg = { from: "user" | "ai"; text: string; time: string };

/** Conversa real capturada no simulador do agente — consultório (cardiologista). */
export const CONSULTORIO_CHAT: ChatMsg[] = [
  { from: "user", text: "Olá, bom dia!", time: "10:08" },
  { from: "ai", text: "Sou o Atendimento e estou aqui para ajudá-lo.", time: "10:08" },
  { from: "ai", text: "Qual é a sua necessidade hoje?", time: "10:08" },
  {
    from: "ai",
    text: "Gostaria de agendar uma consulta ou tem alguma dúvida sobre nossos serviços?",
    time: "10:09",
  },
  { from: "user", text: "Preciso marcar consulta com cardiologista.", time: "10:09" },
  { from: "ai", text: "Perfeito!", time: "10:10" },
  {
    from: "ai",
    text: "Vamos marcar sua consulta com nosso cardiologista. 🩺 Qual é o seu nome completo?",
    time: "10:10",
  },
  { from: "user", text: "Fernando Matos", time: "10:10" },
  { from: "ai", text: "Prazer, Fernando!", time: "10:10" },
  { from: "ai", text: "Qual é o seu e-mail para a confirmação da consulta?", time: "10:10" },
  { from: "user", text: "fernandomatos@gmail.com", time: "10:11" },
  { from: "ai", text: "Obrigado, Fernando!", time: "10:11" },
  { from: "ai", text: "Agora vou verificar a disponibilidade para você.", time: "10:11" },
  { from: "ai", text: "Qual dia você prefere?", time: "10:11" },
  { from: "ai", text: "Posso oferecer opções para os próximos dias. 📅", time: "10:11" },
  { from: "user", text: "para amanhã, tem horário?", time: "10:11" },
  { from: "ai", text: "Ótimo, Fernando!", time: "10:12" },
  {
    from: "ai",
    text: "Temos disponibilidade amanhã (quinta-feira, 27/08) nos seguintes períodos: **00:00–08:00** (madrugada/manhã cedo) e **08:30–24:00** (a partir das 8h30). Qual horário funciona melhor para você?",
    time: "10:12",
  },
  { from: "ai", text: "Sugiro um horário da manhã ou à tarde? 🌅", time: "10:12" },
  { from: "user", text: "pode marcar para as 9hr?", time: "10:13" },
  { from: "ai", text: "Perfeito, Fernando!", time: "10:13" },
  {
    from: "ai",
    text: "Vou confirmar: 📅 **Quinta-feira, 27 de agosto de 2026** ⏰ **09:00** 👤 **Fernando Matos** 📧 **fernandomatos@gmail.com** 🩺 **Consulta com Cardiologista**. Está tudo certo?",
    time: "10:13",
  },
  { from: "ai", text: "Confirma que posso agendar assim? ✅", time: "10:13" },
  { from: "user", text: "pode confirmar. Obrigado!", time: "10:13" },
];

/** Conversa real capturada no simulador do agente — advocacia trabalhista. */
export const ADVOGADOS_CHAT: ChatMsg[] = [
  { from: "user", text: "Bom dia, como vai?", time: "09:53" },
  { from: "ai", text: "Bom dia!", time: "09:53" },
  { from: "ai", text: "Tudo bem sim! 😊 Sou Atendimento da **FF Advogados**.", time: "09:53" },
  {
    from: "ai",
    text: "Estou por aqui para ajudar você com consultas jurídicas e agendar atendimentos. Em que posso ajudá-lo hoje?",
    time: "09:53",
  },
  { from: "user", text: "Estou precisando de advogado trabalhista.", time: "09:54" },
  { from: "ai", text: "FF Advogados atua em Direito Trabalhista.", time: "09:54" },
  {
    from: "ai",
    text: "Podemos agendar uma **consulta inicial de R$ 200** com um de nossos advogados para entender melhor sua situação. Qual é o seu caso?",
    time: "09:54",
  },
  {
    from: "ai",
    text: "Está relacionado a demissão, rescisão, horas extras, assédio ou outro tema trabalhista?",
    time: "09:54",
  },
  { from: "user", text: "Seria rescisão.", time: "09:55" },
  { from: "ai", text: "Entendi.", time: "09:55" },
  {
    from: "ai",
    text: "Rescisão é um tema importante que merece atenção especializada.",
    time: "09:55",
  },
  {
    from: "ai",
    text: "Na consulta, nosso advogado poderá avaliar seus direitos e as melhores estratégias. Qual é seu nome?",
    time: "09:55",
  },
  { from: "user", text: "Meu nome é Paulo Fernandes", time: "09:55" },
  { from: "ai", text: "Prazer, Paulo!", time: "09:56" },
  {
    from: "ai",
    text: "Agora preciso de alguns dados para agendar sua consulta: qual é seu melhor e-mail para recebermos a confirmação do agendamento?",
    time: "09:56",
  },
  { from: "user", text: "paulofernandes@gmail.com", time: "09:56" },
  { from: "ai", text: "Ótimo, Paulo!", time: "09:56" },
  {
    from: "ai",
    text: "Agora vamos escolher o melhor dia e horário para você. Você prefere agendar para que dia da semana? (hoje é quarta-feira, 26/08)",
    time: "09:56",
  },
  { from: "user", text: "sexta-feira tem horário?", time: "09:57" },
  { from: "ai", text: "Ótima notícia, Paulo!", time: "09:57" },
  {
    from: "ai",
    text: "Sexta-feira, 28/08 está **completamente livre**. Qual horário você prefere? (por exemplo: 09:00, 10:30, 14:00...)",
    time: "09:57",
  },
  { from: "user", text: "10:30hr esta bem!", time: "09:58" },
  { from: "ai", text: "Perfeito, Paulo!", time: "09:58" },
  {
    from: "ai",
    text: "Deixa eu confirmar tudo antes de finalizar: ✓ **Nome:** Paulo Fernandes ✓ **E-mail:** paulofernandes@gmail.com ✓ **Data:** Sexta-feira, 28/08/2026 ✓ **Horário:** 10:30 ✓ **Assunto:** Consulta em Direito Trabalhista (Rescisão) ✓ **Valor:** R$ 200. Está tudo correto? Posso seguir com o agendamento?",
    time: "09:58",
  },
  { from: "user", text: "sim, podemos!", time: "09:58" },
  {
    from: "ai",
    text: "**CONVITE PARA REUNIÃO** 📅 Assunto: Reunião com Paulo Fernandes - 28/08 às 10:30 📅 Data: sexta-feira, 28 de agosto de 2026 🔗 Link do Google Meet enviado para: paulofernandes@gmail.com. Você receberá notificações antes da reunião.",
    time: "09:58",
  },
  { from: "user", text: "obrigado, e até sexta-feira", time: "09:59" },
  { from: "ai", text: "De nada, Paulo!", time: "09:59" },
  { from: "ai", text: "Até sexta-feira, 28/08 às 10:30!", time: "09:59" },
  { from: "ai", text: "Qualquer dúvida, é só chamar. Ótimo atendimento! 🤍", time: "09:59" },
];

/** Conversa real capturada no simulador do agente — clínica odontológica. */
export const CLINICAS_CHAT: ChatMsg[] = [
  { from: "user", text: "Bom dia!", time: "10:00" },
  { from: "ai", text: "Sou o assistente de atendimento.", time: "10:00" },
  { from: "ai", text: "Como posso ajudá-lo hoje?", time: "10:00" },
  {
    from: "ai",
    text: "Você gostaria de agendar uma consulta ou tem alguma dúvida sobre nossos serviços?",
    time: "10:00",
  },
  { from: "user", text: "Preciso marcar uma consulta.", time: "10:01" },
  { from: "ai", text: "Ótimo!", time: "10:01" },
  { from: "ai", text: "Vou ajudá-lo a agendar sua consulta. 😊 Qual é o seu nome?", time: "10:01" },
  { from: "user", text: "Paula Souza", time: "10:02" },
  { from: "ai", text: "Prazer, Paula!", time: "10:02" },
  { from: "ai", text: "Qual é a sua principal necessidade?", time: "10:02" },
  {
    from: "ai",
    text: "Por exemplo: limpeza, avaliação geral, dor em algum dente, ou outra especialidade?",
    time: "10:02",
  },
  { from: "user", text: "Estou com dor no dente.", time: "10:02" },
  { from: "ai", text: "Entendo, Paula.", time: "10:03" },
  {
    from: "ai",
    text: "Dor no dente realmente é incômodo. 😬 Para que nosso dentista possa avaliar adequadamente, você precisará agendar uma consulta presencial.",
    time: "10:03",
  },
  { from: "ai", text: "Qual é o seu e-mail para confirmarmos o agendamento?", time: "10:03" },
  { from: "user", text: "paulasouza@gmail.com", time: "10:03" },
  { from: "ai", text: "Agora vou verificar nossa disponibilidade.", time: "10:04" },
  { from: "ai", text: "Qual dia você prefere?", time: "10:04" },
  {
    from: "ai",
    text: "Você gostaria de um horário hoje (quarta-feira, 26/08), amanhã (quinta-feira, 27/08) ou outro dia?",
    time: "10:04",
  },
  {
    from: "user",
    text: "teria horário hoje. Está doendo bastante. Se puder na parte da tarde.",
    time: "10:05",
  },
  { from: "ai", text: "Ótima notícia, Paula!", time: "10:05" },
  { from: "ai", text: "Temos disponibilidade na parte da tarde de hoje.", time: "10:05" },
  {
    from: "ai",
    text: "Os horários livres são entre **14:00–18:00** (14h até 18h).",
    time: "10:05",
  },
  { from: "ai", text: "Qual horário você prefere?", time: "10:05" },
  { from: "user", text: "14hr pra mim está ótimo!", time: "10:06" },
  { from: "ai", text: "Perfeito, Paula!", time: "10:06" },
  {
    from: "ai",
    text: "Deixe-me confirmar tudo: ✓ **Nome:** Paula Souza ✓ **E-mail:** paulasouza@gmail.com ✓ **Data:** Quarta-feira, 26/08/2026 ✓ **Horário:** 14:00 ✓ **Motivo:** Dor no dente. Tudo certo?",
    time: "10:06",
  },
  { from: "ai", text: "Posso finalizar o agendamento?", time: "10:06" },
  { from: "user", text: "sim podemos, muito obrigado!", time: "10:07" },
];
