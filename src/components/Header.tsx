import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = location.pathname === '/';
  const isEmPauta = location.pathname.startsWith('/em-pauta') || location.pathname.startsWith('/artigo/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  // Classes dinâmicas baseadas no estado e rota
  const getHeaderClasses = () => {
    if (isEmPauta && !scrolled) {
      // Variante dark para Em Pauta no topo
      return 'bg-[#001F3E]/95 backdrop-blur-sm';
    }
    // Padrão light (home ou após scroll)
    return scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm';
  };

  const getLinkClasses = (isActive = false) => {
    if (isEmPauta && !scrolled) {
      // Links brancos no header dark
      if (isActive) return 'text-[#006AFF]';
      return 'text-white/80 hover:text-white transition-colors font-medium';
    }
    // Links navy no header light
    if (isActive) return 'text-[#006AFF]';
    return 'text-[#001F3E] hover:text-[#006AFF] transition-colors font-medium';
  };

  const getLogoClasses = () => {
    if (isEmPauta && !scrolled) {
      return 'h-9 md:h-12 brightness-0 invert';
    }
    return 'h-9 md:h-12';
  };

  const getMobileToggleClasses = () => {
    if (isEmPauta && !scrolled) {
      return 'md:hidden text-white/80 hover:text-white transition-colors p-2';
    }
    return 'md:hidden text-[#001F3E] hover:text-[#006AFF] transition-colors p-2';
  };

  const getMobileBorderClasses = () => {
    if (isEmPauta && !scrolled) {
      return 'md:hidden mt-4 pb-4 border-t border-white/20 pt-4';
    }
    return 'md:hidden mt-4 pb-4 border-t border-gray-100 pt-4';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClasses()}`}>
      
      <nav className="container mx-auto px-4 md:px-6 lg:px-12 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center"
            aria-label="Ir para o início"
          >
            <img
              src="/images/logo-govprecos.webp"
              alt="GOVPREÇOS"
              className={getLogoClasses()}
            />
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => goToSection('inicio')}
              className={getLinkClasses()}
            >
              Início
            </button>
            <button
              onClick={() => goToSection('solucoes')}
              className={getLinkClasses()}
            >
              Soluções
            </button>
            <button
              onClick={() => goToSection('metodologia')}
              className={getLinkClasses()}
            >
              Metodologia
            </button>
            <button
              onClick={() => goToSection('conformidade')}
              className={getLinkClasses()}
            >
              Conformidade
            </button>
            <button
              onClick={() => goToSection('impacto')}
              className={getLinkClasses()}
            >
              Impacto
            </button>
            <button
              onClick={() => goToSection('contato')}
              className={getLinkClasses()}
            >
              Contato
            </button>
            <button
              onClick={() => navigate('/em-pauta')}
              className={getLinkClasses(location.pathname.startsWith('/em-pauta'))}
            >
              Em Pauta
            </button>
          </div>

          

          <div className="flex items-center space-x-3">
            <a
              href="https://app.govprecos.com.br/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00853c] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-sm md:text-base font-semibold hover:bg-[#006d30] transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Login
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={getMobileToggleClasses()}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={getMobileBorderClasses()}>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => goToSection('inicio')}
                className={`${getLinkClasses()} text-left py-2`}
              >
                Início
              </button>
              <button
                onClick={() => goToSection('solucoes')}
                className={`${getLinkClasses()} text-left py-2`}
              >
                Soluções
              </button>
              <button
                onClick={() => goToSection('metodologia')}
                className={`${getLinkClasses()} text-left py-2`}
              >
                Metodologia
              </button>
              <button
                onClick={() => goToSection('conformidade')}
                className={`${getLinkClasses()} text-left py-2`}
              >
                Conformidade
              </button>
              <button
                onClick={() => goToSection('impacto')}
                className={`${getLinkClasses()} text-left py-2`}
              >
                Impacto
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/em-pauta');
                }}
                className={`${getLinkClasses(location.pathname.startsWith('/em-pauta'))} text-left py-2`}
              >
                Em Pauta
              </button>
              <button
                onClick={() => goToSection('contato')}
                className={`${getLinkClasses()} text-left py-2`}
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
