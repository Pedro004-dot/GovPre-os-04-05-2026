import { FileSearch, Gavel, Scale } from 'lucide-react';
import FloatingCard from './ui/FloatingCard';

const items = [
  {
    icon: Scale,
    title: 'Lei 14.133/2021',
    description:
      'Toda entrega — preço estimado, documentos e plano — fundamentada na Nova Lei de Licitações e Contratos Administrativos.',
  },
  {
    icon: Gavel,
    title: 'Jurisprudência do TCU',
    description:
      'Cláusulas e metodologias embasadas em acórdãos e orientações do Tribunal de Contas da União.',
  },
  {
    icon: FileSearch,
    title: 'Trilha de auditoria',
    description:
      'Cada referência de preço, exclusão de outlier e versão de documento registrada — pronta para controle interno.',
  }
];

function Compliance() {
  return (
    <section id="conformidade" className="bg-surface py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-navy md:text-4xl">
            Certeza jurídica em cada tela — não só na promessa
          </h2>
          <p className="mt-4 text-lg text-muted">
            A GovIA traduz automação em conformidade legal. Badges verdes, referências a artigos e
            score de defensibilidade fazem parte da interface — não de um anexo escondido.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <FloatingCard key={item.title} elevated className="h-full">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-ice">
                  <Icon className="h-5 w-5 text-navy" />
                </div>
                <h3 className="mb-2 font-bold text-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </FloatingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Compliance;
