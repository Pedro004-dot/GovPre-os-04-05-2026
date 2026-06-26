import { Link } from 'react-router-dom';
import { ArtigoCapaPlaceholder } from './ArtigoCapaPlaceholder';
import { ArtigoMetadata } from './ArtigoMetadata';
import type { Artigo } from '../../lib/artigos';

interface ArtigoCardProps {
  artigo: Artigo;
}

export function ArtigoCard({ artigo }: ArtigoCardProps) {
  return (
    <Link
      to={`/em-pauta/${artigo.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-[#006AFF]/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
    >
      {artigo.capa_url ? (
        <div className="h-44 overflow-hidden">
          <img
            src={artigo.capa_url}
            alt={`Capa do artigo: ${artigo.titulo}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <ArtigoCapaPlaceholder categoria={artigo.categoria} className="h-44" />
      )}
      
      <div className="p-6 flex flex-col flex-1">
        {artigo.categoria && (
          <span className="text-xs font-semibold tracking-wide uppercase text-[#006AFF] mb-3">
            {artigo.categoria}
          </span>
        )}
        
        <h3 className="font-serif-editorial text-xl font-semibold text-[#001F3E] leading-snug mb-3 group-hover:text-[#006AFF] transition-colors line-clamp-3">
          {artigo.titulo}
        </h3>
        
        {artigo.resumo && (
          <p className="text-[#001F3E]/70 text-sm leading-relaxed mb-5 line-clamp-3">
            {artigo.resumo}
          </p>
        )}
        
        <div className="mt-auto">
          <ArtigoMetadata
            autor={artigo.autor_nome}
            tempoLeitura={artigo.tempo_leitura}
            publicadoEm={artigo.publicado_em}
          />
        </div>
      </div>
    </Link>
  );
}