import { createFileRoute } from "@tanstack/react-router";
import { ClinicasPage } from "./clinicas";

export const Route = createFileRoute('/clinicas-premium')({
  head: () => ({ meta: [
    { title: 'ZapPulse Premium | Atendimento para Clínicas' },
    { name: 'description', content: 'Conheça o atendimento automatizado da ZapPulse para clínicas e profissionais de saúde.' },
    { property: 'og:title', content: 'ZapPulse Premium | Atendimento para Clínicas' },
    { property: 'og:description', content: 'Conheça o atendimento automatizado da ZapPulse para clínicas e profissionais de saúde.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: ClinicasPage,
})

