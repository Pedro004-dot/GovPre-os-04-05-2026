import { Clock } from 'lucide-react';
import { formatarData } from '../../lib/artigos';

interface ArtigoMetadataProps {
  autor: string;
  tempoLeitura?: number | null;
  publicadoEm: string | null;
  className?: string;
  size?: 'sm' | 'base';
}

export function ArtigoMetadata({ 
  autor, 
  tempoLeitura, 
  publicadoEm, 
  className = "",
  size = 'sm'
}: ArtigoMetadataProps) {
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';
  
  return (
    <div className={`flex items-center text-[#8092AA] ${textSize} ${className}`}>
      <span className="font-medium">{autor}</span>
      
      {tempoLeitura && (
        <>
          <span className="mx-2">·</span>
          <span className="inline-flex items-center space-x-1 font-mono">
            <Clock className="w-3 h-3" />
            <span>{tempoLeitura} min</span>
          </span>
        </>
      )}
      
      {publicadoEm && (
        <>
          <span className="mx-2">·</span>
          <span className="font-mono">{formatarData(publicadoEm)}</span>
        </>
      )}
    </div>
  );
}