import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'default' | 'highlight';
  className?: string;
}

function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  variant = 'default',
  className = "" 
}: FeatureCardProps) {
  const getCardClasses = () => {
    if (variant === 'highlight') {
      return 'group bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-6 border border-gray-100 hover:border-[#00853c]/30 hover:shadow-xl transition-all duration-300';
    }
    
    return 'group bg-white rounded-3xl p-10 border-2 border-[#00853c]/30 hover:border-[#00853c] hover:shadow-2xl transition-all duration-500 hover:-translate-y-3';
  };

  const getIconClasses = () => {
    if (variant === 'highlight') {
      return 'bg-gradient-to-br from-[#007BFF] to-[#ABC5FF] rounded-xl p-3 group-hover:scale-110 transition-transform duration-300';
    }
    
    return 'bg-gradient-to-br from-[#007BFF] to-[#ABC5FF] rounded-2xl w-20 h-20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500';
  };

  const getIconSize = () => {
    return variant === 'highlight' ? 'w-6 h-6' : 'w-10 h-10';
  };

  const getTitleClasses = () => {
    if (variant === 'highlight') {
      return 'text-xl font-bold text-[#001F3E] mb-2';
    }
    
    return 'text-2xl font-bold text-[#001F3E] mb-4 leading-tight';
  };

  const getDescriptionClasses = () => {
    if (variant === 'highlight') {
      return 'text-[#8092AA] leading-relaxed';
    }
    
    return 'text-[#8092AA] leading-relaxed text-lg';
  };

  if (variant === 'highlight') {
    return (
      <div className={`${getCardClasses()} ${className}`}>
        <div className="flex items-start space-x-4">
          <div className={getIconClasses()}>
            <Icon className={`${getIconSize()} text-white`} />
          </div>
          <div>
            <h3 className={getTitleClasses()}>
              {title}
            </h3>
            <p className={getDescriptionClasses()}>
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${getCardClasses()} ${className}`}>
      <div className={getIconClasses()}>
        <Icon className={`${getIconSize()} text-white`} />
      </div>
      <h3 className={getTitleClasses()}>
        {title}
      </h3>
      <p className={getDescriptionClasses()}>
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;