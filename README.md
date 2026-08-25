# oZap Landing Pages

╔═════════════════════════════════════════════════════════════════╗

║ PROMPT PARA LOVABLE - CRIAR PROJETO COM 3 LANDING PAGES        ║

║ Copia e cola TUDO no Lovable (ele vai criar sozinho)          ║

╚═════════════════════════════════════════════════════════════════╝

Crie um projeto Next.js/React único com 3 landing pages especializadas em um projeto Lovable.

---

## ESTRUTURA DO PROJETO

Nome: "ozap-lp"

Framework: Next.js 13+

Estilo: Tailwind CSS

Rotas:

- / (home/redirect)

- /consultorio (LP para consultórios isolados)

- /clinicas (LP para pequenas clínicas)

- /advogados (LP para escritórios advocacia)

---

## COMPONENTES REUTILIZÁVEIS

Crie os seguintes componentes que serão herdados por todas as 3 páginas:

### Header.tsx

- Logo "oZap" no topo esquerdo

- Menu simples: "Consultório | Clínica | Advogado" (links para as 3 rotas)

- Botão "Ver Demo" no topo direito (link WhatsApp: https://wa.me/5553991774147)

- Background: Gradient suave azul/branco

### CTA.tsx (Reutilizável)

- Botão destacado "Agendar Demo Agora"

- Link WhatsApp: https://wa.me/5553991774147?text=Oi!%20Gostaria%20de%20uma%20demo

- Cor: Verde/Azul degradê

- Hover effect sutil

### Footer.tsx

- Copyright "© 2026 oZap"

- Links: Privacidade | Termos

- Email suporte: [colocar seu email]

- Links sociais: Instagram, LinkedIn, WhatsApp

---

## PÁGINA 1: /consultorio

### Layout

[Header reutilizável]

[Seção Hero]

Headline: "Pare de Perder Agendamentos no WhatsApp"

Subheading: "Seu agente de IA responde 24/7. Pacientes agendamsolinhos."

Imagem/GIF: Demonstração de conversa IA (ou texto descritivo animado)

CTA: [Componente CTA.tsx]

[Seção Problema - 3 colunas]

🔴 "Você gasta 2-3h/dia respondendo msgs"

🔴 "Paciente desiste porque demora"

🔴 "Receita perdida por falta de resposta rápida"

[Seção Solução - 4 itens]

✅ Agente de IA responde 24/7 (WhatsApp)

✅ Agendamento automático no Google Calendar

✅ Confirmação + Lembrete pré-consulta (reduz no-show)

✅ Humanizado (não parece robô)

[Seção "Como Funciona" - 4 passos]

1. Paciente manda msg no WhatsApp

2. IA responde e coleta dados (nome, motivo, data)

3. Agendar direto no seu Google Calendar

4. Confirmação automática + Lembrete 24h antes

[Seção Preço]

Setup: R$ 2.000 (uma vez)

Recorrência: R$ 400/mês

Inclui: Configuração completa, Google Calendar integrado, Suporte

[CTA Final]

[Componente CTA.tsx]

[Footer reutilizável]

---

## PÁGINA 2: /clinicas

### Layout

[Header reutilizável]

[Seção Hero]

Headline: "Chega de Confusão em Agendamentos"

Subheading: "Múltiplos profissionais, múltiplas msgs. Agora tudo organizado."

Imagem/GIF: Dashboard com agendamentos organizados

CTA: [Componente CTA.tsx]

[Seção Problema - 3 colunas]

🔴 "Pacientes confundem qual especialidade marcar"

🔴 "Agendamentos duplicados (mesmo horário, 2 pacientes)"

🔴 "No-show aumenta, receita cai"

[Seção Solução - 4 itens]

✅ Agente direciona msg pro especialista certo

✅ Confirmação antes de agendar (evita duplicação)

✅ Lembretes reduzem no-show em 40%

✅ CRM integrado (veja todos agendamentos em um lugar)

[Seção "Para Sua Clínica" - 4 casos]

Caso 1: Clínica com Dentista + Psicólogo

Caso 2: Clínica com Fisioterapia + Estética

Caso 3: Centro Médico com múltiplas especialidades

Caso 4: Policlínica com >3 profissionais

[Seção Preço]

Setup: R$ 2.500 (uma vez)

Recorrência: R$ 400-500/mês (conforme especialidades)

Inclui: Configuração por especialidade, Múltiplas agendas, Suporte

[CTA Final]

[Componente CTA.tsx]

[Footer reutilizável]

---

## PÁGINA 3: /advogados

### Layout

[Header reutilizável]

[Seção Hero]

Headline: "Você Gasta 30min/dia em Triagem de Cliente"

Subheading: "Automatize tudo. Foque em fechar."

Imagem/GIF: Agente triando leads automaticamente

CTA: [Componente CTA.tsx]

[Seção Problema - 3 colunas]

🔴 "Cliente liga/WhatsApp, você tira 30min pra entender demanda"

🔴 "Fila de espera cresce, cliente fica na mão"

🔴 "Informações espalhadas (msg, email, ligação)"

[Seção Solução - 4 itens]

✅ Agente tira info automaticamente (tipo de caso, urgência, cliente)

✅ Resume tudo em um email pro seu painel

✅ Cliente sabe próximos passos (reduz ansiedade)

✅ Você foca em fechar, não em triagem

[Seção "Fluxo do Agente" - 4 passos]

1. Cliente envia msg: "Preciso de ajuda com divórcio"

2. IA pergunta: tipo de caso, urgência, dados pessoais

3. IA resume e envia email: "Lead: Divórcio, urgência média, [dados]"

4. Você contacta com proposta

[Seção "Benefícios" - 4 itens]

✅ Reduz tempo triagem: 30min → 2min

✅ Qualifica leads: só recebe os sérios

✅ Melhora CX: cliente se sente atendido 24/7

✅ Escalável: mesmo com 100 contatos/dia

[Seção Preço]

Setup: R$ 3.000 (uma vez)

Recorrência: R$ 500/mês

Inclui: Triagem automática, Integração Gmail, Relatórios, Suporte

[CTA Final]

[Componente CTA.tsx]

[Footer reutilizável]

---

## ESTILOS GLOBAIS

Use Tailwind CSS para:

- Hero: Background gradient azul → branco, texto branco em azul claro

- Seções: Alternância de fundo branco/cinza claro (#f9fafb)

- Botões: Gradient verde/azul, hover elevation

- Cards: Sombra suave, border-radius 12px

- Typography: Font system padrão (sans-serif)

- Spacing: Consistent padding/margin (4, 8, 16, 24, 32)

---

## PÁGINAS META

Cada página deve ter:

- Title (SEO): "Agendamento Automático com IA | oZap - [Nicho]"

- Description (SEO): 155 caracteres descrevendo o problema específico

- OG Image: oZap logo + headline

- Favicon: oZap logo

---

## INTERATIVIDADE MÍNIMA

- Hover effects em botões e cards

- Links funcionais (WhatsApp, rotas internas)

- Menu responsivo (mobile-friendly)

- Não precisa de animações complexas (simples é melhor)

---

## APÓS CRIAR

Quando Lovable terminar:

1. Deploy automático (ele vai dar o link)

2. URLs finais:

   - ozap-lp.vercel.app/consultorio

   - ozap-lp.vercel.app/clinicas

   - ozap-lp.vercel.app/advogados

3. Copie as URLs para disparar no WhatsApp/Email

---

## CHECKLIST FINAL

☑️ 3 páginas criadas (rotas diferentes)

☑️ Header/Footer reutilizáveis

☑️ CTA com link WhatsApp em todas

☑️ Responsivo (mobile + desktop)

☑️ SEO básico (title, meta description)

☑️ Link alternativo entre páginas

☑️ Deployed e live

---

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/92697c6b-f6de-442b-85a6-5d5973749921).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
