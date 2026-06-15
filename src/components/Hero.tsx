import { ArrowRight, Shield, FileCheck, TrendingUp } from 'lucide-react';

function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#7fb3ff]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#00853c]/10 rounded-full blur-[120px]"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">

            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#007BFF] to-[#ABC5FF] bg-clip-text text-transparent leading-tight">
              Inteligência em Preços Públicos
            </h1>

            <p className="text-2xl text-gray-700 font-medium leading-relaxed">
              Pesquisa de preços públicos com rastreabilidade, transparência e conformidade normativa.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Transformamos dados brutos em decisões estratégicas com total conformidade com a Nova Lei de Licitações.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/5531999901464?text=Olá!%20Gostaria%20de%20solicitar%20uma%20demonstração%20da%20plataforma%20GOVPREÇOS."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00853c] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#006d30] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center space-x-2"
              >
                <span>Solicitar Demonstração</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5531999901464?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20GOVPREÇOS."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-[#00397b] text-[#00397b] px-8 py-4 rounded-2xl font-semibold hover:bg-[#00397b] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                Falar com Especialista
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="bg-blue-50 rounded-xl p-2">
                  <FileCheck className="w-6 h-6 text-[#00397b]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Conformidade</p>
                  <p className="font-bold text-[#00397b] text-lg">Art. 23</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="bg-blue-50 rounded-xl p-2">
                  <Shield className="w-6 h-6 text-[#00397b]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Garantia</p>
                  <p className="font-bold text-[#00397b] text-lg">Segurança Jurídica</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="bg-blue-50 rounded-xl p-2">
                  <TrendingUp className="w-6 h-6 text-[#00397b]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Gestão</p>
                  <p className="font-bold text-[#00397b] text-lg">Inteligente</p>
                </div>
              </div>
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
