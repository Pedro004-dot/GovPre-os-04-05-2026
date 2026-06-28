import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  Plus,
  Check,
  Landmark,
  Building2,
  Stethoscope,
  Pill,
  HardHat,
  Wheat,
  Globe,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';
import FloatingCard from '../ui/FloatingCard';
import StatusBadge from '../ui/StatusBadge';

/**
 * PesquisaPrecosMockup
 * ---------------------------------------------------------------------------
 * Ilustração animada da seção "GovIA produz · Pesquisa de preços".
 *
 * Visualiza o processo real do produto como um fluxo de dados:
 *   8 fontes (input)  →  GovIA central (processa/valida)  →  preço estimado +
 *   itens validados (output).
 *
 * Motion (GSAP) — mesma família de PCAMockup / DocumentosMockup:
 *  - Entrada one-shot (timeline pausada, disparada por IntersectionObserver):
 *    fontes surgem → núcleo GovIA → trilhos desenham → resultados "nascem" do
 *    centro e descem em cascata → contador do preço + barra de conformidade.
 *  - Fluxo contínuo (loop): as fontes pulsam uma a uma, trilhas verdes correm
 *    das fontes até a IA (stroke-dashoffset) e o núcleo pulsa com um anel de
 *    "processamento".
 *  - As linhas SVG são medidas do DOM real e recalculadas via ResizeObserver,
 *    acompanhando o reposicionamento responsivo dos cards.
 *
 * Acessibilidade: respeita `prefers-reduced-motion` (estado final, sem motion).
 * Paleta: base safira (action #006AFF / navy) + verde-contraste (success) no fluxo.
 */

const VERDE = '#7CCD48'; // token `success` — verde-contraste do fluxo de dados
const AZUL = '#006AFF'; // token `action` — safira dos trilhos-base

const VALOR_ESTIMADO = 895; // R$ — média das referências validadas
const SCORE = 0.97; // 97% de conformidade

const formatarBRL = (v: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

type Fonte = { id: string; nome: string; Icone: LucideIcon };

// 8 fontes de dados (a "nuvem" de origem). Rótulos em pt-BR.
const FONTES: Fonte[] = [
  { id: 'pncp', nome: 'PNCP', Icone: Landmark },
  { id: 'comprasgov', nome: 'Compras.gov', Icone: Building2 },
  { id: 'bps', nome: 'BPS', Icone: Stethoscope },
  { id: 'cmed', nome: 'CMED', Icone: Pill },
  { id: 'sinapi', nome: 'Sinapi', Icone: HardHat },
  { id: 'conab', nome: 'CONAB', Icone: Wheat },
  { id: 'web', nome: 'Web', Icone: Globe },
  { id: 'privadas', nome: 'Fontes privadas', Icone: Briefcase },
];

type Saida = { id: string; nome: string; valor: string };

// 3 cards de validação (saída) — dados um pouco mais diversos.
const SAIDAS: Saida[] = [
  { id: 'pncp', nome: 'PNCP validado', valor: 'R$ 890,00' },
  { id: 'cmed', nome: 'CMED validado', valor: 'R$ 875,00' },
  { id: 'privada', nome: 'Fonte privada validada', valor: 'R$ 920,00' },
];

type Linha = { x1: number; y1: number; x2: number; y2: number; comprimento: number };

function PesquisaPrecosMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const fontesRef = useRef<(HTMLDivElement | null)[]>([]);
  const precoValorRef = useRef<HTMLParagraphElement>(null);

  const [tamanho, setTamanho] = useState({ w: 0, h: 0 });
  const [inputs, setInputs] = useState<Linha[]>([]);
  const [trunk, setTrunk] = useState<Linha | null>(null);

  // ── Medição: deriva as linhas das posições reais (responsivo) ─────────────
  useLayoutEffect(() => {
    const container = containerRef.current;
    const ai = aiRef.current;
    const output = outputRef.current;
    if (!container || !ai || !output) return;

    const medir = () => {
      const base = container.getBoundingClientRect();
      const a = ai.getBoundingClientRect();
      const ax = a.left - base.left + a.width / 2;
      const ay = a.top - base.top + a.height / 2;

      const novosInputs: Linha[] = fontesRef.current.map((card) => {
        if (!card) return { x1: ax, y1: 0, x2: ax, y2: ay, comprimento: 0 };
        const r = card.getBoundingClientRect();
        const x1 = r.left - base.left + r.width / 2;
        const y1 = r.bottom - base.top; // sai pela base do card-fonte
        return { x1, y1, x2: ax, y2: ay, comprimento: Math.hypot(ax - x1, ay - y1) };
      });

      const o = output.getBoundingClientRect();
      const oy = o.top - base.top; // topo do bloco de saída
      const novoTrunk: Linha = { x1: ax, y1: ay, x2: ax, y2: oy, comprimento: Math.abs(oy - ay) };

      setTamanho({ w: base.width, h: base.height });
      setInputs(novosInputs);
      setTrunk(novoTrunk);
    };

    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  // ── Orquestração GSAP: entrada + fluxo contínuo ───────────────────────────
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || inputs.length === 0) return;

    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const rails = gsap.utils.toArray<SVGPathElement>('.pp-rail');
      const fluxos = gsap.utils.toArray<SVGPathElement>('.pp-fluxo');

      if (reduzido) {
        gsap.set(['.pp-fonte', '.pp-saida', '.pp-preco'], { opacity: 1, y: 0, scale: 1 });
        gsap.set('.pp-ai', { opacity: 1, scale: 1 });
        gsap.set([...rails, ...fluxos, '.pp-trunk'], { strokeDashoffset: 0, opacity: 1 });
        gsap.set(['.pp-ai-glow', '.pp-score'], { opacity: 1, scaleX: 1 });
        if (precoValorRef.current) precoValorRef.current.textContent = formatarBRL(VALOR_ESTIMADO);
        return;
      }

      // Fluxo contínuo das trilhas verdes (sempre correndo; revelado na timeline).
      fluxos.forEach((linha) => {
        const len = Number(linha.dataset.len) || 1;
        gsap.set(linha, { strokeDasharray: `14 ${len}`, strokeDashoffset: len });
        gsap.to(linha, { strokeDashoffset: -len, duration: 1.6, ease: 'none', repeat: -1 });
      });

      // Loops ambientes — iniciam ao fim da entrada (evita conflito de scale).
      const startAmbient = () => {
        // Fontes pulsam uma a uma (onda contínua).
        gsap
          .timeline({ repeat: -1, repeatDelay: 0.6 })
          .to('.pp-fonte', {
            scale: 1.06,
            duration: 0.3,
            ease: 'sine.inOut',
            stagger: { each: 0.14, yoyo: true, repeat: 1 },
          });
        // Brilho do núcleo respira.
        gsap.to('.pp-ai-glow', {
          opacity: 0.65,
          scale: 1.12,
          duration: 1.6,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          transformOrigin: 'center',
        });
      };

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, paused: true, onComplete: startAmbient });

      // 1. Fontes surgem em stagger.
      tl.fromTo(
        '.pp-fonte',
        { opacity: 0, y: -10, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.07 },
      );

      // 2. Núcleo GovIA entra com um leve overshoot.
      tl.fromTo(
        '.pp-ai',
        { opacity: 0, scale: 0.4 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.1',
      );

      // 3. Trilhos-base desenham das fontes até a IA + trilhas verdes revelam.
      tl.fromTo(
        rails,
        { strokeDashoffset: (i) => Number(rails[i].dataset.len) || 0 },
        { strokeDashoffset: 0, duration: 0.55, stagger: 0.05 },
        '-=0.15',
      );
      tl.to(fluxos, { opacity: 1, duration: 0.3 }, '-=0.25');

      // 4. Cálculo da IA: brilho de processamento.
      tl.to('.pp-ai-glow', { opacity: 0.55, duration: 0.4 }, '-=0.1');

      // 5. Trunk desce e os resultados "nascem" do centro em cascata.
      tl.fromTo(
        '.pp-trunk',
        { strokeDashoffset: trunk ? trunk.comprimento : 0 },
        { strokeDashoffset: 0, duration: 0.4 },
        '-=0.5',
      );
      tl.fromTo(
        '.pp-saida',
        { opacity: 0, y: -28, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.1, ease: 'back.out(1.4)' },
        '-=0.2',
      );

      // 6. Card do preço nasce + contador progressivo + barra de conformidade.
      tl.fromTo(
        '.pp-preco',
        { opacity: 0, y: -20, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'back.out(1.4)' },
        '-=0.15',
      );
      const counter = { v: 0 };
      tl.to(
        counter,
        {
          v: VALOR_ESTIMADO,
          duration: 1.1,
          ease: 'power2.out',
          onUpdate: () => {
            if (precoValorRef.current) precoValorRef.current.textContent = formatarBRL(counter.v);
          },
        },
        '<',
      );
      tl.fromTo('.pp-score', { scaleX: 0 }, { scaleX: SCORE, duration: 0.7, ease: 'power2.out' }, '<0.2');

      // Dispara a entrada quando a seção entra em tela.
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            tl.play();
            io.disconnect();
          }
        },
        { threshold: 0.3 },
      );
      io.observe(container);
    }, container);

    return () => ctx.revert();
  }, [inputs]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Fluxo da pesquisa de preços: oito fontes de dados (PNCP, Compras.gov, BPS, CMED, Sinapi, CONAB, Web e fontes privadas) alimentam a GovIA, que valida as referências e gera o preço estimado com score de conformidade."
      className="relative mx-auto w-full max-w-[520px]"
    >
      {/* ── Camada de conexões (SVG) — atrás dos cards ─────────────────── */}
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox={`0 0 ${tamanho.w || 1} ${tamanho.h || 1}`}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="pp-brilho" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="pp-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={VERDE} stopOpacity="0.5" />
            <stop offset="100%" stopColor={VERDE} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Brilho do núcleo (ambient) */}
        {trunk && (
          <circle
            className="pp-ai-glow"
            cx={trunk.x1}
            cy={trunk.y1}
            r={48}
            fill="url(#pp-glow)"
            opacity={0}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
        )}

        {/* Trilhos fonte → IA */}
        {inputs.map((l, i) => (
          <g key={i}>
            <path
              className="pp-rail"
              data-len={l.comprimento}
              d={`M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}`}
              stroke={AZUL}
              strokeOpacity={0.16}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeDasharray={l.comprimento}
              style={{ strokeDashoffset: l.comprimento }}
            />
            <path
              className="pp-fluxo"
              data-len={l.comprimento}
              d={`M ${l.x1} ${l.y1} L ${l.x2} ${l.y2}`}
              stroke={VERDE}
              strokeWidth={2}
              strokeLinecap="round"
              filter="url(#pp-brilho)"
              opacity={0}
            />
          </g>
        ))}

        {/* Trunk IA → saída */}
        {trunk && (
          <path
            className="pp-trunk"
            data-len={trunk.comprimento}
            d={`M ${trunk.x1} ${trunk.y1} L ${trunk.x2} ${trunk.y2}`}
            stroke={VERDE}
            strokeOpacity={0.5}
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeDasharray={trunk.comprimento}
            style={{ strokeDashoffset: trunk.comprimento }}
          />
        )}

      </svg>

      {/* ── Band 1 — Input: nuvem de 8 fontes ──────────────────────────── */}
      <div className="relative z-10 grid grid-cols-4 gap-2">
        {FONTES.map((f, i) => (
          <div
            key={f.id}
            ref={(el) => {
              fontesRef.current[i] = el;
            }}
            className="pp-fonte"
            style={{ opacity: 0 }}
          >
            <FloatingCard className="!p-2 text-center">
              <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-action/10 text-action">
                <f.Icone className="h-3.5 w-3.5" />
              </div>
              <p className="truncate text-[10px] font-semibold leading-tight text-navy" title={f.nome}>
                {f.nome}
              </p>
            </FloatingCard>
          </div>
        ))}
      </div>

      {/* ── Band 2 — GovIA: núcleo central ─────────────────────────────── */}
      <div className="relative z-20 my-6 flex justify-center">
        <div
          ref={aiRef}
          className="pp-ai flex h-16 w-16 items-center justify-center rounded-full bg-action shadow-float ring-4 ring-action/15"
          style={{ opacity: 0 }}
        >
          <img
            src="/govia-simbolo-branco.svg"
            alt="GovPreços"
            className="h-7 w-7 object-contain"
            draggable={false}
          />
        </div>
      </div>

      {/* ── Band 3 — Output: validações + preço estimado ───────────────── */}
      <div ref={outputRef} className="relative z-10 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {SAIDAS.map((s) => (
            <div key={s.id} className="pp-saida" style={{ opacity: 0 }}>
              <FloatingCard className="!p-2.5">
                <div className="mb-1 flex items-center gap-1 text-success">
                  <Check className="h-3 w-3" />
                  <span className="truncate text-[10px] font-semibold leading-tight text-navy" title={s.nome}>
                    {s.nome}
                  </span>
                </div>
                <p className="font-mono text-xs font-semibold text-navy">{s.valor}</p>
              </FloatingCard>
            </div>
          ))}
        </div>

        <div className="pp-preco" style={{ opacity: 0 }}>
          <FloatingCard elevated className="border-2 border-success bg-success/5">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                  Preço estimado
                </p>
                <p ref={precoValorRef} className="font-mono text-2xl font-bold text-navy">
                  R$ 0,00
                </p>
                <div className="mt-2 max-w-[180px]">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-ice">
                    <div className="pp-score h-full origin-left rounded-full bg-success" style={{ transform: 'scaleX(0)' }} />
                  </div>
                  <div className="mt-1.5">
                    <StatusBadge variant="success">
                      <Check className="h-3 w-3" />
                      97% conformidade
                    </StatusBadge>
                  </div>
                </div>
              </div>
              <button
                type="button"
                aria-label="Adicionar à cesta"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-success text-white shadow-card transition-transform hover:scale-105"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 font-mono text-[10px] text-muted">Art. 23 · Lei 14.133</p>
          </FloatingCard>
        </div>
      </div>
    </div>
  );
}

export default PesquisaPrecosMockup;
