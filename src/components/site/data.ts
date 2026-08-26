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

/** Conversa simulada — academia (aula experimental). */
export const ACADEMIA_CHAT: ChatMsg[] = [
  { from: "user", text: "Oi, boa tarde!", time: "14:02" },
  { from: "ai", text: "Boa tarde! Sou o assistente da Academia.", time: "14:02" },
  { from: "ai", text: "Como posso te ajudar hoje?", time: "14:02" },
  {
    from: "ai",
    text: "Você quer saber sobre planos ou já quer marcar uma aula experimental?",
    time: "14:03",
  },
  { from: "user", text: "Quero saber quanto custa o plano mensal.", time: "14:03" },
  {
    from: "ai",
    text: "Temos planos a partir de **R$ 89,90/mês**, com direito a musculação e aulas coletivas.",
    time: "14:03",
  },
  {
    from: "ai",
    text: "Quer aproveitar e agendar uma aula grátis pra conhecer a estrutura?",
    time: "14:04",
  },
  { from: "user", text: "Quero sim!", time: "14:04" },
  { from: "ai", text: "Ótimo! Qual é o seu nome completo?", time: "14:04" },
  { from: "user", text: "Camila Duarte", time: "14:04" },
  { from: "ai", text: "Prazer, Camila! 💪", time: "14:04" },
  { from: "ai", text: "Qual seu e-mail para enviar a confirmação?", time: "14:05" },
  { from: "user", text: "camiladuarte@gmail.com", time: "14:05" },
  { from: "ai", text: "Perfeito! Qual dia funciona melhor pra você essa semana?", time: "14:05" },
  { from: "user", text: "Pode ser amanhã?", time: "14:05" },
  {
    from: "ai",
    text: "Amanhã (quinta-feira, 27/08) temos vagas às **07:00**, **17:00** e **19:00**. Qual prefere?",
    time: "14:06",
  },
  { from: "user", text: "19h está ótimo", time: "14:06" },
  { from: "ai", text: "Perfeito, Camila!", time: "14:06" },
  {
    from: "ai",
    text: "Confirmando: 📅 **Quinta-feira, 27/08** ⏰ **19:00** 👤 **Camila Duarte** 💪 **Aula experimental**. Posso agendar?",
    time: "14:06",
  },
  { from: "user", text: "Pode confirmar, obrigada!", time: "14:07" },
  { from: "ai", text: "Agendado! Te espero lá, Camila. Até quinta! 🏋️", time: "14:07" },
];

/** Conversa simulada — cafeteria (pedido para retirada). */
export const CAFETERIA_CHAT: ChatMsg[] = [
  { from: "user", text: "Oi, bom dia!", time: "08:15" },
  { from: "ai", text: "Bom dia! Sou o atendimento da Cafeteria.", time: "08:15" },
  { from: "ai", text: "Vai querer pedir algo pra retirar?", time: "08:15" },
  { from: "user", text: "Quero um cappuccino grande e um pão de queijo.", time: "08:16" },
  { from: "ai", text: "Show! Cappuccino grande + pão de queijo. ☕", time: "08:16" },
  { from: "ai", text: "Qual seu nome pra eu deixar reservado no balcão?", time: "08:16" },
  { from: "user", text: "Rafael", time: "08:16" },
  { from: "ai", text: "Perfeito, Rafael!", time: "08:16" },
  { from: "ai", text: "Prefere retirar agora ou daqui a pouco?", time: "08:17" },
  { from: "user", text: "Daqui uns 15 minutos", time: "08:17" },
  { from: "ai", text: "Combinado! Fica pronto em **15 minutos**.", time: "08:17" },
  {
    from: "ai",
    text: "Confirmando: ☕ **Cappuccino grande** 🥐 **Pão de queijo** 👤 **Rafael** ⏰ **retirada em 15min**. Tudo certo?",
    time: "08:17",
  },
  { from: "user", text: "Isso mesmo, obrigado!", time: "08:18" },
  {
    from: "ai",
    text: "Já entrou na fila! Te aviso por aqui quando estiver pronto. 😊",
    time: "08:18",
  },
  { from: "ai", text: "Rafael, seu pedido está pronto! Pode retirar no balcão. ☕", time: "08:33" },
  { from: "user", text: "Já estou chegando, obrigado!", time: "08:33" },
];

/** Conversa simulada — agência de design (briefing de projeto). */
export const DESIGN_CHAT: ChatMsg[] = [
  { from: "user", text: "Oi, tudo bem?", time: "11:10" },
  { from: "ai", text: "Tudo ótimo! Sou o assistente da agência.", time: "11:10" },
  { from: "ai", text: "Vi que você quer um novo projeto. Me conta um pouco mais?", time: "11:10" },
  { from: "user", text: "Quero um site novo pra minha empresa.", time: "11:11" },
  {
    from: "ai",
    text: "Legal! 🎨 Você já tem identidade visual (logo, cores) ou também precisa criar do zero?",
    time: "11:11",
  },
  { from: "user", text: "Já tenho o logo, só falta o site.", time: "11:11" },
  {
    from: "ai",
    text: "Entendi. Qual é o objetivo principal do site? Vender, captar leads, ou institucional?",
    time: "11:12",
  },
  { from: "user", text: "Captar leads pra minha consultoria.", time: "11:12" },
  {
    from: "ai",
    text: "Perfeito. Qual é a sua faixa de orçamento pra esse projeto?",
    time: "11:12",
  },
  { from: "user", text: "Entre 3 e 5 mil", time: "11:12" },
  {
    from: "ai",
    text: "Anotado! Qual é o seu nome e e-mail pra eu te enviar uma proposta?",
    time: "11:13",
  },
  { from: "user", text: "Beatriz Lima, beatrizlima@gmail.com", time: "11:13" },
  { from: "ai", text: "Obrigado, Beatriz!", time: "11:13" },
  {
    from: "ai",
    text: "Vou preparar sua proposta com base no briefing e já te chamo pra agendar uma consultoria. Pode ser essa semana?",
    time: "11:13",
  },
  { from: "user", text: "Pode ser sexta de manhã", time: "11:14" },
  {
    from: "ai",
    text: "Perfeito! Confirmando: 🎨 **Briefing:** Site institucional/leads ✓ **Orçamento:** R$3-5mil ✓ **Consultoria:** Sexta, manhã. Tudo certo?",
    time: "11:14",
  },
  { from: "user", text: "Certinho, obrigada!", time: "11:14" },
  {
    from: "ai",
    text: "Show, Beatriz! Já te mando o link da reunião por e-mail. Até sexta! ✨",
    time: "11:15",
  },
];

/** Conversa simulada — e-commerce (dúvida de compra e checkout). */
export const ECOMMERCE_CHAT: ChatMsg[] = [
  { from: "user", text: "Oi, boa tarde", time: "15:20" },
  { from: "ai", text: "Boa tarde! Sou o assistente da loja.", time: "15:20" },
  { from: "ai", text: "Como posso ajudar?", time: "15:20" },
  { from: "user", text: "Esse tênis serve no 40?", time: "15:21" },
  { from: "ai", text: "Deixa eu verificar pra você! 👟", time: "15:21" },
  {
    from: "ai",
    text: "Sim, temos o tênis disponível no tamanho 40. Cor preta e branca em estoque.",
    time: "15:21",
  },
  { from: "user", text: "Quanto custa e qual o prazo de entrega?", time: "15:22" },
  {
    from: "ai",
    text: "O valor é **R$ 249,90** e o frete pro seu CEP chega em **3 a 5 dias úteis**.",
    time: "15:22",
  },
  { from: "ai", text: "Quer que eu já separe pra você fechar o pedido?", time: "15:22" },
  { from: "user", text: "Quero sim, na cor preta.", time: "15:22" },
  { from: "ai", text: "Show! Qual seu nome completo pra eu gerar o pedido?", time: "15:23" },
  { from: "user", text: "Juliana Prado", time: "15:23" },
  { from: "ai", text: "Perfeito, Juliana!", time: "15:23" },
  { from: "ai", text: "Qual seu e-mail e CEP para envio?", time: "15:23" },
  { from: "user", text: "julianaprado@gmail.com, CEP 90000-000", time: "15:24" },
  {
    from: "ai",
    text: "Confirmando: 👟 **Tênis preto, tam. 40** 💰 **R$ 249,90** 📦 **3-5 dias úteis**. Posso gerar o link de pagamento?",
    time: "15:24",
  },
  { from: "user", text: "Pode sim, obrigada!", time: "15:24" },
  {
    from: "ai",
    text: "Prontinho! Te enviei o link de pagamento aqui mesmo. Qualquer dúvida, é só chamar! 🛍️",
    time: "15:25",
  },
];

/** Conversa simulada — escola (matrícula e visita). */
export const ESCOLA_CHAT: ChatMsg[] = [
  { from: "user", text: "Boa tarde!", time: "13:30" },
  { from: "ai", text: "Boa tarde! Sou o assistente da escola.", time: "13:30" },
  { from: "ai", text: "Como posso ajudar você hoje?", time: "13:30" },
  { from: "user", text: "Quero saber sobre matrícula pro ensino fundamental.", time: "13:31" },
  { from: "ai", text: "Ótimo! 🎓 Pra qual ano seu filho(a) vai entrar?", time: "13:31" },
  { from: "user", text: "6º ano", time: "13:31" },
  { from: "ai", text: "Temos vagas disponíveis para o 6º ano.", time: "13:31" },
  {
    from: "ai",
    text: "Quer agendar uma visita para conhecer a estrutura e conversar sobre valores?",
    time: "13:32",
  },
  { from: "user", text: "Quero sim.", time: "13:32" },
  { from: "ai", text: "Qual é o seu nome?", time: "13:32" },
  { from: "user", text: "Renata Alves", time: "13:32" },
  { from: "ai", text: "Prazer, Renata!", time: "13:32" },
  { from: "ai", text: "Qual seu e-mail para enviar a confirmação da visita?", time: "13:33" },
  { from: "user", text: "renataalves@gmail.com", time: "13:33" },
  { from: "ai", text: "Perfeito! Qual dia é melhor pra você?", time: "13:33" },
  { from: "user", text: "Amanhã de manhã, se tiver.", time: "13:33" },
  {
    from: "ai",
    text: "Temos horário amanhã (quinta-feira, 27/08) às **09:00** ou **10:30**. Qual prefere?",
    time: "13:34",
  },
  { from: "user", text: "9h está bom", time: "13:34" },
  {
    from: "ai",
    text: "Confirmando: 🎓 **Visita — 6º ano** 📅 **Quinta-feira, 27/08** ⏰ **09:00** 👤 **Renata Alves**. Posso agendar?",
    time: "13:34",
  },
  { from: "user", text: "Pode confirmar, obrigada!", time: "13:34" },
  { from: "ai", text: "Combinado! Te esperamos amanhã às 9h. Até lá! 😊", time: "13:35" },
];

/** Conversa simulada — imobiliária (qualificação de lead e visita). */
export const IMOBILIARIA_CHAT: ChatMsg[] = [
  { from: "user", text: "Oi, boa tarde", time: "16:05" },
  { from: "ai", text: "Boa tarde! Sou o assistente da imobiliária.", time: "16:05" },
  { from: "ai", text: "Como posso ajudar?", time: "16:05" },
  { from: "user", text: "Tem apartamento de 2 quartos na região central?", time: "16:06" },
  {
    from: "ai",
    text: "Temos sim! 🏠 Temos opções de 2 quartos a partir de **R$ 320 mil** na região central.",
    time: "16:06",
  },
  { from: "ai", text: "Quer que eu te envie fotos e mais detalhes?", time: "16:06" },
  { from: "user", text: "Quero sim.", time: "16:06" },
  {
    from: "ai",
    text: "Te enviei as fotos aqui! O imóvel tem 65m², 1 vaga de garagem e está pronto pra morar.",
    time: "16:07",
  },
  { from: "ai", text: "Quer agendar uma visita pra conhecer pessoalmente?", time: "16:07" },
  { from: "user", text: "Quero sim, essa semana se der.", time: "16:07" },
  { from: "ai", text: "Qual é o seu nome?", time: "16:07" },
  { from: "user", text: "Eduardo Nascimento", time: "16:08" },
  { from: "ai", text: "Prazer, Eduardo!", time: "16:08" },
  { from: "ai", text: "Qual seu e-mail pra confirmação da visita?", time: "16:08" },
  { from: "user", text: "eduardonascimento@gmail.com", time: "16:08" },
  {
    from: "ai",
    text: "Perfeito! Temos horário amanhã (quinta-feira, 27/08) às **10:00** ou **15:00**. Qual prefere?",
    time: "16:09",
  },
  { from: "user", text: "15h pra mim está ótimo", time: "16:09" },
  {
    from: "ai",
    text: "Confirmando: 🏠 **Visita — Apto 2 quartos, Centro** 📅 **Quinta-feira, 27/08** ⏰ **15:00** 👤 **Eduardo Nascimento**. Posso agendar?",
    time: "16:09",
  },
  { from: "user", text: "Pode sim, obrigado!", time: "16:09" },
  { from: "ai", text: "Agendado! Te espero lá amanhã às 15h. Até logo! 🔑", time: "16:10" },
];

/** Conversa simulada — loja física (reserva de peça pra retirada). */
export const LOJA_CHAT: ChatMsg[] = [
  { from: "user", text: "Oi, boa tarde", time: "14:50" },
  { from: "ai", text: "Boa tarde! Sou o assistente da loja.", time: "14:50" },
  { from: "ai", text: "Como posso te ajudar?", time: "14:50" },
  { from: "user", text: "Vocês têm essa camisa que vi no Instagram, tamanho M?", time: "14:51" },
  { from: "ai", text: "Deixa eu verificar! 👕", time: "14:51" },
  { from: "ai", text: "Temos sim, no tamanho M e disponível em azul e branco.", time: "14:51" },
  { from: "user", text: "Quanto custa?", time: "14:51" },
  {
    from: "ai",
    text: "O valor é **R$ 89,90**. Quer que eu separe pra você retirar na loja ou prefere entrega?",
    time: "14:52",
  },
  { from: "user", text: "Vou retirar na loja mesmo.", time: "14:52" },
  { from: "ai", text: "Perfeito! Qual seu nome pra deixar reservado?", time: "14:52" },
  { from: "user", text: "Larissa Gomes", time: "14:52" },
  { from: "ai", text: "Prazer, Larissa!", time: "14:52" },
  {
    from: "ai",
    text: "Já separei a peça pra você. Até que horas consegue vir hoje?",
    time: "14:53",
  },
  { from: "user", text: "Até umas 18h", time: "14:53" },
  {
    from: "ai",
    text: "Combinado! Confirmando: 👕 **Camisa azul, tam. M** 💰 **R$ 89,90** ⏰ **Retirada até 18h**. Tudo certo?",
    time: "14:53",
  },
  { from: "user", text: "Isso mesmo, obrigada!", time: "14:53" },
  { from: "ai", text: "Reservado! Te esperamos até as 18h. Até já! 🛍️", time: "14:54" },
];

/** Conversa simulada — barbearia (agendamento de corte e barba). */
export const BARBEARIA_CHAT: ChatMsg[] = [
  { from: "user", text: "Oi, boa tarde", time: "10:20" },
  { from: "ai", text: "Boa tarde! Sou o assistente da barbearia.", time: "10:20" },
  { from: "ai", text: "Vai querer marcar um horário?", time: "10:20" },
  { from: "user", text: "Quero sim, corte e barba.", time: "10:21" },
  { from: "ai", text: "Show! 💈 Corte + barba fica **R$ 60**.", time: "10:21" },
  { from: "ai", text: "Qual dia e horário funciona melhor pra você?", time: "10:21" },
  { from: "user", text: "Hoje à tarde tem vaga?", time: "10:21" },
  {
    from: "ai",
    text: "Temos sim! Horários livres hoje: **15:00**, **16:30** e **17:00**.",
    time: "10:22",
  },
  { from: "user", text: "16h30 pra mim", time: "10:22" },
  { from: "ai", text: "Perfeito! Qual é o seu nome?", time: "10:22" },
  { from: "user", text: "Thiago Souza", time: "10:22" },
  { from: "ai", text: "Beleza, Thiago!", time: "10:23" },
  {
    from: "ai",
    text: "Confirmando: 💈 **Corte + Barba** 📅 **Hoje** ⏰ **16:30** 👤 **Thiago Souza**. Posso agendar?",
    time: "10:23",
  },
  { from: "user", text: "Pode confirmar, valeu!", time: "10:23" },
  { from: "ai", text: "Agendado! Te espero às 16h30. Até já! ✂️", time: "10:23" },
];

/** Conversa simulada — restaurante (reserva de mesa). */
export const RESTAURANTE_CHAT: ChatMsg[] = [
  { from: "user", text: "Boa noite!", time: "18:40" },
  { from: "ai", text: "Boa noite! Sou o assistente do restaurante.", time: "18:40" },
  { from: "ai", text: "Você quer fazer uma reserva ou já quer pedir delivery?", time: "18:40" },
  { from: "user", text: "Quero reservar uma mesa pra hoje.", time: "18:41" },
  { from: "ai", text: "Perfeito! Para quantas pessoas?", time: "18:41" },
  { from: "user", text: "4 pessoas", time: "18:41" },
  { from: "ai", text: "Ótimo! Qual horário você prefere?", time: "18:41" },
  { from: "user", text: "20h, tem vaga?", time: "18:42" },
  { from: "ai", text: "Temos sim! Às **20:00** ainda temos mesas disponíveis.", time: "18:42" },
  { from: "ai", text: "Qual é o seu nome para a reserva?", time: "18:42" },
  { from: "user", text: "Marcos Vinicius", time: "18:42" },
  { from: "ai", text: "Prazer, Marcos!", time: "18:42" },
  { from: "ai", text: "Qual seu telefone, caso precisemos confirmar algo?", time: "18:43" },
  { from: "user", text: "(55) 99988-7766", time: "18:43" },
  {
    from: "ai",
    text: "Confirmando: 🍽️ **Mesa para 4** 📅 **Hoje** ⏰ **20:00** 👤 **Marcos Vinicius**. Posso reservar?",
    time: "18:43",
  },
  { from: "user", text: "Pode sim, obrigado!", time: "18:43" },
  { from: "ai", text: "Reserva confirmada! Te esperamos às 20h. Até logo! 🍷", time: "18:44" },
];
