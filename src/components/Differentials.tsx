import { Target, Zap, Lock } from 'lucide-react';
import { SectionBadge, StatCard } from './ui';

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
          <div className="flex justify-center mb-6">
            <SectionBadge label="Diferenciais" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#001F3E] mb-6">
            O que nos Torna Únicos
          </h2>
          <p className="text-lg text-[#8092AA] leading-relaxed">
            Combinamos tecnologia de ponta com expertise jurídica para entregar a solução mais completa do mercado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {differentials.map((item, index) => (
              <StatCard
                key={index}
                value={item.title}
                label={item.description}
                icon={item.icon}
              />
            ))}
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#007BFF] to-[#001F3E] h-[400px] md:h-[600px] flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="bg-white/20 rounded-full p-6 inline-block mb-6">
                  <Lock className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-white font-bold text-2xl mb-4">
                  Segurança Jurídica Total
                </h4>
                <p className="text-white/90 text-lg max-w-md mx-auto leading-relaxed">
                  Conformidade garantida com a Lei 14.133/2021 em cada relatório e documento gerado.
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#001F3E]/20 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="space-y-4">
                  <StatCard
                    label="Conformidade Legal"
                    value="100% Lei 14.133/21"
                    icon={Target}
                    variant="overlay"
                    className="p-5"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <StatCard
                      label="Integração"
                      value="PNCP"
                      variant="overlay"
                    />
                    <StatCard
                      label="Tempo Médio"
                      value="2 min"
                      variant="overlay"
                    />
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
