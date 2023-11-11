import styled, { css } from "styled-components";

export const DivSlider = styled.div`
  width: 90%;
  position: relative;

  ${(props) =>
    props.type === "hidden" &&
    css`
      @media (max-width: 1024px) {
        display: none;
      }
    `}

  @media (max-width: 768px) {
    left: -6.5rem;
  }
`;
