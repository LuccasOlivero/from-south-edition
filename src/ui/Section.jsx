import styled, { css } from "styled-components";

export const Section = styled.section`
  ${(props) =>
    props.type === "margin" &&
    css`
      margin: 0 auto;
    `}

  ${(props) =>
    props.type === "flex" &&
    css`
      display: flex;
      /* justify-content: space-between; */
    `}
  padding: 0 13rem;
  height: 100vh;
  width: 100%;
`;
