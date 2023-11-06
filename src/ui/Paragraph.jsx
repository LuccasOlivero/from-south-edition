import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  ${(props) =>
    props.type === "policy" &&
    css`
      font-size: 2rem;
      line-height: 2.5rem;
      margin: 0.5rem 0;
    `}

  ${(props) =>
    props.type === "policy2" &&
    css`
      font-size: 2rem;
      line-height: 2.5rem;
      margin: 0.5rem 0 6rem 0;
    `}

  ${(props) =>
    props.type === "default" &&
    css`
      font-size: 2.5rem;
      line-height: 3rem;
      margin: 1rem 0rem;
    `}

  color: white;
  text-wrap: balance;
  width: 100%;

  @media (max-width: 1440px) {
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    line-height: 2.5rem;
  }
`;

Paragraph.defaultProps = {
  type: "default",
};
