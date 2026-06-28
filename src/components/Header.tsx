import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { APP_LOGIN_URL } from '../lib/config';

const navItems = [
  { id: 'funcionalidades', label: 'Funcionalidades' },
  { id: 'govia', label: 'GovIA' },
  { id: 'conformidade', label: 'Conformidade' },
  { id: 'contato', label: 'Contato' },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = location.pathname === '/';
  const isEmPauta =
    location.pathname.startsWith('/em-pauta') || location.pathname.startsWith('/artigo/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  const isDarkHeader = isEmPauta && !scrolled;

  const headerBg = isDarkHeader
    ? 'bg-navy/95 backdrop-blur-sm'
    : scrolled
      ? 'bg-white shadow-sm'
      : 'bg-white/90 backdrop-blur-sm';

  const linkClass = (active = false) => {
    if (isDarkHeader) {
      return active
        ? 'text-action font-medium'
        : 'font-medium text-white/80 transition-colors hover:text-white';
    }
    return active
      ? 'font-medium text-action'
      : 'font-medium text-navy transition-colors hover:text-action';
  };

  const logoClass = isDarkHeader ? 'h-9 md:h-11 brightness-0 invert' : 'h-9 md:h-11';
  const toggleClass = isDarkHeader
    ? 'p-2 text-white/80 transition-colors hover:text-white md:hidden'
    : 'p-2 text-navy transition-colors hover:text-action md:hidden';
  const mobileBorder = isDarkHeader
    ? 'mt-4 border-t border-white/20 pb-4 pt-4 md:hidden'
    : 'mt-4 border-t border-ice pb-4 pt-4 md:hidden';

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className="container mx-auto px-4 py-3 md:px-6 md:py-4 lg:px-12">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex items-center"
            aria-label="Ir para o início"
          >
            <img src="/images/logo-govprecos.webp" alt="GovPreços" className={logoClass} />
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goToSection(item.id)}
                className={linkClass()}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => navigate('/em-pauta')}
              className={linkClass(location.pathname.startsWith('/em-pauta'))}
            >
              Em pauta
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={APP_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-action px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-action-hover md:px-5 md:py-2.5 md:text-base"
            >
              Entrar
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={toggleClass}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={mobileBorder}>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => goToSection('inicio')}
                className={`${linkClass()} py-2 text-left`}
              >
                Início
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className={`${linkClass()} py-2 text-left`}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/em-pauta');
                }}
                className={`${linkClass(location.pathname.startsWith('/em-pauta'))} py-2 text-left`}
              >
                Em pauta
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
