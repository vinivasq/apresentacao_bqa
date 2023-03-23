import React from "react";
import styled from "styled-components";
import { InstagramLogo } from "@phosphor-icons/react";
import ufpelLogo from "../assets/images/logo_ufpel.png";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  height: 100%;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 0.875rem;
  color: #171717;
`;

const StyledTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`;

const StyledImage = styled.img`
  width: auto;
  height: 9rem;
`;

const TalkToUs = () => {
  return (
    <StyledNav>
      <StyledTitle>Conheça mais</StyledTitle>
      <StyledLink href="https://www.instagram.com/quimicadealimentos_ufpel/">
        <InstagramLogo color="blue" size={22} />
        @quimicadealimentos_ufpel
      </StyledLink>
      <StyledLink href="https://www.instagram.com/alimentos_industrializados/">
        <InstagramLogo color="blue" size={22} />
        @alimentos_industrializados
      </StyledLink>
      <StyledLink href="https://www.instagram.com/ufpeloficial/">
        <StyledImage src={ufpelLogo} alt="Logo da UFPEL" />
      </StyledLink>
    </StyledNav>
  );
};

export default TalkToUs;
