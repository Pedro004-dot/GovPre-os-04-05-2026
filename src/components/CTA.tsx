import { ArrowRight, Mail } from 'lucide-react';

function CTA() {
  return (
    <section id="contato" className="py-12 md:py-24 bg-gradient-to-b from-[#007BFF] to-[#001F3E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="w-2 h-2 bg-[#00853c] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Vamos Começar</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Vamos Transformar sua Gestão Juntos
            </h2>

            <p className="text-xl text-white/90 leading-relaxed">
              Entre em contato com nossa equipe de especialistas e descubra como a GOVPREÇOS pode revolucionar seus processos de contratação pública.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://wa.me/5531999901464?text=Olá!%20Gostaria%20de%20solicitar%20uma%20demonstração%20da%20plataforma%20GOVPREÇOS."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00853c] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#006d30] transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
              >
                <span>Solicitar Demonstração</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5531999901464?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20equipe%20GOVPREÇOS."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#00397b] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Entrar em Contato</span>
              </a>
            </div>

            <div className="pt-8 grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">24h</div>
                <div className="text-white/80 text-sm">Resposta Rápida</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-white/80 text-sm">Online</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Parceria estratégica"
                className="w-full h-[600px] object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00397b]/60 via-transparent to-transparent rounded-3xl"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-white font-bold text-2xl mb-3">
                    Suporte Especializado
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Nossa equipe de especialistas está pronta para ajudar você a implementar as melhores práticas em pesquisa de preços públicos.
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

export default CTA;
