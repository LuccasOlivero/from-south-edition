import styled from "styled-components";
import css from "styled-components";

export const Main = styled.main`
  ${(props) =>
    props.type === "test" &&
    css`
      z-index: 100;
      background-color: red;
      flex-direction: column;
      color: red;
    `}

  padding-top: 6rem;
  display: flex;
  justify-content: space-between;
  height: 90vh;
  position: relative;
`;
