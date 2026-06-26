// Acervo editorial "Em Pauta" — lido do backend (rotas públicas), nunca do banco direto.
import { API_BASE_URL } from './config';

const ENDPOINT = `${API_BASE_URL}/api/public/artigos`;

// Shape consumido pelos componentes (mantido em snake_case por compatibilidade).
export interface Artigo {
  id: string;
  slug: string;
  titulo: string;
  linha_fina: string | null;
  categoria: string | null;
  autor_nome: string;
  autor_cargo: string | null;
  autor_bio: string | null;
  autor_foto_url: string | null;
  edicao: number | null;
  tempo_leitura: number | null;
  resumo: string | null;
  corpo: string;
  capa_url: string | null;
  citacoes_legais: string[] | null;
  destaque: boolean;
  publicado_em: string | null;
}

// O backend devolve camelCase; normalizamos para o shape acima.
function mapear(a: any): Artigo {
  return {
    id: a.id,
    slug: a.slug,
    titulo: a.titulo,
    linha_fina: a.linhaFina ?? null,
    categoria: a.categoria ?? null,
    autor_nome: a.autorNome,
    autor_cargo: a.autorCargo ?? null,
    autor_bio: a.autorBio ?? null,
    autor_foto_url: a.autorFotoUrl ?? null,
    edicao: a.edicao ?? null,
    tempo_leitura: a.tempoLeitura ?? null,
    resumo: a.resumo ?? null,
    corpo: a.corpo ?? '',
    capa_url: a.capaUrl ?? null,
    citacoes_legais: a.citacoesLegais ?? [],
    destaque: a.destaque ?? false,
    publicado_em: a.publicadoEm ?? null,
  };
}

// Lista todos os artigos publicados (mais recentes primeiro).
export async function listarArtigos(): Promise<Artigo[]> {
  try {
    const resp = await fetch(ENDPOINT, { headers: { Accept: 'application/json' } });
    if (!resp.ok) return [];
    const json = await resp.json();
    return (json.artigos ?? []).map(mapear);
  } catch (erro) {
    console.error('[GovPreços] Erro ao listar artigos:', erro);
    return [];
  }
}

// Busca um artigo publicado pelo slug. Retorna null se não existir.
export async function obterArtigoPorSlug(slug: string): Promise<Artigo | null> {
  try {
    const resp = await fetch(`${ENDPOINT}/${encodeURIComponent(slug)}`, {
      headers: { Accept: 'application/json' },
    });
    if (!resp.ok) return null;
    const json = await resp.json();
    return json.artigo ? mapear(json.artigo) : null;
  } catch (erro) {
    console.error('[GovPreços] Erro ao obter artigo:', erro);
    return null;
  }
}

// Formata a data de publicação no padrão pt-BR (ex: "22 de junho de 2026").
export function formatarData(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
