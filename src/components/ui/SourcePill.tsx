type SourceVariant = 'pncp' | 'painel' | 'nota' | 'contrato' | 'catmat' | 'default';

interface SourcePillProps {
  label: string;
  variant?: SourceVariant;
  className?: string;
}

const variantClasses: Record<SourceVariant, string> = {
  pncp: 'bg-action/10 text-action',
  painel: 'bg-navy/10 text-navy',
  nota: 'bg-purple-50 text-purple-800',
  contrato: 'bg-ice text-navy',
  catmat: 'bg-success/15 text-navy',
  default: 'bg-ice text-muted',
};

function SourcePill({ label, variant = 'default', className = '' }: SourcePillProps) {
  return (
    <span
      className={`inline-block rounded-md px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {label}
    </span>
  );
}

export default SourcePill;
