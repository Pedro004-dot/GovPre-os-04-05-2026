import { ArrowRight } from 'lucide-react';
import { APP_LOGIN_URL, WHATSAPP_DEMO_URL } from '../lib/config';


function CTA() {
  return (
    <section id="contato" className="bg-navy py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
         

          <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Devolva o tempo humano ao setor de compras
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg  text-balance leading-relaxed text-white/70">
            Menos semanas formatando documentos e caçando preços em planilhas.
            <br /> Mais decisão,  julgamento e governança — com a GovIA fazendo o trabalho operacional em conformidade.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-action px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
            >
              Solicitar demonstração
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={APP_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Acessar plataforma
            </a>
          </div>

          <p className="mt-8 font-mono text-sm text-white/50">
            Resposta em até 24h · Demonstração personalizada · 100% online
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTA;
