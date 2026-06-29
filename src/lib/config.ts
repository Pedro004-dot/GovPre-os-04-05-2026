// Configurações centralizadas da landing page

// URL do backend para artigos (público)
export const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3001').replace(/\/$/, '');

// URL da newsletter Sessão Pública (link externo)
// Se vazio, CTAs de newsletter ficam ocultos
export const NEWSLETTER_URL = import.meta.env.VITE_NEWSLETTER_URL || '';

// URLs externas
export const APP_LOGIN_URL = 'https://app.govprecos.com.br/login';
export const LOGO_URL = '/images/logo-govprecos.svg';
export const LOGO_URL_LIGHT = '/images/logo-govprecos-branco.svg';

export const WHATSAPP_DEMO_URL = 'https://wa.me/5531972311839?text=Olá!%20Gostaria%20de%20solicitar%20uma%20demonstração%20da%20plataforma%20GOVPREÇOS.';
export const WHATSAPP_CONTACT_URL = 'https://wa.me/5531972311839?text=Olá!%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20equipe%20GOVPREÇOS.';
export const WHATSAPP_SOLUTIONS_URL = 'https://wa.me/5531972311839?text=Olá!%20Gostaria%20de%20conhecer%20as%20soluções%20GOVPREÇOS.';

// Comportamento de scroll
export const SCROLL_BEHAVIOR: ScrollBehavior = 'smooth';