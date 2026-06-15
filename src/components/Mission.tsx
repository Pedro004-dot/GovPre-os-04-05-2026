import { Sparkles, Shield, TrendingUp } from 'lucide-react';

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
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-[#00853c] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#00397b]">Nossa Missão</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#00397b] leading-tight">
                Eficiência na Gestão Pública
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Acreditamos que a tecnologia e a inteligência de dados são fundamentais para transformar a gestão pública, tornando-a mais ágil, transparente e eficaz.
              </p>
            </div>

            <div className="space-y-6">
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 border border-gray-100 hover:border-[#00853c]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-[#007BFF] to-[#ABC5FF] rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#00397b] mb-2">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe analisando dados"
                className="w-full h-full object-cover md:aspect-auto aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00397b]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <h4 className="text-white font-bold text-xl mb-2">
                    Transformação Digital
                  </h4>
                  <p className="text-white/90 text-sm">
                    Liderando a modernização da gestão pública através da inteligência de dados e tecnologia avançada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
