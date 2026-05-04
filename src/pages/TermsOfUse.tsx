import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TermsOfUse() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#162137] text-white py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 mb-6 hover:text-[#00853c] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          <h1 className="text-4xl font-bold">Termos de Uso</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">1. Aceitação dos Termos</h2>
            <p className="text-gray-700 leading-relaxed">
              Ao acessar e utilizar o site e a plataforma GOVPREÇOS, você concorda em estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, você não pode usar nossos serviços.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">2. Uso Permitido</h2>
            <p className="text-gray-700 leading-relaxed">
              Você concorda em usar a plataforma GOVPREÇOS apenas para fins legítimos e de acordo com todas as leis e regulamentações aplicáveis. Você não pode:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Usar a plataforma para qualquer atividade ilegal ou não autorizada</li>
              <li>Interferir ou prejudicar a operação da plataforma</li>
              <li>Tentar ganhar acesso não autorizado a sistemas ou dados</li>
              <li>Reproduzir, duplicar ou copiar conteúdo sem permissão</li>
              <li>Transmitir malware ou código prejudicial</li>
              <li>Violar os direitos de terceiros</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">3. Contas de Usuário</h2>
            <p className="text-gray-700 leading-relaxed">
              Se você criar uma conta na plataforma GOVPREÇOS, você é responsável por manter a confidencialidade de suas credenciais de login e pela segurança de sua conta. Você concorda em:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fornecer informações precisas e completas durante o registro</li>
              <li>Manter sua senha segura e confidencial</li>
              <li>Notificar-nos imediatamente de qualquer uso não autorizado de sua conta</li>
              <li>Aceitar responsabilidade por todas as atividades em sua conta</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">4. Propriedade Intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Todo o conteúdo, características e funcionalidades da plataforma GOVPREÇOS são propriedade exclusiva da GOVPREÇOS, seus licenciadores ou outros provedores de conteúdo. Você não pode reproduzir, distribuir ou usar qualquer parte da plataforma sem permissão escrita explícita.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">5. Isenção de Garantias</h2>
            <p className="text-gray-700 leading-relaxed">
              A plataforma GOVPREÇOS é fornecida "no estado em que se encontra" sem garantias de qualquer tipo. Não garantimos que:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>O serviço será ininterrupto ou livre de erros</li>
              <li>Os resultados obtidos sejam precisos ou confiáveis</li>
              <li>Qualquer defeito será corrigido</li>
              <li>O serviço atenderá a seus requisitos</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">6. Limitação de Responsabilidade</h2>
            <p className="text-gray-700 leading-relaxed">
              Em nenhuma circunstância a GOVPREÇOS será responsável por danos indiretos, incidentais, especiais, consequentes ou punitivos resultantes do uso ou da impossibilidade de usar a plataforma, mesmo que tenhamos sido avisados da possibilidade de tais danos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">7. Links de Terceiros</h2>
            <p className="text-gray-700 leading-relaxed">
              A plataforma pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, precisão ou práticas de privacidade desses sites. Seu acesso a sites de terceiros está sob seu próprio risco e está sujeito aos termos e políticas desses sites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">8. Modificações dos Serviços</h2>
            <p className="text-gray-700 leading-relaxed">
              Reservamos o direito de modificar ou descontinuar qualquer parte da plataforma a qualquer momento, com ou sem aviso prévio. Não seremos responsáveis por qualquer modificação, suspensão ou descontinuação dos serviços.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">9. Conformidade com Leis</h2>
            <p className="text-gray-700 leading-relaxed">
              A plataforma GOVPREÇOS é operada em conformidade com a Lei Federal 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos) e outras regulamentações aplicáveis. Todos os usuários devem cumprir com as leis e regulamentações federais, estaduais e municipais.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">10. Terminação</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos terminar ou suspender seu acesso à plataforma imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo se você violar estes Termos de Uso.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">11. Lei Aplicável</h2>
            <p className="text-gray-700 leading-relaxed">
              Estes Termos de Uso são regidos e interpretados de acordo com as leis do Brasil, sem considerar seus conflitos de disposições legais. Qualquer litígio será submetido à jurisdição exclusiva dos tribunais no Brasil.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">12. Contato</h2>
            <p className="text-gray-700 leading-relaxed">
              Se você tiver perguntas sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg space-y-2">
              <p className="text-gray-700"><strong>Email:</strong> govprecos@gmail.com</p>
              <p className="text-gray-700"><strong>Telefone:</strong> (31) 9 9990-1464</p>
              <p className="text-gray-700"><strong>Localização:</strong> Timóteo/MG</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">13. Alterações nos Termos</h2>
            <p className="text-gray-700 leading-relaxed">
              Reservamos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor quando publicadas na plataforma. Seu uso continuado da plataforma após as alterações constitui sua aceitação dos novos termos.
            </p>
            <p className="text-gray-500 text-sm">Última atualização: 21 de fevereiro de 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
