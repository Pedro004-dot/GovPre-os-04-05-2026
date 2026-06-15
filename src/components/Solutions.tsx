import { FileText, Zap, BarChart3, Brain, ArrowRight, BookOpen, Search } from 'lucide-react';

function Solutions() {
  const solutions = [
    {
      icon: FileText,
      title: 'DFD Inteligente',
      description: 'Crie Documentos de Formalização de Demanda com preenchimento guiado e automatizado.',
    },
    {
      icon: Zap,
      title: 'ETP Inteligente',
      description: 'Elaboração simplificada com perguntas inteligentes e geração automática.',
    },
    {
      icon: BookOpen,
      title: 'Termo de Referência',
      description: 'Criação automatizada com estrutura alinhada à Lei 14.133/2021.',
    },
    {
      icon: Search,
      title: 'Pesquisa de Preços',
      description: 'Consultas inteligentes e relatórios completos conforme IN 65.',
    },
    {
      icon: Brain,
      title: 'GovIA',
      description: 'Inteligência artificial especializada em compras públicas.',
    },
    {
      icon: BarChart3,
      title: 'Relatórios Analíticos',
      description: 'Relatórios completos com estatísticas detalhadas: média, mediana, desvio padrão e menor preço.',
    },
  ];

  return (
    <section id="solucoes" className="py-12 md:py-24 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-[#00397b]/10 mb-6">
            <div className="w-2 h-2 bg-[#00853c] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#00397b]">Nossas Soluções</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00397b] mb-6 leading-tight">
            Uma plataforma completa para toda fase interna da contratação
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Do planejamento à pesquisa de preços, centralize toda a preparação da contratação pública em um único sistema.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-10 border-2 border-[#00853c]/30 hover:border-[#00853c] hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="bg-gradient-to-br from-[#007BFF] to-[#ABC5FF] rounded-2xl w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#00397b] mb-4 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/5531999901464?text=Olá!%20Gostaria%20de%20solicitar%20uma%20demonstração%20da%20plataforma%20GOVPREÇOS%20para%20conhecer%20as%20soluções%20de%20inteligência%20de%20dados."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#00853c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#006d30] transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <span>Solicitar Demonstração</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
