import React from "react";
import styled from "styled-components";
import bqaLogo from "../assets/images/logo_bqa.png";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  box-shadow: #78787875 0px 2px 6px;
  height: 2rem;
  text-align: center;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const StyledImage = styled.img`
  height: 100%;
  border-radius: 4px;
  justify-self: flex-start;
`;

const StyledTitle = styled.h2`
  font-size: 1rem;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledImage src={bqaLogo} alt="logo do curso quimica de alimentos" />
      <StyledTitle>Quimica de Alimentos</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
