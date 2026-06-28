type StatusVariant = 'success' | 'action' | 'pending' | 'neutral' | 'risk-medium' | 'risk-high';

interface StatusBadgeProps {
  children: React.ReactNode;
  variant?: StatusVariant;
  className?: string;
  pulse?: boolean;
}

const variantClasses: Record<StatusVariant, string> = {
  success: 'bg-success/15 text-navy border-success/30',
  action: 'bg-action/10 text-action border-action/20',
  pending: 'bg-amber-50 text-amber-800 border-amber-200',
  neutral: 'bg-ice text-navy border-border',
  'risk-medium': 'bg-[#FFB020]/15 text-[#8A5E12] border-[#FFB020]/40',
  'risk-high': 'bg-[#FF6B4A]/15 text-[#9B2F2F] border-[#FF6B4A]/40',
};

function StatusBadge({
  children,
  variant = 'neutral',
  className = '',
  pulse = false,
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${variantClasses[variant]} ${pulse ? 'animate-match-pulse' : ''} ${className}`}
    >
      {children}
    </span>
  );
}

export default StatusBadge;
