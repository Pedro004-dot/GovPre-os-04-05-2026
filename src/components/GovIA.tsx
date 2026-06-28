import { Sparkles, Zap, CheckCircle, Clock, Lightbulb, Users } from 'lucide-react';

function GovIA() {
  const benefits = [
    {
      icon: Zap,
      title: 'Sugere textos automáticos',
      description: 'Geração inteligente de conteúdo para seus documentos'
    },
    {
      icon: CheckCircle,
      title: 'Ajuda com justificativas técnicas',
      description: 'Fundamentação robusta e alinhada à legislação'
    },
    {
      icon: Lightbulb,
      title: 'Reduz erros',
      description: 'Verificação automática e validação de conformidade'
    },
    {
      icon: Clock,
      title: 'Acelera processos',
      description: 'Economize semanas de trabalho manual'
    },
    {
      icon: Users,
      title: 'Orienta servidores',
      description: 'Assistência inteligente para toda sua equipe'
    },
  ];

  return (
    <section id="govia" className="py-12 md:py-24 bg-gradient-to-b from-[#007BFF] to-[#001F3E] relative overflow-hidden">
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-white/10 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#00853c]/20 rounded-full blur-[120px] opacity-40"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#00d46a]" />
            <span className="text-sm font-semibold text-white">Inteligência Artificial</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Conheça a GovIA
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            A inteligência artificial especializada em compras públicas que auxilia sua equipe na elaboração de documentos e tomada de decisões.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:shadow-2xl hover:bg-white/15"
              >
                <div className="bg-gradient-to-br from-[#00d46a] to-[#00853c] rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-base">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5531972311839?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20GovIA."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-[#00397b] px-8 py-4 rounded-xl font-semibold hover:bg-[#00d46a] transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            <span>Explorar GovIA</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default GovIA;
