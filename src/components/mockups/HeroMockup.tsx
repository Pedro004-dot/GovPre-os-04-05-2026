import { Check, Plus, Sparkles } from 'lucide-react';
import FloatingCard from '../ui/FloatingCard';
import SourcePill from '../ui/SourcePill';
import StatusBadge from '../ui/StatusBadge';

const references = [
  {
    source: 'PNCP',
    variant: 'pncp' as const,
    org: 'Pref. Campinas — Pregão 042/24',
    price: 'R$ 2.847,00',
    matched: true,
    delay: 'stagger-2',
  },
  {
    source: 'Painel',
    variant: 'painel' as const,
    org: 'Painel de Preços — Média federal',
    price: 'R$ 2.920,00',
    matched: true,
    delay: 'stagger-3',
  },
  {
    source: 'Contrato',
    variant: 'contrato' as const,
    org: 'Contrato similar — SES/MG',
    price: 'R$ 3.150,00',
    matched: false,
    delay: 'stagger-4',
  },
];

function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Glow accent */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-success/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-action/10 blur-2xl" aria-hidden />

      <FloatingCard elevated className="relative overflow-hidden">
        {/* App chrome */}
        <div className="mb-4 flex items-center justify-between border-b border-ice pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-action">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-navy">GovIA</p>
              <p className="text-[10px] text-muted">Montando cesta de preços</p>
            </div>
          </div>
          <StatusBadge variant="action">Em andamento</StatusBadge>
        </div>

        {/* Search item */}
        <div className="animate-on-load mb-5 rounded-lg bg-surface p-3">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
            Item pesquisado
          </p>
          <p className="text-sm font-semibold text-navy">
            Notebook corporativo — 16 GB RAM, SSD 512 GB
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <SourcePill label="CATMAT 123456" variant="catmat" />
            <SourcePill label="Pregão eletrônico" variant="default" />
          </div>
        </div>

        {/* Reference cards */}
        <div className="space-y-2.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
            Referências encontradas
          </p>
          {references.map((ref, i) => (
            <div
              key={i}
              className={`animate-on-load ${ref.delay} flex items-center gap-3 rounded-lg border p-3 transition-colors ${
                ref.matched
                  ? 'border-success/40 bg-success/5'
                  : 'border-ice bg-white'
              }`}
            >
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-1.5">
                  <SourcePill label={ref.source} variant={ref.variant} />
                  {ref.matched && (
                    <StatusBadge variant="success" pulse>
                      <Check className="h-3 w-3" />
                      Match
                    </StatusBadge>
                  )}
                </div>
                <p className="truncate text-xs text-navy">{ref.org}</p>
                <p className="font-mono text-sm font-medium text-navy">{ref.price}</p>
              </div>
              <button
                type="button"
                aria-label={ref.matched ? 'Na cesta' : 'Adicionar à cesta'}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                  ref.matched
                    ? 'bg-success text-white'
                    : 'border-2 border-action bg-white text-action hover:bg-action hover:text-white'
                }`}
              >
                {ref.matched ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Basket summary */}
        <div className="animate-on-load stagger-5 mt-5 rounded-lg border-2 border-success/30 bg-success/5 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                Cesta de preços
              </p>
              <p className="font-mono text-xl font-semibold text-navy">R$ 2.883,50</p>
              <p className="text-xs text-muted">Preço estimado · 3 referências</p>
            </div>
            <div className="text-right">
              <StatusBadge variant="success" pulse>
                <Check className="h-3 w-3" />
                94% conformidade
              </StatusBadge>
              <p className="mt-2 font-mono text-[10px] text-muted">Art. 23 · Lei 14.133</p>
            </div>
          </div>
        </div>

        {/* Flow lines decoration */}
        <svg
          className="pointer-events-none absolute -left-6 top-1/3 hidden lg:block"
          width="24"
          height="80"
          viewBox="0 0 24 80"
          fill="none"
          aria-hidden
        >
          <path
            d="M24 0 C 8 20, 8 60, 0 80"
            stroke="#BBCADF"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
        </svg>
      </FloatingCard>

      {/* Outlier — margem superior direita, fora da cesta de preços */}
      <FloatingCard className="animate-on-load stagger-6 absolute -right-3 top-[48%] z-10 hidden w-36 -translate-y-1/2 border-amber-200/80 bg-white md:block lg:-right-6">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Outlier</p>
        <p className="text-xs text-navy line-through opacity-60">R$ 4.200,00</p>
        <StatusBadge variant="pending" className="mt-1">
          Excluído
        </StatusBadge>
      </FloatingCard>
    </div>
  );
}

export default HeroMockup;
