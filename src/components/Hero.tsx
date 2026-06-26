import { ArrowRight } from 'lucide-react';
import { WHATSAPP_DEMO_URL } from '../lib/config';

// Função utilitária para scroll suave
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#7fb3ff]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#00853c]/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Elemento 1: Título (mantido) */}
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#007BFF] to-[#ABC5FF] bg-clip-text text-transparent leading-tight">
              Inteligência em Preços Públicos
            </h1>

            {/* Elemento 2: Parágrafo unificado */}
            <p className="text-xl text-[#8092AA] font-medium leading-relaxed">
              Pesquisa de preços públicos com rastreabilidade, transparência e conformidade com a Nova Lei de Licitações. Transformamos dados brutos em decisões estratégicas em minutos.
            </p>

            {/* Elemento 3: CTAs diferenciadas */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#006AFF] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#007BFF] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2"
              >
                <span>Solicitar Demonstração</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={() => scrollToSection('solucoes')}
                className="bg-white border-2 border-[#001F3E] text-[#001F3E] px-8 py-4 rounded-2xl font-semibold hover:bg-[#001F3E] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                Ver Como Funciona
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/images/embaixadores.webp"
                alt="Embaixadores GovPreços"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
