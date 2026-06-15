import { Target, Zap, Lock } from 'lucide-react';

function Differentials() {
  const differentials = [
    {
      icon: Target,
      title: 'Precisão',
      description:
        'Metodologia estatística rigorosa com remoção de outliers e validação de dados. Nossos resultados passam por múltiplas camadas de verificação para garantir a máxima confiabilidade.',
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description:
        'Reduza semanas de trabalho manual em minutos. Nossa plataforma automatizada entrega pesquisas completas de forma instantânea, permitindo que sua equipe foque no que realmente importa.',
    },
    {
      icon: Lock,
      title: 'Segurança',
      description:
        'Total conformidade legal e segurança jurídica em cada relatório. Nossos documentos são respaldados pela Nova Lei de Licitações e prontos para sustentação em auditorias e recursos.',
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <div className="w-2 h-2 bg-[#00853c] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#00397b]">Diferenciais</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00397b] mb-6">
            O que nos Torna Únicos
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Combinamos tecnologia de ponta com expertise jurídica para entregar a solução mais completa do mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-br from-[#007BFF] to-[#ABC5FF] rounded-xl p-4 flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#00397b] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8297031/pexels-photo-8297031.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Segurança e análise de dados"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00397b]/90 via-[#00397b]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/80 text-sm mb-1">Conformidade Legal</p>
                        <p className="text-white text-2xl font-bold">100% Lei 14.133/21</p>
                      </div>
                      <div className="bg-[#00853c] rounded-full p-3">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <p className="text-white/80 text-xs mb-1">Integração</p>
                      <p className="text-white text-xl font-bold">PNCP</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <p className="text-white/80 text-xs mb-1">Tempo Médio</p>
                      <p className="text-white text-xl font-bold">2 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Differentials;
