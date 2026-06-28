import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Bold, Check, FileText, Heading, Italic, List } from 'lucide-react';
import FloatingCard from '../ui/FloatingCard';

/**
 * DocumentosMockup
 * ---------------------------------------------------------------------------
 * Réplica realista do editor do produto gerando um ETP "no piloto automático"
 * — sem elementos abstratos (sem brilho de IA, sem varredura).
 *
 * Sequência (uma passada ao entrar em tela), por seção:
 *  1. Caret pisca e "clica" no bloco vazio; o título escurece.
 *  2. O skeleton some e o texto jurídico (Lei 14.133) é digitado ultrarrápido.
 *  3. A referência ao artigo acende como um chip de citação inline.
 *  4. A barra de progresso de geração avança um passo.
 * Ao final: selo "Gerando…" → "Concluído".
 *
 * Mesmo harness dos mockups irmãos: gsap.context + IntersectionObserver
 * (one-shot) + prefers-reduced-motion + ctx.revert().
 */

const SECOES: { titulo: string; texto: string; ref: string }[] = [
  {
    titulo: '1. Objeto',
    texto:
      'Contratação de empresa para prestação de serviços continuados de limpeza, nos termos do art. 6º da Lei 14.133/2021.',
    ref: 'art. 6º da Lei 14.133/2021',
  },
  {
    titulo: '2. Justificativa',
    texto:
      'Demanda permanente da Administração, fundamentada no art. 18 da Lei 14.133/2021 e na jurisprudência do TCU.',
    ref: 'art. 18 da Lei 14.133/2021',
  },
  {
    titulo: '3. Solução',
    texto:
      'Pesquisa de preços com ampla cesta de referências, assegurando preço estimado conforme art. 23 da Lei 14.133/2021.',
    ref: 'art. 23 da Lei 14.133/2021',
  },
];

// HTML do parágrafo com a citação legal envolvida por um chip inline.
function comCitacao(texto: string, ref: string) {
  const i = texto.indexOf(ref);
  if (i < 0) return texto;
  const pre = texto.slice(0, i);
  const pos = texto.slice(i + ref.length);
  return `${pre}<mark class="doc-cite rounded px-1 bg-action/10 text-action font-medium">${ref}</mark>${pos}`;
}

function DocumentosMockup() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const bodies = gsap.utils.toArray<HTMLSpanElement>('.doc-body');
      const heads = gsap.utils.toArray<HTMLParagraphElement>('.doc-head');
      const carets = gsap.utils.toArray<HTMLSpanElement>('.doc-caret');
      const skels = gsap.utils.toArray<HTMLDivElement>('.doc-skel');

      if (reduzido) {
        SECOES.forEach((s, i) => {
          if (bodies[i]) bodies[i].innerHTML = comCitacao(s.texto, s.ref);
        });
        gsap.set([...carets, ...skels], { opacity: 0 });
        gsap.set(heads, { color: '#001F3E' });
        gsap.set('.doc-progress', { scaleX: 1 });
        gsap.set('.status-gerando', { opacity: 0 });
        gsap.set('.status-ok', { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' }, paused: true });

      // Sub-sequência por seção: foco → título → skeleton → digita → citação → progresso.
      const digitar = (i: number) => {
        const { texto, ref } = SECOES[i];
        const proxy = { n: 0 };

        // 1. Caret "clica" no bloco e pisca (rápido).
        tl.set(carets[i], { opacity: 1 });
        tl.to(carets[i], { opacity: 0, duration: 0.18, repeat: 1, yoyo: true, ease: 'power1.inOut' });

        // 2. Título escurece (de muted para navy).
        tl.to(heads[i], { color: '#001F3E', duration: 0.25 }, '<');

        // 3. Skeleton some ao começar a digitação.
        tl.to(skels[i], { opacity: 0, duration: 0.18 }, '>-0.05');

        // 4. Digitação ultrarrápida (cadência de máquina, ease none).
        tl.to(
          proxy,
          {
            n: texto.length,
            duration: Math.min(0.9, texto.length * 0.012),
            ease: 'none',
            onUpdate: () => {
              if (bodies[i]) bodies[i].textContent = texto.slice(0, Math.round(proxy.n));
            },
          },
          '<',
        );

        // 5. Caret se apaga; a citação legal acende como chip inline.
        tl.to(carets[i], { opacity: 0, duration: 0.1 });
        tl.add(() => {
          const el = bodies[i];
          if (!el) return;
          el.innerHTML = comCitacao(texto, ref);
          const mark = el.querySelector('.doc-cite');
          if (mark) {
            gsap.fromTo(
              mark,
              { backgroundColor: 'rgba(0,106,255,0)', color: '#001F3E' },
              { backgroundColor: 'rgba(0,106,255,0.1)', color: '#006AFF', duration: 0.3, ease: 'power2.out' },
            );
          }
        });

        // 6. Barra de progresso avança um passo.
        tl.to('.doc-progress', { scaleX: (i + 1) / SECOES.length, duration: 0.4, ease: 'expo.out' }, '<');
      };

      SECOES.forEach((_, i) => digitar(i));

      // Selo de status: Gerando… → Concluído.
      tl.to('.status-gerando', { opacity: 0, duration: 0.2 }, '+=0.1');
      tl.to('.status-ok', { opacity: 1, duration: 0.25 }, '<');

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
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Editor do GovPreços gerando um Estudo Técnico Preliminar no piloto automático: os campos são preenchidos com texto fundamentado na Lei 14.133/2021 e cada referência legal é destacada como citação."
      className="mx-auto w-full max-w-[560px]"
    >
      <FloatingCard elevated className="overflow-hidden">
        {/* Cabeçalho do editor */}
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-action" />
          <span className="text-sm font-semibold text-navy">ETP — Estudo Técnico Preliminar</span>
          <span className="relative ml-auto inline-flex h-5 items-center">
            <span className="status-gerando inline-flex items-center gap-1 rounded-full bg-action/10 px-2 py-0.5 text-[10px] font-semibold text-action">
              <span className="h-1.5 w-1.5 rounded-full bg-action" />
              Gerando…
            </span>
            <span
              className="status-ok absolute right-0 inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-semibold text-navy"
              style={{ opacity: 0 }}
            >
              <Check className="h-3 w-3 text-success" />
              Concluído
            </span>
          </span>
        </div>

        {/* Barra de progresso de geração */}
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-ice">
          <div className="doc-progress h-full origin-left rounded-full bg-action" style={{ transform: 'scaleX(0)' }} />
        </div>

        {/* Barra de ferramentas (estática, só estética de editor) */}
        <div className="mt-3 flex items-center gap-3 border-b border-ice pb-3 text-muted">
          <Heading className="h-3.5 w-3.5" />
          <Bold className="h-3.5 w-3.5" />
          <Italic className="h-3.5 w-3.5" />
          <List className="h-3.5 w-3.5" />
        </div>

        {/* Corpo do documento */}
        <div className="mt-3 space-y-3">
          {SECOES.map((s) => (
            <div key={s.titulo}>
              <p
                className="doc-head mb-1 text-[11px] font-semibold uppercase tracking-wide"
                style={{ color: '#8092AA' }}
              >
                {s.titulo}
              </p>
              <div className="relative min-h-[3.6rem] rounded bg-surface px-3 py-2">
                {/* Skeleton inicial */}
                <div className="doc-skel pointer-events-none absolute inset-x-3 top-2.5 space-y-1.5">
                  <div className="h-2 w-full rounded bg-border/40" />
                  <div className="h-2 w-3/4 rounded bg-border/40" />
                </div>
                {/* Texto digitado + caret */}
                <span className="doc-body text-sm leading-relaxed text-navy" />
                <span
                  className="doc-caret ml-px inline-block h-4 w-0.5 translate-y-0.5 bg-action align-middle"
                  style={{ opacity: 0 }}
                />
              </div>
            </div>
          ))}
        </div>
      </FloatingCard>
    </div>
  );
}

export default DocumentosMockup;
