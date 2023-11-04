import styled, { css } from "styled-components";

export const Main = styled.main`
  ${(props) =>
    props.type === "full" &&
    css`
      height: 100%;
    `}

  ${(props) =>
    props.type === "viewport" &&
    css`
      height: 100vh;
    `}

  align-items: center;
  padding-top: 6rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-bottom: 5rem;
`;

Main.defaultProps = {
  type: "viewport",
};
