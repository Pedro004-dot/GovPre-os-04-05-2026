import { Newspaper, ExternalLink } from 'lucide-react';
import { NEWSLETTER_URL } from '../../lib/config';

export function EmPautaHero() {
  return (
    <div className="bg-gradient-to-b from-[#007BFF] to-[#001F3E] text-white py-16 pb-20 pt-24 md:pt-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Newspaper className="w-4 h-4 text-[#006AFF]" />
            <span className="text-sm font-semibold">Em Pauta</span>
          </div>
          
          <h1 className="font-serif-editorial text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-6">
            Análises sobre compras públicas
          </h1>
          
          <p className="text-white/85 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            O acervo das colunas da newsletter Sessão Pública: especialistas destrinchando a
            Lei 14.133, a jurisprudência do TCU e a prática das contratações públicas.
          </p>
          
          {NEWSLETTER_URL && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={NEWSLETTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-[#001F3E] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <span>Assinar Sessão Pública</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <p className="text-white/70 text-sm">
                Newsletter semanal · Gratuita · Sem spam
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}