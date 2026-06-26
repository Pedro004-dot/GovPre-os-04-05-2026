import { FileText, Zap, BarChart3, Brain, ArrowRight, BookOpen, Search } from 'lucide-react';
import { SectionBadge, FeatureCard } from './ui';
import { WHATSAPP_DEMO_URL } from '../lib/config';

function Solutions() {
  const solutions = [
    {
      icon: FileText,
      title: 'DFD Inteligente',
      description: 'DFD completo em 10 minutos. Preenchimento guiado elimina erros e acelera aprovações.',
    },
    {
      icon: Zap,
      title: 'ETP Inteligente',
      description: 'ETP aprovado sem revisões. Perguntas inteligentes geram justificativas técnicas robustas.',
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
          <div className="flex justify-center mb-6">
            <SectionBadge label="Nossas Soluções" className="bg-white/80 backdrop-blur-sm" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#001F3E] mb-6 leading-tight">
            Uma plataforma completa para toda fase interna da contratação
          </h2>
          <p className="text-xl text-[#8092AA] leading-relaxed">
            Do planejamento à pesquisa de preços, centralize toda a preparação da contratação pública em um único sistema.
          </p>
        </div>

        {/* Grid dos 6 cards de soluções */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <FeatureCard
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>

        {/* CTA Card ocupando largura total */}
        <div className="w-full">
          <div className="group bg-gradient-to-r from-[#007BFF] to-[#ABC5FF] rounded-3xl p-12 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8">
              <div className="flex-1">
                {/* <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="bg-white/20 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div> */}
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  Veja na Prática
                </h3>
                <p className="text-white/90 leading-relaxed text-lg max-w-2xl">
                  Demonstração personalizada em 15 minutos. Teste todas as funcionalidades e veja como nossa plataforma pode transformar seu processo de compras públicas com total conformidade à Lei 14.133/2021.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href={WHATSAPP_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-[#006AFF] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg"
                >
                  <span>Solicitar Demonstração</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
