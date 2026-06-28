import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Landmark, HeartPulse, GraduationCap, HardHat, Building2 } from 'lucide-react';
import FloatingCard from '../ui/FloatingCard';
import StatusBadge from '../ui/StatusBadge';

/**
 * PCAMockup
 * ---------------------------------------------------------------------------
 * Ilustração animada da seção PCA (Plano de Contratações Anual).
 *
 * Conceito: quatro secretarias (Saúde, Educação, Obras, Administração) enviam
 * suas demandas para a Central de Compras, que as consolida no PCA. Linhas
 * verdes luminosas pulsam um fluxo contínuo de dados dos cantos rumo ao centro.
 *
 * Motion (GSAP):
 *  - Uma timeline orquestra a entrada: centro primeiro → cantos em stagger →
 *    desenho dos trilhos de conexão.
 *  - O fluxo contínuo usa stroke-dasharray / stroke-dashoffset (loop infinito)
 *    para simular os dados viajando até o centro.
 *  - As coordenadas das linhas são medidas do DOM real e recalculadas via
 *    ResizeObserver, acompanhando o reposicionamento responsivo dos cards.
 *
 * Acessibilidade: respeita `prefers-reduced-motion` (sem entrada nem fluxo).
 * Paleta: base safira (action #006AFF / navy) e verde-contraste (success) no fluxo.
 */

const VERDE = '#7CCD48'; // token `success` — verde-contraste do fluxo de dados

type Secretaria = {
  id: string;
  nome: string;
  demanda: string;
  Icone: typeof HeartPulse;
  pos: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

const SECRETARIAS: Secretaria[] = [
  { id: 'saude', nome: 'Saúde', demanda: '12 demandas', Icone: HeartPulse, pos: 'top-left' },
  { id: 'educacao', nome: 'Educação', demanda: '8 demandas', Icone: GraduationCap, pos: 'top-right' },
  { id: 'obras', nome: 'Obras', demanda: '5 demandas', Icone: HardHat, pos: 'bottom-left' },
  { id: 'admin', nome: 'Administração', demanda: '3 demandas', Icone: Building2, pos: 'bottom-right' },
];

const POSICAO_CLASSES: Record<Secretaria['pos'], string> = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
};

type Linha = { x1: number; y1: number; x2: number; y2: number; comprimento: number };

function PCAMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centroRef = useRef<HTMLDivElement>(null);
  const cantosRef = useRef<(HTMLDivElement | null)[]>([]);

  const [tamanho, setTamanho] = useState({ w: 0, h: 0 });
  const [linhas, setLinhas] = useState<Linha[]>([]);

  // ── Medição: deriva as linhas a partir das posições reais (responsivo) ────
  useLayoutEffect(() => {
    const container = containerRef.current;
    const centro = centroRef.current;
    if (!container || !centro) return;

    const medir = () => {
      const base = container.getBoundingClientRect();
      const c = centro.getBoundingClientRect();
      const cx = c.left - base.left + c.width / 2;
      const cy = c.top - base.top + c.height / 2;

      const novas: Linha[] = cantosRef.current.map((canto) => {
        if (!canto) return { x1: 0, y1: 0, x2: cx, y2: cy, comprimento: 0 };
        const r = canto.getBoundingClientRect();
        const x1 = r.left - base.left + r.width / 2;
        const y1 = r.top - base.top + r.height / 2;
        return { x1, y1, x2: cx, y2: cy, comprimento: Math.hypot(cx - x1, cy - y1) };
      });

      setTamanho({ w: base.width, h: base.height });
      setLinhas(novas);
    };

    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  // ── Orquestração GSAP: entrada + fluxo contínuo ───────────────────────────
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || linhas.length === 0) return;

    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const rails = gsap.utils.toArray<SVGPathElement>('.pca-rail');
      const fluxos = gsap.utils.toArray<SVGPathElement>('.pca-fluxo');

      if (reduzido) {
        gsap.set(['.pca-centro', '.pca-canto'], { opacity: 1, y: 0, scale: 1 });
        gsap.set([...rails, ...fluxos], { strokeDashoffset: 0, opacity: 1 });
        return;
      }

      // Fluxo contínuo: o dash viaja do canto rumo ao centro (loop infinito).
      fluxos.forEach((linha) => {
        const len = Number(linha.dataset.len) || 1;
        gsap.set(linha, { strokeDasharray: `16 ${len}`, strokeDashoffset: len });
        gsap.to(linha, { strokeDashoffset: -len, duration: 2.6, ease: 'none', repeat: -1 });
      });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, paused: true });

      // 1. Centro entra primeiro (staging do herói).
      tl.fromTo(
        '.pca-centro',
        { opacity: 0, y: 14, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5 },
      );

      // 2. Cantos entram em stagger.
      tl.fromTo(
        '.pca-canto',
        { opacity: 0, y: 16, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.09 },
        '-=0.2',
      );

      // 3. Trilhos de conexão se desenham até o centro.
      tl.fromTo(
        rails,
        { strokeDashoffset: (i) => Number(rails[i].dataset.len) || 0 },
        { strokeDashoffset: 0, duration: 0.6, stagger: 0.08 },
        '-=0.15',
      );

      // 4. O fluxo verde revela ao final.
      tl.to(fluxos, { opacity: 1, duration: 0.4 }, '-=0.3');

      // Ambient: respiração do brilho central.
      gsap.to('.pca-glow', {
        opacity: 0.55,
        scale: 1.08,
        duration: 2.4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        transformOrigin: 'center',
      });

      // Dispara a entrada quando a seção entra em tela.
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            tl.play();
            io.disconnect();
          }
        },
        { threshold: 0.35 },
      );
      io.observe(container);
    }, container);

    return () => ctx.revert();
  }, [linhas]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Diagrama do Plano de Contratações Anual: as secretarias de Saúde, Educação, Obras e Administração enviam suas demandas para a Central de Compras, que as consolida no PCA."
      className="relative mx-auto aspect-[5/4] w-full max-w-[520px] sm:aspect-[16/11]"
    >
      {/* ── Camada de conexões (SVG) — atrás dos cards ─────────────────── */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox={`0 0 ${tamanho.w || 1} ${tamanho.h || 1}`}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="pca-brilho" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="pca-centro-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={VERDE} stopOpacity="0.4" />
            <stop offset="100%" stopColor={VERDE} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Brilho central que respira (ambient) */}
        {linhas[0] && (
          <circle
            className="pca-glow"
            cx={linhas[0].x2}
            cy={linhas[0].y2}
            r={Math.min(tamanho.w, tamanho.h) * 0.3}
            fill="url(#pca-centro-glow)"
            opacity={0}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
        )}

        {linhas.map((l, i) => (
          <g key={i}>
            {/* Trilho-base safira: sutil, desenha na entrada */}
            <path
              className="pca-rail"
              data-len={l.comprimento}
              d={`M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}`}
              stroke="#006AFF"
              strokeOpacity={0.16}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeDasharray={l.comprimento}
            />
            {/* Fluxo verde-contraste: dados viajando rumo ao centro */}
            <path
              className="pca-fluxo"
              data-len={l.comprimento}
              d={`M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}`}
              stroke={VERDE}
              strokeWidth={2.25}
              strokeLinecap="round"
              filter="url(#pca-brilho)"
              opacity={0}
            />
          </g>
        ))}
      </svg>

      {/* ── Card central: Central de compras ───────────────────────────── */}
      <div
        ref={centroRef}
        className="pca-centro absolute left-1/2 top-1/2 z-10 w-[46%] max-w-[230px] -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0 }}
      >
        <FloatingCard elevated className="text-center">
          <div className="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-action text-white shadow-card">
            <Landmark className="h-5 w-5" />
          </div>
          <p className="text-sm font-bold text-navy">Central de compras</p>
          <p className="mt-0.5 font-mono text-[10px] text-muted">PCA 2026 · consolidado</p>
          <div className="mt-2.5 flex items-center justify-center">
            <StatusBadge variant="success">28 demandas</StatusBadge>
          </div>
        </FloatingCard>
      </div>

      {/* ── Cards periféricos: secretarias ─────────────────────────────── */}
      {SECRETARIAS.map((s, i) => (
        <div
          key={s.id}
          ref={(el) => {
            cantosRef.current[i] = el;
          }}
          className={`pca-canto absolute z-10 w-[42%] max-w-[180px] ${POSICAO_CLASSES[s.pos]}`}
          style={{ opacity: 0 }}
        >
          <FloatingCard className="!p-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-action/10 text-action">
                <s.Icone className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-navy">{s.nome}</p>
                <p className="font-mono text-[10px] text-muted">{s.demanda}</p>
              </div>
            </div>
          </FloatingCard>
        </div>
      ))}
    </div>
  );
}

export default PCAMockup;
