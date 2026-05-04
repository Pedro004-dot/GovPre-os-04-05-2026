import { Clock, AlertCircle, Trophy } from 'lucide-react';

function Impact() {
  const metrics = [
    {
      icon: Clock,
      value: '85%',
      label: 'Redução de Tempo',
      description: 'na fase interna do processo licitatório',
    },
    {
      icon: AlertCircle,
      value: '70%',
      label: 'Menos Impugnações',
      description: 'com fundamentação sólida e transparente',
    },
    {
      icon: Trophy,
      value: '45%',
      label: 'Maior Competitividade',
      description: 'aumento médio de participantes',
    },
  ];

  return (
    <section id="impacto" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#00853c] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#00397b]">Resultados Comprovados</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00397b] mb-6">
            Impacto na Eficiência Operacional
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nossos clientes experimentam melhorias significativas em seus processos de contratação, com economia de tempo, redução de riscos e aumento da eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 border border-gray-100 hover:border-[#00853c]/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gradient-to-br from-[#00397b] to-[#00853c] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-[#00397b] mb-3">
                  {metric.value}
                </div>
                <div className="text-xl font-bold text-[#00397b] mb-2">
                  {metric.label}
                </div>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipe celebrando resultados"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00397b]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-white text-lg font-semibold mb-2">
                  "A GOVPREÇOS transformou nossos processos licitatórios"
                </p>
                <p className="text-white/90 text-sm">
                  Reduzimos drasticamente o tempo de preparação e eliminamos questionamentos sobre a formação de preços.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#00397b] mb-4">
                Benefícios Mensuráveis
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00853c] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Redução significativa do tempo de preparação da fase interna</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00853c] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Diminuição expressiva de impugnações e recursos administrativos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00853c] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Aumento da competitividade com preços mais realistas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00853c] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Fortalecimento da defesa em auditorias e controle interno</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00853c] rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Maior transparência e credibilidade institucional</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00397b] to-[#00853c] rounded-2xl p-8 text-white">
              <div className="text-4xl font-bold mb-2">PNCP</div>
              <div className="text-xl font-semibold mb-4">Integração Total</div>
              <p className="text-white/90">
                Integração completa com o Portal Nacional de Contratações Públicas para acesso aos dados mais atualizados e oficiais do mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
