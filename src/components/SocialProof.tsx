import { Building2, Scale, Shield, Sparkles } from 'lucide-react';
import StatusBadge from './ui/StatusBadge';

const trustItems = [
  { icon: Scale, label: 'Lei 14.133/2021', sub: 'Base normativa' },
  { icon: Shield, label: 'Jurisprudência TCU', sub: 'Embasamento jurídico' },
  { icon: Building2, label: 'Prefeituras parceiras', sub: 'Em operação' },
  { icon: Sparkles, label: 'GovIA integrada', sub: 'IA em todo o fluxo' },
];

function SocialProof() {
  return (
    <section className="border-y border-ice bg-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="shrink-0 text-sm font-semibold text-muted">
            Confiado por setores de compras públicas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-card border border-ice bg-surface px-4 py-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ice">
                    <Icon className="h-4 w-4 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{item.label}</p>
                    <p className="text-xs text-muted">{item.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <StatusBadge variant="success">Preço defensável</StatusBadge>
          <StatusBadge variant="neutral">Trilha de auditoria</StatusBadge>
          <StatusBadge variant="action">Art. 23 · Pesquisa de preços</StatusBadge>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
