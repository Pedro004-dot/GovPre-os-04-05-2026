import { ReactNode } from 'react';


interface FeatureSectionProps {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  mockup: ReactNode;
  reversed?: boolean;
  bg?: 'white' | 'surface';
}

function FeatureSection({
  id,
  title,
  description,
  highlights,
  mockup,
  reversed = false,
  bg = 'white',
}: FeatureSectionProps) {
  const bgClass = bg === 'surface' ? 'bg-surface' : 'bg-white';

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            reversed ? 'lg:[&>*:first-child]:order-2' : ''
          }`}
        >
          <div className="space-y-6">
            
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-4xl">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-muted">{description}</p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-success" />
                  <span className="text-navy">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>{mockup}</div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
