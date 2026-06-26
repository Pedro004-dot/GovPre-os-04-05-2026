import { useEffect, useState, useMemo } from 'react';
import { Newspaper } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  EmPautaHero, 
  EmPautaFiltros, 
  ArtigoCard, 
  ArtigoCardDestaque,
  SessaoPublicaBloco
} from '../components/em-pauta';
import { listarArtigos, type Artigo } from '../lib/artigos';

function EmPautaIndex() {
  const [artigos, setArtigos] = useState<Artigo[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Em Pauta — Análises sobre compras públicas | GOVPREÇOS';
    window.scrollTo(0, 0);
    listarArtigos()
      .then(setArtigos)
      .finally(() => setCarregando(false));
  }, []);

  // Filtro client-side
  const artigosFiltrados = useMemo(() => {
    return artigos.filter(artigo => {
      const matchBusca = !busca || 
        artigo.titulo.toLowerCase().includes(busca.toLowerCase()) ||
        (artigo.resumo && artigo.resumo.toLowerCase().includes(busca.toLowerCase()));
      
      const matchCategoria = !categoriaAtiva || artigo.categoria === categoriaAtiva;
      
      return matchBusca && matchCategoria;
    });
  }, [artigos, busca, categoriaAtiva]);

  // Layout adaptativo baseado no número de artigos filtrados
  const renderArtigos = () => {
    if (artigosFiltrados.length === 0) {
      return (
        <div className="max-w-xl mx-auto text-center py-16">
          <Newspaper className="w-12 h-12 text-[#8092AA]/40 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[#001F3E] mb-2">
            {busca || categoriaAtiva ? 'Nenhuma análise encontrada' : 'Em breve'}
          </h2>
          <p className="text-[#8092AA]">
            {busca || categoriaAtiva 
              ? 'Tente ajustar os filtros ou buscar por outros termos.'
              : 'As análises da newsletter Sessão Pública aparecem aqui assim que publicadas.'}
          </p>
        </div>
      );
    }

    if (artigosFiltrados.length === 1) {
      return (
        <div className="max-w-4xl mx-auto">
          <ArtigoCardDestaque artigo={artigosFiltrados[0]} />
        </div>
      );
    }

    if (artigosFiltrados.length === 2) {
      return (
        <div className="grid md:grid-cols-2 gap-8">
          {artigosFiltrados.map(artigo => (
            <ArtigoCard key={artigo.id} artigo={artigo} />
          ))}
        </div>
      );
    }

    // 3+ artigos: destaque no topo + grid com os demais
    const artDestaque = artigosFiltrados.find(a => a.destaque) || artigosFiltrados[0];
    const artRestantes = artigosFiltrados.filter(a => a.id !== artDestaque.id);

    return (
      <div className="space-y-12">
        <div className="max-w-4xl mx-auto">
          <ArtigoCardDestaque artigo={artDestaque} />
        </div>
        
        {artRestantes.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artRestantes.map(artigo => (
              <ArtigoCard key={artigo.id} artigo={artigo} />
            ))}
          </div>
        )}
      </div>
    );
  };

  // Skeleton para loading
  const renderSkeleton = () => (
    <div className="space-y-12">
      {/* Skeleton destaque */}
      <div className="max-w-4xl mx-auto h-80 rounded-2xl bg-gray-100 animate-pulse" />
      
      {/* Skeleton cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[0, 1].map(i => (
          <div key={i} className="h-72 rounded-2xl bg-gray-100 animate-pulse" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <EmPautaHero />
      
      <main className="flex-1 container mx-auto px-6 lg:px-12 py-16 -mt-10 relative z-10">
        {!carregando && (
          <EmPautaFiltros
            artigos={artigos}
            busca={busca}
            onBuscaChange={setBusca}
            categoriaAtiva={categoriaAtiva}
            onCategoriaChange={setCategoriaAtiva}
          />
        )}
        
        {carregando ? renderSkeleton() : renderArtigos()}
      </main>
      
      <SessaoPublicaBloco />
      <Footer />
    </div>
  );
}

export default EmPautaIndex;