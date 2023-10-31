import styled from "styled-components";
import { css } from "styled-components";

export const H2 = styled.h2`
  ${(props) =>
    props.uppercase === "uppercase" &&
    css`
      text-transform: uppercase;
    `}

  ${(props) =>
    props.space === "marginTop" &&
    css`
      padding-top: 2rem;
    `}

  font-size: 4.5rem;
  color: white;
  margin: 2rem 0;
  font-weight: 900;
  line-height: 5.5rem;
`;
