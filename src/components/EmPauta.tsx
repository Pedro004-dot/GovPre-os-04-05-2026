import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, ArrowRight } from 'lucide-react';
import { ArtigoCapaPlaceholder, ArtigoMetadata } from './em-pauta';
import { listarArtigos, type Artigo } from '../lib/artigos';

function EmPauta() {
  const [artigos, setArtigos] = useState<Artigo[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    listarArtigos()
      .then(setArtigos)
      .finally(() => setCarregando(false));
  }, []);

  // Sem conteúdo publicado: não renderiza a seção na home.
  if (!carregando && artigos.length === 0) return null;

  const destaque = artigos.find((a) => a.destaque) ?? artigos[0];
  const recentes = artigos.filter((a) => a.id !== destaque?.id).slice(0, 3);

  return (
    <section id="em-pauta" className="py-12 md:py-24 bg-gradient-to-b from-[#ABC5FF]/15 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-[#ABC5FF]/20 px-4 py-2 rounded-full mb-6">
              <Newspaper className="w-4 h-4 text-[#006AFF]" />
              <span className="text-sm font-semibold text-[#001F3E]">Em Pauta</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#001F3E] mb-4">
              O que move as compras públicas, analisado a fundo
            </h2>
            <p className="text-lg text-[#001F3E]/70 leading-relaxed">
              Análises de especialistas sobre a Lei 14.133, jurisprudência do TCU e a prática
              das contratações públicas — direto da newsletter Sessão Pública.
            </p>
          </div>
          <Link
            to="/em-pauta"
            className="inline-flex items-center space-x-2 text-[#006AFF] font-semibold hover:text-[#007BFF] transition-colors whitespace-nowrap"
          >
            <span>Ver todas as análises</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {carregando ? (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="h-80 rounded-2xl bg-gray-100 animate-pulse" />
            <div className="space-y-4">
              <div className="h-24 rounded-xl bg-gray-100 animate-pulse" />
              <div className="h-24 rounded-xl bg-gray-100 animate-pulse" />
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {destaque && (
              <Link
                to={`/em-pauta/${destaque.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white hover:border-[#006AFF]/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  {destaque.capa_url ? (
                    <img
                      src={destaque.capa_url}
                      alt={`Capa do artigo: ${destaque.titulo}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <ArtigoCapaPlaceholder categoria={destaque.categoria} className="w-full h-full" />
                  )}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  {destaque.categoria && (
                    <span className="text-xs font-semibold tracking-wide uppercase text-[#006AFF] mb-3">
                      {destaque.categoria}
                    </span>
                  )}
                  <h3 className="font-serif-editorial text-2xl lg:text-3xl font-semibold text-[#001F3E] leading-snug mb-3 group-hover:text-[#006AFF] transition-colors">
                    {destaque.titulo}
                  </h3>
                  {destaque.linha_fina && (
                    <p className="text-[#001F3E]/70 leading-relaxed mb-6 line-clamp-3">
                      {destaque.linha_fina}
                    </p>
                  )}
                  <div className="mt-auto">
                    <ArtigoMetadata
                      autor={destaque.autor_nome}
                      tempoLeitura={destaque.tempo_leitura}
                      publicadoEm={destaque.publicado_em}
                    />
                  </div>
                </div>
              </Link>
            )}

            <div className="flex flex-col divide-y divide-gray-100">
              {recentes.map((a) => (
                <Link
                  key={a.id}
                  to={`/em-pauta/${a.slug}`}
                  className="group flex-1 flex flex-col justify-center py-5 first:pt-0 hover:bg-gray-50/50 px-4 -mx-4 rounded-xl transition-colors"
                >
                  {a.categoria && (
                    <span className="text-xs font-semibold tracking-wide uppercase text-[#006AFF] mb-2">
                      {a.categoria}
                    </span>
                  )}
                  <h4 className="font-serif-editorial text-xl font-semibold text-[#001F3E] leading-snug mb-2 group-hover:text-[#006AFF] transition-colors line-clamp-2">
                    {a.titulo}
                  </h4>
                  <ArtigoMetadata
                    autor={a.autor_nome}
                    tempoLeitura={a.tempo_leitura}
                    publicadoEm={a.publicado_em}
                  />
                </Link>
              ))}

              {recentes.length === 0 && (
                <p className="text-[#8092AA] py-5">
                  Mais análises chegam toda semana com a newsletter Sessão Pública.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default EmPauta;