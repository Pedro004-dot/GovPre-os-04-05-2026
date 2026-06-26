import { Search, X } from 'lucide-react';
import { useMemo } from 'react';
import type { Artigo } from '../../lib/artigos';

interface EmPautaFiltrosProps {
  artigos: Artigo[];
  busca: string;
  onBuscaChange: (busca: string) => void;
  categoriaAtiva: string | null;
  onCategoriaChange: (categoria: string | null) => void;
}

export function EmPautaFiltros({
  artigos,
  busca,
  onBuscaChange,
  categoriaAtiva,
  onCategoriaChange
}: EmPautaFiltrosProps) {
  const categorias = useMemo(() => {
    const cats = new Set<string>();
    artigos.forEach(artigo => {
      if (artigo.categoria) cats.add(artigo.categoria);
    });
    return Array.from(cats).sort();
  }, [artigos]);

  if (artigos.length === 0) return null;

  return (
    <div className="space-y-6 mb-12">
      {/* Busca */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8092AA] w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar análises..."
          value={busca}
          onChange={(e) => onBuscaChange(e.target.value)}
          className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#006AFF]/20 focus:border-[#006AFF] transition-colors"
        />
        {busca && (
          <button
            onClick={() => onBuscaChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#8092AA] hover:text-[#006AFF] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {/* Filtros por categoria */}
      {categorias.length > 0 && (
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onCategoriaChange(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              categoriaAtiva === null
                ? 'bg-[#006AFF] text-white shadow-md'
                : 'bg-gray-100 text-[#001F3E] hover:bg-[#ABC5FF]/20 hover:text-[#006AFF]'
            }`}
          >
            Todas
          </button>
          
          {categorias.map(categoria => (
            <button
              key={categoria}
              onClick={() => onCategoriaChange(categoria)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                categoriaAtiva === categoria
                  ? 'bg-[#006AFF] text-white shadow-md'
                  : 'bg-gray-100 text-[#001F3E] hover:bg-[#ABC5FF]/20 hover:text-[#006AFF]'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}