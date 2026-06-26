import { ExternalLink, ArrowRight } from 'lucide-react';
import { NEWSLETTER_URL, APP_LOGIN_URL } from '../../lib/config';

export function SessaoPublicaBloco() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#ABC5FF]/10 to-white border-t border-[#ABC5FF]/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#ABC5FF]/20 px-4 py-2 rounded-full mb-6">
              <ExternalLink className="w-4 h-4 text-[#006AFF]" />
              <span className="text-sm font-semibold text-[#001F3E]">Newsletter</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-[#001F3E] mb-6 leading-tight">
              Sessão Pública: análises que chegam toda semana
            </h2>
            
            <p className="text-[#001F3E]/70 text-lg leading-relaxed mb-8">
              Receba análises de especialistas sobre a Lei 14.133, jurisprudência do TCU, 
              metodologias de pesquisa de preços e as principais mudanças nas compras públicas. 
              <strong className="text-[#001F3E]">Gratuita, semanal e direto ao ponto.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {NEWSLETTER_URL && (
                <a
                  href={NEWSLETTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-[#006AFF] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#007BFF] transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  <span>Assinar newsletter</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              
              <a
                href={APP_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-[#006AFF] border-2 border-[#006AFF] px-8 py-4 rounded-xl font-semibold hover:bg-[#006AFF] hover:text-white transition-all duration-300"
              >
                <span>Conhecer o GovPreços</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:pl-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#ABC5FF]/20">
              <h3 className="text-xl font-semibold text-[#001F3E] mb-4">
                Temas recorrentes na Sessão Pública
              </h3>
              
              <ul className="space-y-3">
                {[
                  'Interpretação da Lei 14.133/2021',
                  'Jurisprudência do TCU em licitações',
                  'Metodologias de pesquisa de preços',
                  'Casos práticos de dispensas e inexigibilidades',
                  'Análise de editais e documentos',
                  'Tendências em compras governamentais'
                ].map((tema, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#006AFF] mt-2 shrink-0" />
                    <span className="text-[#001F3E]/80">{tema}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}