import styled, { css } from "styled-components";

export const Section = styled.section`
  ${(props) =>
    props.type === "margin" &&
    css`
      margin: 0 auto;
    `}

  ${(props) =>
    props.type === "text" &&
    css`
      display: flex;
      justify-content: start;
      align-items: center;
    `}

  ${(props) =>
    props.type === "flex" &&
    css`
      display: flex;
      height: 100%;
      /* background-color: red; */
      justify-content: space-between;
    `}

  background: radial-gradient(at left top, #010101, #000000e2);
  padding: 0 13rem;
  height: 100%;
  width: 100%;
`;
