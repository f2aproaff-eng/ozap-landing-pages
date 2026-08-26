import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/loja')({
  component: LojaPage,
})

function LojaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-6 py-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-emerald-500"></div>
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-widest">Vendas 24h para sua Loja</span>
            <div className="h-px w-8 bg-emerald-500"></div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', lineHeight: 1.1 }}>
            Agente de Vendas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-500">24 horas no seu WhatsApp</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Consulta estoque, recomenda produtos, fecha venda — tudo pelo WhatsApp.
            <span className="block mt-2 text-gray-500 text-base">Seu agente IA nunca dorme. Seus clientes compram a noite toda.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-lg">
              Ver Demo Agora
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-emerald-500 transition-all text-lg">
              Conhecer Plano
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>Integra com seu estoque</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>Aumenta vendas noturnas</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>Setup em 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-emerald-600 uppercase tracking-widest">O Desafio Real</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Seus clientes querem comprar à noite. Você está dormindo.
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Meia-noite? 2 da manhã? Seu cliente quer aquele produto agora. Se você não responde em minutos, ele compra no concorrente.
              </p>
              <ul className="space-y-4">
                {[
                  'Perde vendas por estar fechado',
                  'Dúvidas sobre produto não são respondidas',
                  'Estoque desatualizado no WhatsApp',
                  'Cliente inseguro sobre comprar sem confirmar',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-8 border border-slate-200 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🛍️</div>
                <p className="text-gray-500">Agente IA vende enquanto você dorme</p>
                <p className="text-gray-400 text-sm mt-2">Seu estoque sempre atualizado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-widest">Sua Solução</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Vendas rodando 24/7 no WhatsApp
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🤖', title: 'Agente que Vende', desc: 'Recomenda produto certo, consulta estoque, fecha venda automaticamente' },
              { icon: '📦', title: 'Estoque em Tempo Real', desc: 'Agente sabe exatamente o que tem. Nenhuma venda de produto indisponível' },
              { icon: '⭐', title: 'Recomendações Inteligentes', desc: 'Baseado no que o cliente procura, agente sugere combos e promoções' },
              { icon: '💳', title: 'Checkout Integrado', desc: 'Cliente paga direto pelo WhatsApp. Agente valida e confirma' },
              { icon: '📊', title: 'Relatórios de Vendas', desc: 'Veja quanto vendeu à noite. Quais produtos. Quais clientes' },
              { icon: '🚀', title: 'Sem Barreira de Entrada', desc: 'Não precisa mexer em código. Seu agente começa a vender hoje' },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all">
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
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-widest">Começa Agora</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              3 passos até sua primeira venda automática
            </h2>
          </div>

          <div className="space-y-12">
            {[
              { num: '1', title: 'Conecte seu WhatsApp', desc: 'QR code rápido. Seu agente ganha acesso ao seu WhatsApp Business.' },
              { num: '2', title: 'Configure seus Produtos', desc: 'Foto, preço, descrição. Integra com seu estoque ou sistema de vendas.' },
              { num: '3', title: 'Ative e Venda', desc: 'Agente começa a atender. Você recebe notificação a cada venda.' },
            ].map((step, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-emerald-600 to-blue-500 text-white font-bold text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
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

      {/* PRICING */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-emerald-600 uppercase tracking-widest">Investimento</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Planos para toda loja
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Startup', setup: 'R$ 1.200', monthly: 'R$ 300' },
              { name: 'Crescimento', setup: 'R$ 1.200', monthly: 'R$ 300', best: true },
              { name: 'Premium', setup: 'R$ 1.200', monthly: 'R$ 300' },
            ].map((plan, i) => (
              <div key={i} className={`rounded-2xl p-8 border transition-all ${plan.best ? 'border-emerald-500 bg-gradient-to-b from-emerald-50 to-white shadow-xl scale-105' : 'border-gray-200 bg-white'}`}>
                {plan.best && <div className="text-sm font-semibold text-emerald-600 uppercase mb-4">Mais Popular</div>}
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{plan.name}</h3>
                <div className="mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.monthly}<span className="text-lg text-gray-600">/mês</span></div>
                  <p className="text-gray-600">+ {plan.setup} de setup</p>
                </div>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.best ? 'bg-gradient-to-r from-emerald-600 to-blue-500 text-white' : 'border-2 border-gray-300 text-gray-900'}`}>
                  Começar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 bg-gradient-to-r from-emerald-600 to-blue-500 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Sua loja venda 24 horas
          </h2>
          <p className="text-xl mb-10 text-emerald-50">
            Agende uma demo agora. Veja seu agente vendendo produtos.
          </p>
          <button className="px-10 py-4 bg-white text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-all text-lg shadow-lg">
            Ver Demo Agora
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p>© 2026 ZapBook. Lojas que vendem 24/7.</p>
        </div>
      </footer>
    </div>
  )
}
