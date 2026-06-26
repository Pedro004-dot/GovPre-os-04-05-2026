import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  icon?: LucideIcon;
  variant?: 'default' | 'overlay';
  className?: string;
}

function StatCard({ 
  label, 
  value, 
  icon: Icon,
  variant = 'default',
  className = "" 
}: StatCardProps) {
  if (variant === 'overlay') {
    return (
      <div className={`bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 ${className}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-xs mb-1">{label}</p>
            <p className="text-white text-xl font-bold">{value}</p>
          </div>
          {Icon && (
            <div className="bg-[#00853c] rounded-full p-3">
              <Icon className="w-6 h-6 text-white" />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}>
      <div className="flex items-start space-x-6">
        {Icon && (
          <div className="bg-gradient-to-br from-[#007BFF] to-[#ABC5FF] rounded-xl p-4 flex-shrink-0">
            <Icon className="w-8 h-8 text-white" />
          </div>
        )}
        <div>
          <h3 className="text-2xl font-bold text-[#001F3E] mb-3">
            {value}
          </h3>
          <p className="text-[#8092AA] leading-relaxed">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;