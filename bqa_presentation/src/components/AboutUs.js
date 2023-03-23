import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  background-color: #ffffff;
  border-radius: 0px 0px 5px 5px;
  padding: 0.5rem;
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledTitle = styled.h1`
  font-size: 1.125rem;
`;

const StyledList = styled.ul`
  list-style: circle;
  margin: 0;
  padding-left: 1.5rem;
`;

const AboutUs = () => {
  return (
    <StyledMain>
      <StyledTitle>Sobre o curso</StyledTitle>
      <p>
        Químico de Alimentos por formação pode atuar na área de planejamento e
        execução de qualidade das etapas do processo de produção e distribuição
        de alimentos, contemplando a obtenção, processamento e comercialização
        de matérias-primas de diversas origens.
      </p>
      <StyledList>
        <li>
          Recepção, análise e armazenamento de insumos e matérias-primas
          pertinentes.
        </li>
        <li>
          Responder tecnicamente por unidades, processos e produtos alimentares,
          estações de tratamento de água e resíduos, bem como por laboratórios
          de análise físico-química, microbiológica, sensorial e outros
          pertinentes à área.
        </li>
      </StyledList>
      <p>
        A grade curricular abrange disciplinas como química orgânica,
        bioquímica, microbiologia, análise físico-química de alimentos e
        diversas tecnologias voltadas a alimentos.
      </p>
    </StyledMain>
  );
};

export default AboutUs;
