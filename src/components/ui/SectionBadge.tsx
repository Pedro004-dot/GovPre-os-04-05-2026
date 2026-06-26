interface SectionBadgeProps {
  label: string;
  variant?: 'default' | 'success' | 'warning';
  className?: string;
}

function SectionBadge({ label, variant = 'default', className = "" }: SectionBadgeProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'success':
        return 'bg-[#E6F4EC] border-[#1E7A4D]/20';
      case 'warning':
        return 'bg-[#FBF1DD] border-[#B07A1E]/20';
      default:
        return 'bg-blue-50 border-[#001F3E]/10';
    }
  };

  const getDotColor = () => {
    switch (variant) {
      case 'success':
        return 'bg-[#1E7A4D]';
      case 'warning':
        return 'bg-[#B07A1E]';
      default:
        return 'bg-[#00853c]';
    }
  };

  return (
    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full shadow-sm border ${getVariantClasses()} ${className}`}>
      <div className={`w-2 h-2 ${getDotColor()} rounded-full animate-pulse`}></div>
      <span className="text-sm font-semibold text-[#001F3E]">{label}</span>
    </div>
  );
}

export default SectionBadge;