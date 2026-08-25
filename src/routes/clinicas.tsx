import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/clinicas')({
  component: ClinicasPage,
})

function ClinicasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-24">
        {/* Accent blur element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-orange-500"></div>
            <span className="text-sm font-medium text-orange-600 uppercase tracking-widest">Solução IA para Consultórios</span>
            <div className="h-px w-8 bg-orange-500"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', lineHeight: 1.1 }}>
            Seu WhatsApp atendendo
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">24 horas por dia</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Agente IA que responde, agenda e qualifica — sem programação, sem API key. 
            <span className="block mt-2 text-gray-500 text-base">Feito para consultórios, clínicas e profissionais. Respostas em minutos, sem compromisso.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-lg">
              Agendar Demo Agora
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 text-lg">
              Ver em Ação
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Setup em 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Sem código, sem complicação</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Suporte em português</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Problem statement */}
            <div>
              <span className="text-sm font-medium text-orange-600 uppercase tracking-widest">O Problema Real</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Seu consultório perde leads 24 horas por dia
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Mensagens chegam à noite, fim de semana, feriado. Quando você responde, o paciente já escolheu outro consultório. 
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Contratar recepcionista 24h? Impossível. Seu custo explode. E mesmo assim você perde agendamentos.
              </p>

              {/* Pain points */}
              <ul className="space-y-4">
                {[
                  'Clientes desistem enquanto esperam resposta',
                  'Agendamentos duplicados sem qualificação',
                  'Sem organização de leads no WhatsApp',
                  'Você perdendo tempo respondendo mensagens',
                ].map((pain, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg">{pain}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Visual demo */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 border border-slate-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💬</div>
                <p className="text-gray-500">WhatsApp aberto 24h respondendo</p>
                <p className="text-gray-400 text-sm mt-2">Seu agente IA nunca dorme</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-orange-600 uppercase tracking-widest">A Solução</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Seu consultório com atendimento 24h
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Responde em Segundos', desc: 'Agente IA responde todas as mensagens automaticamente, 24h/dia' },
              { icon: '📅', title: 'Agenda Sem Erro', desc: 'Qualifica cliente, verifica disponibilidade e agenda direto no seu sistema' },
              { icon: '🎯', title: 'Organiza Tudo', desc: 'Kanban automático com leads por status. Você vê tudo organizado' },
              { icon: '🔐', title: 'Seguro e Privado', desc: 'Dados do paciente protegidos. Conforme normas de consultórios' },
              { icon: '💰', title: 'Sem Setup Complicado', desc: 'Conecta em 24h. Nenhum código, nenhuma integração custom' },
              { icon: '🚀', title: 'Começa em Dias', desc: 'Não é um projeto de 3 meses. Você usa semana que vem' },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-orange-600 uppercase tracking-widest">Como Funciona</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              3 passos para ativar seu agente
            </h2>
          </div>

          <div className="space-y-12">
            {[
              { num: '1', title: 'Conecte seu WhatsApp', desc: 'QR code, leitura de 30 segundos. Seu agente ganha acesso.' },
              { num: '2', title: 'Treine o Agente', desc: 'Você configura: nome do consultório, especialidade, horário, preço. Tudo em um painel visual.' },
              { num: '3', title: 'Ative e Relaxe', desc: 'Agente começa a responder. Você monitora tudo no painel Kanban.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-orange-500 text-white font-bold text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {step.num}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-orange-600 uppercase tracking-widest">Investimento</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Planos transparentes
            </h2>
            <p className="text-gray-600 text-lg mt-4">Setup único + taxa mensal por cliente. Nada oculto.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { clients: '1-2', setup: 'R$ 2.000', monthly: 'R$ 400', best: false },
              { clients: '3-5', setup: 'R$ 2.000', monthly: 'R$ 350', best: true },
              { clients: '+6', setup: 'R$ 2.000', monthly: 'R$ 300', best: false },
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 border transition-all duration-300 ${plan.best ? 'border-orange-500 bg-gradient-to-b from-orange-50 to-white shadow-xl scale-105' : 'border-gray-200 bg-white'}`}>
                {plan.best && <div className="text-sm font-semibold text-orange-600 uppercase tracking-widest mb-4">Recomendado</div>}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{plan.clients} clientes</h3>
                <div className="mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.monthly}<span className="text-lg text-gray-600">/mês</span></div>
                  <p className="text-gray-600">+ {plan.setup} de setup</p>
                </div>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${plan.best ? 'bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-lg' : 'border-2 border-gray-300 text-gray-900 hover:border-orange-500'}`}>
                  Começar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Pronto para atender 24h?
          </h2>
          <p className="text-xl mb-10 text-blue-50">
            Agende uma demo sem compromisso. 15 minutos, você vê tudo funcionando.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 text-lg shadow-lg">
            Agendar Demo Agora
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p>© 2026 ZapBook. Consultórios que crescem com IA.</p>
          <div className="mt-6 flex gap-6 justify-center text-sm">
            <a href="#" className="hover:text-white transition">Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos</a>
            <a href="#" className="hover:text-white transition">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
