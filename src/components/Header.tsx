import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 lg:px-12 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/logo-govprecos.webp"
              alt="GOVPREÇOS"
              className="h-9 md:h-12"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('solucoes')}
              className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection('metodologia')}
              className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium"
            >
              Metodologia
            </button>
            <button
              onClick={() => scrollToSection('conformidade')}
              className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium"
            >
              Conformidade
            </button>
            <button
              onClick={() => scrollToSection('impacto')}
              className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium"
            >
              Impacto
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium"
            >
              Contato
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
              className="md:hidden text-gray-700 hover:text-[#007BFF] transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium text-left py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('solucoes')}
                className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium text-left py-2"
              >
                Soluções
              </button>
              <button
                onClick={() => scrollToSection('metodologia')}
                className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium text-left py-2"
              >
                Metodologia
              </button>
              <button
                onClick={() => scrollToSection('conformidade')}
                className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium text-left py-2"
              >
                Conformidade
              </button>
              <button
                onClick={() => scrollToSection('impacto')}
                className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium text-left py-2"
              >
                Impacto
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-[#007BFF] transition-colors font-medium text-left py-2"
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
