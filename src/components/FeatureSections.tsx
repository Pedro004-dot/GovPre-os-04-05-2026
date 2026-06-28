import FeatureSection from './FeatureSection';
import DocumentosMockup from './mockups/DocumentosMockup';
import PCAMockup from './mockups/PCAMockup';
import PesquisaPrecosMockup from './mockups/PesquisaPrecosMockup';
import RelatoriosMockup from './mockups/RelatoriosMockup';

function FeatureSections() {
  return (
    <div id="funcionalidades">
      <FeatureSection
        id="pesquisa-precos"
        title="A cesta de preços montada em minutos, com cada referência validada"
        description="A GovIA busca referências no PNCP, Painel de Preços, notas fiscais e contratos similares, valida cada item, sinaliza outliers e calcula o preço estimado com score de conformidade — pronto para sustentação."
        highlights={[
          'Match automático entre item pesquisado e referências de mercado',
          'Tags de fonte: PNCP, Painel, CATMAT/CATSER, nota fiscal, contrato similar',
          'Outliers excluídos com justificativa rastreável',
          'Score de conformidade e preço defensável conforme Art. 23',
        ]}
        mockup={<PesquisaPrecosMockup />}
        bg="surface"
      />

      <FeatureSection
        id="documentos"
        title="DFD, ETP, TR e mapa de risco redigidos com base na Lei 14.133"
        description="Descreva a necessidade da contratação. A GovIA elabora os documentos de planejamento com cláusulas fundamentadas na legislação e na jurisprudência do TCU — e mapeia os riscos com severidade classificada."
        highlights={[
          'Redação assistida de DFD, ETP e Termo de Referência',
          'Chips de artigos da Lei 14.133 e acórdãos do TCU',
          'Mapa de risco com classificação por severidade',
          'Estrutura alinhada aos modelos da AGU e à realidade do órgão',
        ]}
        mockup={<DocumentosMockup />}
        reversed
        bg="white"
      />

      <FeatureSection
        id="pca"
        title="Secretarias conectadas a um PCA consolidado e alinhado"
        description="Cada secretaria envia suas demandas. A GovIA consolida tudo em um Plano de Contratações Anual único, conectando as áreas demandantes ao setor central de compras — sem planilhas dispersas."
        highlights={[
          'Demandas das secretarias fluem para o setor de compras',
          'Consolidação automática em um plano único',
          'Visibilidade do status de cada demanda',
          'Coordenação entre áreas sem retrabalho',
        ]}
        mockup={<PCAMockup />}
        bg="surface"
      />

      <FeatureSection
        id="relatorios"
        title="Da pesquisa de preços ao relatório auditável, em um clique"
        description="Cada cotação vira um relatório oficial de pesquisa de preços: preço estimado, estatísticas das fontes e o extrato completo com rastreabilidade no PNCP — pronto para o controle interno e a prestação de contas."
        highlights={[
          'Preço estimado e valor total calculados por item',
          'Estatísticas das fontes: média, mediana, mínimo e máximo',
          'Extrato de fontes com rastreabilidade no PNCP',
          'Documento auditável para controle interno e prestação de contas',
        ]}
        mockup={<RelatoriosMockup />}
        reversed
        bg="white"
      />
    </div>
  );
}

export default FeatureSections;
