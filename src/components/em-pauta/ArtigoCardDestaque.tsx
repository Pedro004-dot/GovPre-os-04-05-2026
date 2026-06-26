import { Link } from 'react-router-dom';
import { ArtigoCapaPlaceholder } from './ArtigoCapaPlaceholder';
import { ArtigoMetadata } from './ArtigoMetadata';
import type { Artigo } from '../../lib/artigos';

interface ArtigoCardDestaqueProps {
  artigo: Artigo;
}

export function ArtigoCardDestaque({ artigo }: ArtigoCardDestaqueProps) {
  return (
    <Link
      to={`/em-pauta/${artigo.slug}`}
      className="group flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-[#006AFF]/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="lg:w-2/5 h-64 lg:h-auto overflow-hidden">
        {artigo.capa_url ? (
          <img
            src={artigo.capa_url}
            alt={`Capa do artigo: ${artigo.titulo}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <ArtigoCapaPlaceholder categoria={artigo.categoria} className="w-full h-full" />
        )}
      </div>
      
      <div className="lg:w-3/5 p-8 flex flex-col justify-center">
        {artigo.categoria && (
          <span className="text-xs font-semibold tracking-wide uppercase text-[#006AFF] mb-3">
            {artigo.categoria}
          </span>
        )}
        
        <h3 className="font-serif-editorial text-2xl lg:text-3xl font-semibold text-[#001F3E] leading-snug mb-4 group-hover:text-[#006AFF] transition-colors">
          {artigo.titulo}
        </h3>
        
        {artigo.linha_fina && (
          <p className="text-[#001F3E]/70 leading-relaxed mb-6 line-clamp-3">
            {artigo.linha_fina}
          </p>
        )}
        
        <ArtigoMetadata
          autor={artigo.autor_nome}
          tempoLeitura={artigo.tempo_leitura}
          publicadoEm={artigo.publicado_em}
          size="base"
        />
      </div>
    </Link>
  );
}