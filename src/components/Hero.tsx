import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_DEMO_URL } from '../lib/config';
import { AMBASSADORS_GROUP_IMAGE, HeroAmbassadorEndorsement } from './HeroAmbassadors';

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function Hero() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="inicio" className="relative overflow-hidden bg-white pt-28 pb-16 md:pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
           

            <h1 className="animate-on-load stagger-1 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
            Simplifique o planejamento de contratações.{' '}<br />
              <span className="text-action"> Ganhe semanas de trabalho.</span> <br /> 
            </h1>
          
           
            <p className="animate-on-load stagger-2 max-w-xl text-lg leading-relaxed text-muted">
              Software de compras públicas para a fase interna da contratação — pesquisa de preços,
              documentos de planejamento, PCA e relatórios. Cada etapa pode ser conduzida pela IA,
              com respaldo na Lei 14.133 e jurisprudência do TCU.
            </p>

            <div className="animate-on-load stagger-3 flex flex-wrap gap-3 pt-2">
              <a
                href={WHATSAPP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-action px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-action-hover"
              >
                Solicitar demonstração
                <ArrowRight className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => scrollToSection('funcionalidades')}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-navy bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Ver funcionalidades
              </button>
            </div>

            <HeroAmbassadorEndorsement className="animate-on-load stagger-4 border-t border-ice pt-5" />

            <div className="animate-on-load stagger-5 flex flex-wrap gap-6 pt-2">
              {/* <div>
                <p className="font-mono text-2xl font-semibold text-navy">4</p>
                <p className="text-sm text-muted">módulos integrados</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-semibold text-success">100%</p>
                <p className="text-sm text-muted">Lei 14.133</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-semibold text-navy">PNCP</p>
                <p className="text-sm text-muted">integração nativa</p>
              </div> */}
            </div>
          </div>

          <div className="animate-on-load stagger-2 flex justify-center lg:justify-end lg:pl-4">
            {!imageFailed ? (
              <img
                src={AMBASSADORS_GROUP_IMAGE}
                alt="Felipe Dalenogare e Leandro Matsumota, embaixadores GovPreços"
                className="w-full max-w-md rounded-xl object-contain lg:max-w-lg"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div
                className="flex h-64 w-full max-w-md items-center justify-center rounded-xl bg-ice text-sm text-muted lg:max-w-lg"
                role="img"
                aria-label="Felipe Dalenogare e Leandro Matsumota, embaixadores GovPreços"
              >
                Embaixadores GovPreços
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
