import { FileCheck, Shield, TrendingUp } from 'lucide-react';

interface SocialProofBadgesProps {
  className?: string;
}

function SocialProofBadges({ className = "" }: SocialProofBadgesProps) {
  const badges = [
    {
      icon: FileCheck,
      label: "Conformidade",
      value: "Art. 23"
    },
    {
      icon: Shield,
      label: "Garantia", 
      value: "Segurança Jurídica"
    },
    {
      icon: TrendingUp,
      label: "Gestão",
      value: "Inteligente"
    }
  ];

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
          >
            <div className="bg-blue-50 rounded-xl p-2">
              <Icon className="w-6 h-6 text-[#001F3E]" />
            </div>
            <div>
              <p className="text-xs text-[#8092AA] font-medium">{badge.label}</p>
              <p className="font-bold text-[#001F3E] text-lg">{badge.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SocialProofBadges;