import { Sparkles, Shield, TrendingUp } from 'lucide-react';
import { SectionBadge, FeatureCard } from './ui';

function Mission() {
  const cards = [
    {
      icon: Sparkles,
      title: 'Modernizar',
      description:
        'Revolucionar a gestão pública com tecnologia de ponta, automatizando processos e trazendo eficiência para cada etapa da pesquisa de preços.',
    },
    {
      icon: Shield,
      title: 'Garantir',
      description:
        'Assegurar acesso a valores reais de mercado com metodologia robusta, transparente e totalmente alinhada às exigências legais vigentes.',
    },
    {
      icon: TrendingUp,
      title: 'Promover',
      description:
        'Fomentar transparência, eficiência e economia nos processos de contratação pública, fortalecendo a confiança da sociedade.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <SectionBadge label="Nossa Missão" />
              <h2 className="text-4xl lg:text-5xl font-bold text-[#001F3E] leading-tight">
                Conformidade com a Lei 14.133 em Minutos
              </h2>
              <p className="text-lg text-[#8092AA] leading-relaxed">
                Eliminar recursos e impugnações com pesquisas defensáveis. Nossa tecnologia transforma compliance complexo em processo simples e automatizado.
              </p>
            </div>

            <div className="space-y-6">
              {cards.map((card, index) => (
                <FeatureCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  variant="highlight"
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#007BFF] to-[#001F3E] h-[400px] md:h-[600px] flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="bg-white/20 rounded-full p-6 inline-block mb-6">
                  <TrendingUp className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-white font-bold text-2xl mb-4">
                  Transformação Digital
                </h4>
                <p className="text-white/90 text-lg max-w-md mx-auto leading-relaxed">
                  Liderando a modernização da gestão pública através da inteligência de dados e tecnologia avançada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
