import { ArrowRight, MessageSquare, Sparkles, Wand2 } from 'lucide-react';
import FloatingCard from './ui/FloatingCard';
import StatusBadge from './ui/StatusBadge';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Descreva a necessidade',
    description:
      'Informe o objeto, quantidade e contexto da contratação — em linguagem natural, sem formulários intermináveis.',
  },
  {
    icon: Wand2,
    step: '02',
    title: 'A GovIA executa',
    description:
      'A IA busca preços, redige documentos, consolida demandas ou gera relatórios — conforme o módulo acionado.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Revise e aprove',
    description:
      'O servidor público decide, julga e governa. A GovIA elimina semanas de formatação e busca manual.',
  },
];

function HowGovIAWorks() {
  return (
    <section id="govia" className="bg-navy py-16 text-white md:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <StatusBadge variant="action" className="mb-4 border-white/20 bg-white/10 text-white">
            Como funciona
          </StatusBadge>
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Um operador, quatro entregas — a GovIA amarra tudo
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Não é uma ferramenta passiva. É a IA que conduz a fase interna da contratação, da pesquisa
            de preços ao PCA, sempre com respaldo legal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative">
                <FloatingCard className="h-full border-white/10 bg-white/5 text-white backdrop-blur-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-sm text-success">{item.step}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/70">{item.description}</p>
                </FloatingCard>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-action md:block" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Pesquisa de preços', 'DFD · ETP · TR', 'PCA', 'Relatórios'].map((mod) => (
            <span
              key={mod}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium"
            >
              {mod}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowGovIAWorks;
