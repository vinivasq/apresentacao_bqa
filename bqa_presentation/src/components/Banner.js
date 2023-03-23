import React from "react";
import styled from "styled-components";
import banner from "../assets/images/banner.jpeg";

const StyledBanner = styled.div`
  width: 100%;
  height: 8.5rem;
  margin-top: 3rem;
  background-image: url(${banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Banner = () => {
  return <StyledBanner />;
};

export default Banner;
