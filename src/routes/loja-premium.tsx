import { createFileRoute } from "@tanstack/react-router";
import { LojaPage } from "./loja";

export const Route = createFileRoute('/loja-premium')({
  head: () => ({ meta: [
    { title: 'ZapPulse Premium | Atendimento para Lojas' },
    { name: 'description', content: 'Conheça o atendimento automatizado da ZapPulse para vendas e estoque no WhatsApp.' },
    { property: 'og:title', content: 'ZapPulse Premium | Atendimento para Lojas' },
    { property: 'og:description', content: 'Conheça o atendimento automatizado da ZapPulse para vendas e estoque no WhatsApp.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: LojaPage,
})

