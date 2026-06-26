import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#001F3E] text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <img
              src="https://i.ibb.co/67fCWKgD/Logo.webp"
              alt="GOVPREÇOS"
              className="h-12 brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Referência em inteligência de preços públicos, oferecendo soluções tecnológicas que transformam a gestão de contratações no setor público.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/govprecos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#00853c] rounded-full p-2 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-white/80 hover:text-[#00853c] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solucoes')}
                  className="text-white/80 hover:text-[#00853c] transition-colors"
                >
                  Soluções
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('metodologia')}
                  className="text-white/80 hover:text-[#00853c] transition-colors"
                >
                  Metodologia
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('conformidade')}
                  className="text-white/80 hover:text-[#00853c] transition-colors"
                >
                  Conformidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('impacto')}
                  className="text-white/80 hover:text-[#00853c] transition-colors"
                >
                  Impacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#00853c] mt-0.5" />
                <div>
                  <div className="text-white/80">contato@govprecos.com.br</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#00853c] mt-0.5" />
                <div>
                  <div className="text-white/80">(31) 9.7231-1839</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00853c] mt-0.5" />
                <div>
                  <div className="text-white/80">Timóteo/MG</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Acesso Rápido</h3>
            <a
              href="https://app.govprecos.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#00853c] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#006d30] transition-all duration-300 hover:shadow-lg mb-4"
            >
              Acessar Plataforma
            </a>
            <p className="text-white/80 text-sm">
              Faça login na plataforma GOVPREÇOS e acesse todas as funcionalidades.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2026 GOVPREÇOS. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => navigate('/politica-privacidade')}
                className="text-white/60 hover:text-[#00853c] transition-colors"
              >
                Política de Privacidade
              </button>
              <button
                onClick={() => navigate('/termos-uso')}
                className="text-white/60 hover:text-[#00853c] transition-colors"
              >
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
