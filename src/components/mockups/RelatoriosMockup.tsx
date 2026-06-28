import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Check, Download, MousePointer2 } from 'lucide-react';
import FloatingCard from '../ui/FloatingCard';

/**
 * RelatoriosMockup
 * ---------------------------------------------------------------------------
 * "Da pesquisa de preços ao relatório auditável (PDF)" — fluxo real do produto:
 * a tela da cotação vira um relatório oficial com um clique. Sem abstrações.
 *
 * Sequência (uma passada ao entrar em tela):
 *  1. Workspace da cotação: o valor total estimado sobe e os itens entram em stagger.
 *  2. O cursor desliza até "Gerar Relatório Executivo" e clica (scale + pulse).
 *  3. O workspace desfoca/some enquanto o PDF vertical entra (scale 0.95→1).
 *  4. Os blocos do relatório sobem em stagger (cabeçalho → estatísticas → fontes → rodapé).
 *  5. Um selo verde + assinatura digital finalizam o "pronto para auditoria".
 *
 * Mesmo harness dos mockups irmãos: gsap.context + IntersectionObserver
 * (one-shot) + prefers-reduced-motion + ctx.revert().
 */

// Itens da cotação (workspace inicial). "Tesoura reta íris" é o item detalhado no PDF.
const ITENS_COTACAO = [
  { nome: 'Tesoura reta íris 11 cm', qtd: '20 UN', fontes: '5', preco: 'R$ 20,00', total: 'R$ 400,00' },
  { nome: 'Seringa descartável 10 ml', qtd: '500 UN', fontes: '6', preco: 'R$ 1,20', total: 'R$ 600,00' },
  { nome: 'Luva nitrílica (caixa)', qtd: '200 CX', fontes: '4', preco: 'R$ 0,80', total: 'R$ 160,00' },
  { nome: 'Álcool 70% 1 L', qtd: '300 UN', fontes: '5', preco: 'R$ 6,90', total: 'R$ 2.070,00' },
];

const TOTAL_ESTIMADO = 12480; // R$ — valor total estimado da cotação (contador)

// Estatísticas das fontes (espelha o relatório real de pesquisa de preços).
const ESTATISTICAS = [
  { label: 'Média', valor: 'R$ 78,12', cor: 'text-navy' },
  { label: 'Mediana', valor: 'R$ 20,00', cor: 'text-action' },
  { label: 'Mínimo', valor: 'R$ 13,89', cor: 'text-success' },
  { label: 'Máximo', valor: 'R$ 319,00', cor: 'text-muted' },
];

// Fontes de pesquisa (PNCP) — colunas compactadas para o mockup.
const FONTES = [
  { origem: 'Fundo Mun. de Saúde', ref: 'Ref. 2025/6', valor: 'R$ 13,89', data: '07/07/2025' },
  { origem: 'Município de Adamantina', ref: 'Ref. 2025/23', valor: 'R$ 14,80', data: '12/06/2025' },
  { origem: 'Mun. de São Joaquim', ref: 'Ref. 2026/17', valor: 'R$ 20,00', data: '06/02/2026' },
  { origem: 'Município de Rio Verde', ref: 'Ref. 2025/595', valor: 'R$ 22,90', data: '13/05/2025' },
  { origem: 'Mun. de Sátiro Dias', ref: 'Ref. 2025/9', valor: 'R$ 319,00', data: '22/04/2025' },
];

const formatarBRL = (v: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v);

function RelatoriosMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const kpiRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const setKpi = (v: number) => {
      if (kpiRef.current) kpiRef.current.textContent = formatarBRL(v);
    };

    const ctx = gsap.context(() => {
      if (reduzido) {
        setKpi(TOTAL_ESTIMADO);
        gsap.set(['.dash-row'], { opacity: 1, y: 0 });
        gsap.set('.dash', { opacity: 0 });
        gsap.set('.report', { opacity: 1, scale: 1 });
        gsap.set(['.report-row', '.report-check'], { opacity: 1, y: 0, scale: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' }, paused: true });

      // 1. Workspace inicia: total estimado conta + itens entram em stagger.
      const kpi = { v: 0 };
      tl.to(kpi, { v: TOTAL_ESTIMADO, duration: 1, ease: 'power2.out', onUpdate: () => setKpi(kpi.v) });
      tl.fromTo(
        '.dash-row',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.08, ease: 'power3.out' },
        '<',
      );

      // 2. Gatilho: cursor desliza até o botão e clica.
      tl.to('.cursor', { left: '58%', top: '12%', duration: 0.5, ease: 'power3.inOut' }, '-=0.3');
      tl.to('.btn-gerar', { scale: 0.96, backgroundColor: '#007BFF', duration: 0.1, ease: 'power2.in' });
      tl.to('.btn-gerar', { scale: 1, backgroundColor: '#006AFF', duration: 0.18, ease: 'back.out(2)' });
      tl.to('.cursor', { opacity: 0, duration: 0.2 });

      // 3. Geração: dashboard desfoca/some, PDF entra.
      tl.to('.dash', { opacity: 0, filter: 'blur(6px)', scale: 0.98, duration: 0.45 }, '+=0.05');
      tl.fromTo(
        '.report',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.55, ease: 'expo.out' },
        '-=0.25',
      );

      // 4. Conteúdo do relatório sobe em stagger (topo → base).
      tl.fromTo(
        '.report-row',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power3.out' },
        '-=0.2',
      );

      // 5. Validação final: selo verde "pronto para auditoria".
      tl.fromTo(
        '.report-check',
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2.4)' },
        '-=0.1',
      );

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
      aria-label="Fluxo do GovPreços: a tela de pesquisa de preços, com os itens da cotação e o valor total estimado, vira um relatório oficial em PDF — auditável, com estatísticas das fontes, tabela do PNCP e assinatura para controle interno e prestação de contas."
      className="relative mx-auto w-full max-w-[460px]"
      style={{ minHeight: 600 }}
    >
      {/* ── Camada A: Workspace da pesquisa de preços ─────────────────── */}
      <div className="dash absolute inset-0 flex flex-col gap-3">
        {/* Barra de ações */}
        <div className="dash-row flex items-center justify-between gap-2" style={{ opacity: 0 }}>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-navy">Pesquisa de preços</p>
            <p className="truncate font-mono text-[10px] text-muted">Material hospitalar · 11 itens</p>
          </div>
          <button
            type="button"
            className="btn-gerar inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-action px-3 py-1.5 text-xs font-semibold text-white shadow-card"
          >
            <Download className="h-3.5 w-3.5" />
            Gerar Relatório Executivo
          </button>
        </div>

        {/* Resumo da cotação */}
        <div className="dash-row grid grid-cols-3 gap-2" style={{ opacity: 0 }}>
          <FloatingCard elevated className="!p-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-muted">Itens</p>
            <p className="font-mono text-lg font-bold text-navy">11</p>
          </FloatingCard>
          <FloatingCard elevated className="!p-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-muted">Fontes</p>
            <p className="font-mono text-lg font-bold text-navy">53</p>
          </FloatingCard>
          <FloatingCard elevated className="!p-2.5">
            <p className="text-[9px] font-semibold uppercase tracking-wide text-muted">Total est.</p>
            <p ref={kpiRef} className="font-mono text-lg font-bold text-success">
              R$ 0,00
            </p>
          </FloatingCard>
        </div>

        {/* Lista de itens */}
        <div className="dash-row" style={{ opacity: 0 }}>
          <FloatingCard elevated className="!p-0">
            <div className="grid grid-cols-[1fr_46px_54px_58px] items-center gap-1 border-b border-ice px-3 py-2 text-[8.5px] font-semibold uppercase tracking-wide text-muted">
              <span>Item</span>
              <span className="text-center">Fontes</span>
              <span className="text-right">Preço est.</span>
              <span className="text-right">Total</span>
            </div>
            {ITENS_COTACAO.map((it, i) => (
              <div
                key={it.nome}
                className={`grid grid-cols-[1fr_46px_54px_58px] items-center gap-1 px-3 py-2 text-[10px] text-navy ${
                  i === 0 ? 'bg-action/5' : i % 2 === 1 ? 'bg-surface' : 'bg-white'
                } ${i < ITENS_COTACAO.length - 1 ? 'border-b border-ice' : ''}`}
              >
                <span className="min-w-0">
                  <span className="block truncate font-medium">{it.nome}</span>
                  <span className="block truncate text-[8px] text-muted">{it.qtd}</span>
                </span>
                <span className="text-center">
                  <span className="inline-flex items-center rounded-full bg-success/15 px-1.5 py-0.5 text-[8px] font-semibold text-navy">
                    {it.fontes}
                  </span>
                </span>
                <span className="text-right font-mono">{it.preco}</span>
                <span className="text-right font-mono font-semibold">{it.total}</span>
              </div>
            ))}
          </FloatingCard>
        </div>

        {/* Cursor */}
        <div className="cursor absolute z-10 text-navy" style={{ left: '78%', top: '60%' }}>
          <MousePointer2 className="h-5 w-5 fill-white drop-shadow" />
        </div>
      </div>

      {/* ── Camada B: Relatório de pesquisa de preços (PDF) ────────────── */}
      <div className="report absolute inset-0" style={{ opacity: 0, transform: 'scale(0.95)' }}>
        <FloatingCard elevated className="h-full overflow-hidden !p-0">
          {/* Faixa institucional */}
          <div className="h-1.5 w-full bg-action" />
          <div className="space-y-2.5 p-4">
            {/* Cabeçalho institucional + título do item */}
            <div className="report-row">
              <div className="mb-2 flex items-center gap-2">
                <img src="/govprecos-simbolo-azul.svg" alt="GovPreços" className="h-5 w-5 object-contain" />
                <p className="font-mono text-[9px] uppercase tracking-wider text-muted">
                  Pesquisa de Preços · Controle Interno
                </p>
              </div>
              <p className="text-[13px] font-bold text-navy">ITEM 11: Tesoura reta íris 11 cm</p>
              {/* Divider em gradiente (navy → verde → transparente) */}
              <div
                className="mt-1.5 h-[3px] w-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #001F3E 0%, #7CCD48 55%, transparent 100%)' }}
              />
              <p className="mt-2 text-[10px] text-muted">
                Quantidade: <span className="font-semibold text-navy">20 UN</span> · Fontes consideradas:{' '}
                <span className="font-semibold text-navy">5 de 5</span>
              </p>
            </div>

            {/* Caixas de valor (accent verde à esquerda) */}
            <div className="report-row grid grid-cols-2 gap-2">
              {[
                { label: 'Preço estimado (mediana)', valor: 'R$ 20,00' },
                { label: 'Valor total estimado', valor: 'R$ 400,00' },
              ].map((b) => (
                <div
                  key={b.label}
                  className="relative overflow-hidden rounded-lg border border-ice bg-surface py-2 pl-3 pr-2"
                >
                  <span
                    className="absolute inset-y-0 left-0 w-1.5"
                    style={{ background: 'linear-gradient(180deg, #001F3E 0%, #7CCD48 100%)' }}
                  />
                  <p className="text-[8px] font-semibold uppercase tracking-wide text-muted">{b.label}</p>
                  <p className="font-mono text-lg font-extrabold text-navy">{b.valor}</p>
                </div>
              ))}
            </div>

            {/* Estatísticas das fontes */}
            <div className="report-row">
              <p className="mb-1.5 border-l-2 border-success pl-2 text-[10px] font-bold uppercase tracking-wide text-navy">
                Estatísticas das fontes
              </p>
              <div className="grid grid-cols-4 gap-1.5">
                {ESTATISTICAS.map((s) => (
                  <div key={s.label} className="relative overflow-hidden rounded-md border border-ice bg-white px-1.5 py-1.5">
                    <span className="absolute inset-x-0 top-0 h-0.5 bg-action/60" />
                    <p className="text-[7px] font-semibold uppercase tracking-wide text-muted">{s.label}</p>
                    <p className={`font-mono text-[11px] font-bold ${s.cor}`}>{s.valor}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabela de fontes de pesquisa */}
            <div className="report-row">
              <p className="mb-1.5 border-l-2 border-success pl-2 text-[10px] font-bold uppercase tracking-wide text-navy">
                Fontes de pesquisa
              </p>
              <div className="overflow-hidden rounded-md border border-ice">
                {/* Cabeçalho navy + sublinha verde */}
                <div
                  className="grid grid-cols-[16px_42px_1fr_56px_58px] items-center gap-1 px-2 py-1.5 text-[7.5px] font-bold uppercase tracking-wide text-white"
                  style={{ background: '#001F3E', borderBottom: '2px solid #7CCD48' }}
                >
                  <span>#</span>
                  <span>Tipo</span>
                  <span>Origem / processo</span>
                  <span className="text-right">Valor</span>
                  <span className="text-right">Data</span>
                </div>
                {FONTES.map((f, i) => (
                  <div
                    key={f.origem}
                    className={`grid grid-cols-[16px_42px_1fr_56px_58px] items-center gap-1 px-2 py-1.5 text-[9px] text-navy ${
                      i % 2 === 1 ? 'bg-surface' : 'bg-white'
                    }`}
                  >
                    <span className="font-semibold">{i + 1}</span>
                    <span>
                      <span className="rounded bg-action px-1.5 py-0.5 text-[7px] font-bold uppercase text-white">
                        PNCP
                      </span>
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate">{f.origem}</span>
                      <span className="block truncate text-[7.5px] text-muted">Edital no PNCP · {f.ref}</span>
                    </span>
                    <span className="text-right font-mono">{f.valor}</span>
                    <span className="text-right font-mono text-[8px] text-muted">{f.data}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rodapé: prestação de contas + assinatura + selo */}
            <div className="report-row flex items-end justify-between border-t border-ice pt-2.5">
              <div>
                <p className="text-[8px] font-semibold uppercase tracking-wide text-muted">
                  Controle Interno / Prestação de Contas
                </p>
                <div className="mt-2.5 h-px w-28 bg-border" />
                <p className="mt-1 font-mono text-[8px] text-muted">Assinatura digital</p>
              </div>
              <span className="report-check inline-flex items-center gap-1 rounded-full bg-success/15 px-2 py-1 text-[9px] font-semibold text-navy">
                <Check className="h-3 w-3 text-success" />
                Pronto para auditoria
              </span>
            </div>
          </div>
        </FloatingCard>
      </div>
    </div>
  );
}

export default RelatoriosMockup;
