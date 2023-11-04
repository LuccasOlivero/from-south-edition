import styled, { css } from "styled-components";

export const H1 = styled.main`
  ${(props) =>
    props.type === "form" &&
    css`
      font-size: 7rem;
    `}

  ${(props) =>
    props.type === "title" &&
    css`
      font-size: 7.5rem;
      margin-top: 9rem;
    `}

    @media (max-width: 768px) {
    font-size: 4rem;
  }

  -webkit-text-stroke: 1px white;
  font-weight: bold;
  color: transparent;
  text-transform: uppercase;
`;
