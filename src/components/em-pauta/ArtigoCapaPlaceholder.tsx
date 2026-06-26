import { Newspaper } from 'lucide-react';

interface ArtigoCapaPlaceholderProps {
  categoria?: string | null;
  className?: string;
}

export function ArtigoCapaPlaceholder({ categoria, className = "" }: ArtigoCapaPlaceholderProps) {
  return (
    <div className={`bg-gradient-to-br from-[#007BFF] to-[#001F3E] flex flex-col items-center justify-center text-white ${className}`}>
      <Newspaper className="w-8 h-8 mb-2 opacity-80" />
      {categoria && (
        <span className="text-xs font-semibold tracking-wide uppercase opacity-90">
          {categoria}
        </span>
      )}
    </div>
  );
}