import styled, { css } from "styled-components";

export const H2 = styled.h2`
  ${(props) =>
    props.uppercase === "uppercase" &&
    css`
      text-transform: uppercase;
      font-size: 4.5rem;
      line-height: 5.5rem;
      padding: 2rem 0;
    `}

  ${(props) =>
    props.uppercase === "uppercase2" &&
    css`
      text-transform: uppercase;
      font-size: 7rem;
      line-height: 7rem;
    `}

  ${(props) =>
    props.space === "marginTop" &&
    css`
      font-size: 3.5rem;
      line-height: 5rem;
      padding: 2rem 0;
    `}

  @media (max-width: 1024px) {
    font-size: 3rem;
    line-height: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  @media (max-width: 425px) {
    font-size: 2rem;
  }

  text-wrap: balance;
  color: white;
  font-weight: 900;
  position: relative;
`;
