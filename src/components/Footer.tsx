import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { APP_LOGIN_URL } from '../lib/config';

function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'funcionalidades', label: 'Funcionalidades' },
    { id: 'govia', label: 'GovIA' },
    { id: 'conformidade', label: 'Conformidade' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div className="space-y-5">
            <img
              src="/images/logo-govprecos.webp"
              alt="GovPreços"
              className="h-10 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-white/70">
              Software de compras públicas com GovIA integrada. Fase interna da contratação — da
              pesquisa de preços ao PCA — em conformidade com a Lei 14.133.
            </p>
            <a
              href="https://www.instagram.com/govprecos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white/10 p-2 transition-colors hover:bg-success"
              aria-label="Instagram GovPreços"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">Navegação</h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/70 transition-colors hover:text-success"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/em-pauta')}
                  className="text-sm text-white/70 transition-colors hover:text-success"
                >
                  Em pauta
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                contato@govprecos.com.br
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                (31) 9.7231-1839
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                Timóteo/MG
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">Plataforma</h3>
            <a
              href={APP_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-action px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
            >
              Acessar plataforma
            </a>
            <p className="mt-3 text-sm text-white/60">
              Login para servidores com acesso autorizado.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-white/50">© 2026 GovPreços. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-xs">
              <button
                type="button"
                onClick={() => navigate('/politica-privacidade')}
                className="text-white/50 transition-colors hover:text-success"
              >
                Política de privacidade
              </button>
              <button
                type="button"
                onClick={() => navigate('/termos-uso')}
                className="text-white/50 transition-colors hover:text-success"
              >
                Termos de uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
