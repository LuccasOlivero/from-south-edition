import styled, { css } from "styled-components";

export const Main = styled.main`
  ${(props) =>
    props.type === "full" &&
    css`
      height: 100%;
      justify-content: center;
    `}

  ${(props) =>
    props.type === "viewport" &&
    css`
      height: 100vh;
      justify-content: space-between;
    `}
    
  align-items: center;
  padding-top: 6rem;
  display: flex;
  position: relative;
  padding-bottom: 5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
  }
`;

Main.defaultProps = {
  type: "viewport",
};
