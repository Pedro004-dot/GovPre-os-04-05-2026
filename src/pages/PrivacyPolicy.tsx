import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold">Política de Privacidade</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">1. Introdução</h2>
            <p className="text-gray-700 leading-relaxed">
              A GOVPREÇOS ("nós", "nosso" ou "nos") opera o site govprecos.com.br. Esta página informa você de nossas políticas sobre a coleta, uso e divulgação de dados pessoais quando você usa nosso site e as escolhas que você tem associadas a esses dados.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">2. Coleta de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Nós coletamos dados pessoais que você nos fornece diretamente, tais como:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Nome, endereço de e-mail e informações de contato</li>
              <li>Informações sobre sua organização e cargo</li>
              <li>Dados de login e autenticação</li>
              <li>Informações sobre sua atividade na plataforma</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">3. Uso de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Utilizamos os dados coletados para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fornecer, manter e melhorar nossos serviços</li>
              <li>Processar suas solicitações e transações</li>
              <li>Enviar comunicações técnicas e atualizações</li>
              <li>Responder a suas perguntas e fornecer suporte ao cliente</li>
              <li>Analisar tendências de uso e preferências</li>
              <li>Cumprir com obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">4. Compartilhamento de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Cumprir com requisitos legais ou regulamentações</li>
              <li>Proteger nossos direitos, privacidade, segurança ou propriedade</li>
              <li>Prestar serviços em seu nome com fornecedores confiáveis</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">5. Segurança de Dados</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas de segurança apropriadas para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia, firewalls e outros mecanismos de segurança para garantir a integridade de seus dados.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">6. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Nosso site utiliza cookies para melhorar sua experiência. Os cookies são pequenos arquivos de dados armazenados em seu dispositivo que nos ajudam a reconhecê-lo e personalizar seu acesso à nossa plataforma.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">7. Direitos do Usuário</h2>
            <p className="text-gray-700 leading-relaxed">
              De acordo com a legislação aplicável, você tem direitos sobre seus dados pessoais, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Direito de acessar seus dados</li>
              <li>Direito de corrigir dados inexatos</li>
              <li>Direito de solicitar a exclusão de seus dados</li>
              <li>Direito de se opor ao processamento de seus dados</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">8. Contato</h2>
            <p className="text-gray-700 leading-relaxed">
              Se você tiver dúvidas sobre nossa Política de Privacidade, entre em contato conosco:
            </p>
            <div className="bg-gray-100 p-6 rounded-lg space-y-2">
              <p className="text-gray-700"><strong>Email:</strong> govprecos@gmail.com</p>
              <p className="text-gray-700"><strong>Telefone:</strong> (31) 9 9990-1464</p>
              <p className="text-gray-700"><strong>Localização:</strong> Timóteo/MG</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#162137]">9. Alterações nesta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre qualquer alteração postando a nova Política de Privacidade nesta página e atualizando a data de "Última atualização".
            </p>
            <p className="text-gray-500 text-sm">Última atualização: 21 de fevereiro de 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
