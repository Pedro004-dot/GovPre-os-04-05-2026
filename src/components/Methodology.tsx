import { Database, Filter, Headphones } from 'lucide-react';

function Methodology() {
  const steps = [
    {
      number: '01',
      icon: Database,
      title: 'Coleta de Dados',
      description:
        'Rastreamento automatizado de licitações e contratos em bases públicas oficiais. Capturamos dados de todo o território nacional em tempo real.',
    },
    {
      number: '02',
      icon: Filter,
      title: 'Saneamento',
      description:
        'Remoção inteligente de outliers e dados inconsistentes utilizando métodos estatísticos avançados. Garantimos que apenas informações precisas sejam consideradas.',
    },
    {
      number: '03',
      icon: Headphones,
      title: 'Suporte Técnico Especializado',
      description:
        'Análise criteriosa por especialistas para assegurar total conformidade com a legislação vigente e aplicabilidade prática dos resultados.',
    },
  ];

  return (
    <section id="metodologia" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#00853c] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#00397b]">Metodologia</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00397b] mb-6">
            Processo Científico e Transparente
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nossa metodologia combina tecnologia avançada com rigor estatístico para garantir resultados precisos e defensáveis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#007BFF] to-[#ABC5FF] p-12">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMUYzRSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

                <div className="relative space-y-8">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-6">
                      <div className="bg-gradient-to-br from-[#007BFF] to-[#00397b] rounded-2xl w-16 h-16 flex items-center justify-center font-bold text-white text-2xl flex-shrink-0 shadow-lg">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="text-[#00397b] font-bold text-xl mb-3">Dados Coletados</div>
                        <div className="w-full bg-[#00397b]/10 rounded-full h-3 overflow-hidden">
                          <div className="bg-gradient-to-r from-[#00853c] to-[#00d46a] h-3 rounded-full animate-pulse shadow-lg" style={{ width: '100%' }}></div>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">Processando milhares de licitações</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-1 h-12 bg-gradient-to-b from-[#00397b]/30 to-[#00397b]/10 rounded-full"></div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-6">
                      <div className="bg-gradient-to-br from-[#007BFF] to-[#00397b] rounded-2xl w-16 h-16 flex items-center justify-center font-bold text-white text-2xl flex-shrink-0 shadow-lg">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="text-[#00397b] font-bold text-xl mb-3">Saneamento Aplicado</div>
                        <div className="w-full bg-[#00397b]/10 rounded-full h-3 overflow-hidden">
                          <div className="bg-gradient-to-r from-[#00853c] to-[#00d46a] h-3 rounded-full animate-pulse shadow-lg" style={{ width: '85%' }}></div>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">Filtrando dados inconsistentes</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-1 h-12 bg-gradient-to-b from-[#00397b]/30 to-[#00397b]/10 rounded-full"></div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-sm transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-6">
                      <div className="bg-gradient-to-br from-[#007BFF] to-[#00397b] rounded-2xl w-16 h-16 flex items-center justify-center font-bold text-white text-2xl flex-shrink-0 shadow-lg">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="text-[#00397b] font-bold text-xl mb-3">Validação Concluída</div>
                        <div className="w-full bg-[#00397b]/10 rounded-full h-3 overflow-hidden">
                          <div className="bg-gradient-to-r from-[#00853c] to-[#00d46a] h-3 rounded-full animate-pulse shadow-lg" style={{ width: '100%' }}></div>
                        </div>
                        <p className="text-gray-600 text-sm mt-2">Análise técnica finalizada</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="text-6xl font-bold text-[#00853c]/20 group-hover:text-[#00853c]/40 transition-colors duration-300">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="bg-gradient-to-br from-[#007BFF] to-[#ABC5FF] rounded-xl p-3">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#00397b]">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="ml-8 mt-6 mb-6">
                      <div className="w-0.5 h-8 bg-gray-200"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Methodology;
