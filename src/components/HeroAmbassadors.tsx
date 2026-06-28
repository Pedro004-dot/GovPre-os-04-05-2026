import { useState } from 'react';

/** Foto oficial dos embaixadores (ambos na mesma imagem) */
export const AMBASSADORS_GROUP_IMAGE = '/images/embaixadores.webp';

export interface Ambassador {
  name: string;
  role: string;
  photo: string;
  initials: string;
  /** TODO: substituir pelo depoimento real do embaixador */
  quote: string;
}

export const AMBASSADORS: Ambassador[] = [
  {
    name: 'Felipe Dalenogare',
    role: 'Jurista, Lei 14.133',
    photo: '/images/Felipe.webp',
    initials: 'FD',
    quote: 'TODO: inserir depoimento do Felipe Dalenogare',
  },
  {
    name: 'Leandro Matsumota',
    role: 'Ex-procurador municipal',
    photo: '/images/Leandro.webp',
    initials: 'LM',
    quote: 'TODO: inserir depoimento do Leandro Matsumota',
  },
];

interface AmbassadorAvatarProps {
  ambassador: Ambassador;
  size?: 'sm' | 'md';
  className?: string;
}

const sizeClasses = {
  sm: 'h-10 w-10 text-xs ring-2',
  md: 'h-16 w-16 text-base ring-[3px]',
};

export function AmbassadorAvatar({
  ambassador,
  size = 'sm',
  className = '',
}: AmbassadorAvatarProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full bg-ice ring-white ${sizeClasses[size]} ${className}`}
      title={ambassador.name}
    >
      {failed ? (
        <span className="flex h-full w-full items-center justify-center font-semibold text-navy">
          {ambassador.initials}
        </span>
      ) : (
        <img
          src={ambassador.photo}
          alt={ambassador.name}
          className="h-full w-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

interface HeroAmbassadorEndorsementProps {
  className?: string;
}

/** Faixa compacta de endosso — credibilidade secundária no hero */
export function HeroAmbassadorEndorsement({ className = '' }: HeroAmbassadorEndorsementProps) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="flex shrink-0 -space-x-2 pt-0.5">
        {AMBASSADORS.map((ambassador, index) => (
          <AmbassadorAvatar
            key={ambassador.name}
            ambassador={ambassador}
            size="sm"
            className={index > 0 ? 'relative z-10' : 'relative z-0'}
          />
        ))}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wide text-muted">
          Endossado por especialistas em Lei 14.133
        </p>
        <p className="mt-0.5 text-xs leading-relaxed text-navy">
          {AMBASSADORS.map((ambassador, index) => (
            <span key={ambassador.name}>
              {index > 0 && <span className="text-muted"> · </span>}
              <strong className="font-semibold">{ambassador.name}</strong>
              <span className="text-muted"> · {ambassador.role}</span>
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

/** Banda abaixo do hero — foto conjunta + espaço para citações */
export function HeroAmbassadorsBand() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      aria-label="Endosso dos embaixadores"
      className="border-b border-ice bg-white py-8"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <p className="mb-6 text-center text-[11px] font-medium uppercase tracking-wide text-muted">
          Endossado por especialistas em Lei 14.133
        </p>

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
          {!imageFailed ? (
            <img
              src={AMBASSADORS_GROUP_IMAGE}
              alt="Felipe Dalenogare e Leandro Matsumota, embaixadores GovPreços"
              className="h-36 w-auto max-w-[280px] shrink-0 rounded-lg object-contain object-center md:h-44"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="flex shrink-0 -space-x-3">
              {AMBASSADORS.map((ambassador, index) => (
                <AmbassadorAvatar
                  key={ambassador.name}
                  ambassador={ambassador}
                  size="md"
                  className={index > 0 ? 'relative z-10 ring-ice' : 'relative z-0 ring-ice'}
                />
              ))}
            </div>
          )}

          <div className="grid flex-1 gap-8 md:grid-cols-2 md:gap-10">
            {AMBASSADORS.map((ambassador) => (
              <div key={ambassador.name} className="min-w-0">
                <p className="font-semibold text-navy">{ambassador.name}</p>
                <p className="text-sm text-muted">{ambassador.role}</p>
                <blockquote className="mt-3 border-l-2 border-ice pl-3 text-sm italic leading-relaxed text-muted">
                  {ambassador.quote}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
