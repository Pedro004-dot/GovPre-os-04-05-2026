import { Scale, FileCheck, Shield } from 'lucide-react';

function Compliance() {
  const items = [
    {
      icon: Scale,
      title: 'Artigo 23',
      description:
        'Cumprimento integral do Art. 23 da Lei 14.133/21, que estabelece os requisitos para pesquisa de preços e formação do preço estimado nas contratações públicas.',
    },
    {
      icon: FileCheck,
      title: 'Estudo Técnico Preliminar e Termo de Referência',
      description:
        'Auxiliamos na elaboração de até 80% do ETP e Termo de Referência, com base nos modelos da AGU – Advocacia-Geral da União ou no padrão adotado pela sua instituição, permitindo personalização completa conforme as necessidades técnicas e normativas do órgão.',
    },
    {
      icon: Shield,
      title: 'Preço Estimado e Preço Máximo',
      description:
        'Cálculos precisos e metodologia transparente para definição do preço estimado e máximo aceitável, com total respaldo jurídico e estatístico.',
    },
  ];

  return (
    <section id="conformidade" className="py-12 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <Shield className="w-4 h-4 text-[#00853c]" />
            <span className="text-sm font-semibold text-[#00397b]">Conformidade Legal</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00397b] mb-6">
            Totalmente Alinhado à Nova Lei de Licitações
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nossa solução está em total conformidade com a Lei 14.133/21, garantindo segurança jurídica em todas as fases do processo de contratação pública.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Conformidade legal e análise jurídica"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00397b] via-[#00397b]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-[#00853c] rounded-full p-3">
                      <Scale className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm mb-1">Lei Federal</p>
                      <p className="text-white text-2xl md:text-3xl font-bold">14.133/2021</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    Nova Lei de Licitações e Contratos Administrativos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#00853c]/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-br from-[#00397b] to-[#00853c] rounded-xl p-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
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
        </div>

        <div className="bg-gradient-to-br from-[#00397b] to-[#00853c] rounded-3xl p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-white/90">Conformidade Legal</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">Zero</div>
              <div className="text-white/90">Riscos Jurídicos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Compliance;
