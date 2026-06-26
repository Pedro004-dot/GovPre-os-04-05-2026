import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowRight, Scale } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArtigoMetadata } from '../components/em-pauta';
import { obterArtigoPorSlug, type Artigo as ArtigoTipo } from '../lib/artigos';
import { APP_LOGIN_URL } from '../lib/config';

function Artigo() {
  const { slug } = useParams<{ slug: string }>();
  const [artigo, setArtigo] = useState<ArtigoTipo | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCarregando(true);
    obterArtigoPorSlug(slug ?? '')
      .then((a) => {
        setArtigo(a);
        if (a) document.title = `${a.titulo} | Em Pauta — GOVPREÇOS`;
      })
      .finally(() => setCarregando(false));
  }, [slug]);

  if (carregando) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 container mx-auto px-6 lg:px-12 py-24 pt-28 max-w-3xl">
          <div className="h-10 w-3/4 rounded bg-gray-100 animate-pulse mb-6" />
          <div className="space-y-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 rounded bg-gray-100 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!artigo) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 container mx-auto px-6 lg:px-12 py-24 pt-28 max-w-xl text-center">
          <h1 className="text-3xl font-bold text-[#001F3E] mb-4">Análise não encontrada</h1>
          <p className="text-[#8092AA] mb-8">
            O artigo que procura pode ter sido movido ou ainda não foi publicado.
          </p>
          <Link
            to="/em-pauta"
            className="inline-flex items-center space-x-2 bg-[#006AFF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#007BFF] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Ver todas as análises</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      {/* Cabeçalho do artigo */}
      <header className="bg-gradient-to-b from-[#007BFF] to-[#001F3E] text-white pt-24 md:pt-28">
        <div className="container mx-auto px-6 lg:px-12 py-12 max-w-3xl">
          <Link
            to="/em-pauta"
            className="inline-flex items-center space-x-2 mb-8 text-white/80 hover:text-white transition-all duration-300 bg-white/10 hover:bg-white/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Em Pauta</span>
          </Link>

          <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
            {artigo.categoria && (
              <span className="font-semibold tracking-wide uppercase text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                {artigo.categoria}
              </span>
            )}
            {artigo.edicao && (
              <span className="text-white/70 font-mono bg-white/10 px-3 py-1 rounded-full">
                Edição #{String(artigo.edicao).padStart(2, '0')}
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl lg:text-5xl font-semibold leading-tight mb-5">
            {artigo.titulo}
          </h1>
          {artigo.linha_fina && (
            <p className="text-xl text-white/80 leading-relaxed mb-8">{artigo.linha_fina}</p>
          )}

          <ArtigoMetadata
            autor={artigo.autor_nome}
            tempoLeitura={artigo.tempo_leitura}
            publicadoEm={artigo.publicado_em}
            className="text-white/70"
            size="base"
          />
        </div>
      </header>

      {/* Corpo do artigo */}
      <main className="flex-1 container mx-auto px-6 lg:px-12 py-14 max-w-3xl">
        {artigo.capa_url && (
          <div className="w-full rounded-2xl mb-12 overflow-hidden bg-gray-100">
            <img
              src={artigo.capa_url}
              alt={`Capa do artigo: ${artigo.titulo}`}
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </div>
        )}

        <article className="artigo-corpo">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{artigo.corpo}</ReactMarkdown>
        </article>

        {/* Base legal citada */}
        {artigo.citacoes_legais && artigo.citacoes_legais.length > 0 && (
          <aside className="mt-12 rounded-2xl border border-[#ABC5FF]/30 bg-[#ABC5FF]/10 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="w-5 h-5 text-[#006AFF]" />
              <h2 className="font-semibold text-[#001F3E]">Base legal citada</h2>
            </div>
            <ul className="space-y-2">
              {artigo.citacoes_legais.map((c) => (
                <li key={c} className="font-mono text-sm text-[#001F3E]/80">
                  {c}
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Assinatura do autor */}
        <div className="mt-12 flex items-start gap-4 border-t border-gray-100 pt-8">
          {artigo.autor_foto_url ? (
            <div 
              className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${artigo.autor_foto_url})`
              }}
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#007BFF] to-[#001F3E] flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
              {artigo.autor_nome.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-bold text-[#001F3E]">{artigo.autor_nome}</p>
            {artigo.autor_cargo && <p className="text-sm text-[#8092AA]">{artigo.autor_cargo}</p>}
            {artigo.autor_bio && (
              <p className="text-sm text-[#8092AA] mt-2 leading-relaxed">{artigo.autor_bio}</p>
            )}
          </div>
        </div>

        {/* CTA: fecha o funil leitor → produto */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-[#007BFF] to-[#ABC5FF] p-8 md:p-10 text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Monte uma cesta de preços defensável em minutos
          </h2>
          <p className="text-white/90 leading-relaxed mb-8 max-w-2xl text-lg">
            É exatamente esse trabalho — da coleta nas fontes oficiais ao tratamento estatístico
            dos outliers — que o GovPreços automatiza, com rastreabilidade pronta para o controle.
          </p>
          <a
            href={APP_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-[#006AFF] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span>Conhecer o GovPreços</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Artigo;
