interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
}

function FloatingCard({ children, className = '', elevated = false }: FloatingCardProps) {
  return (
    <div
      className={`rounded-card border border-ice bg-white p-4 ${elevated ? 'shadow-float' : 'shadow-card'} ${className}`}
    >
      {children}
    </div>
  );
}

export default FloatingCard;
