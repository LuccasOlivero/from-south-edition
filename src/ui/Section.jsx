import styled, { css } from "styled-components";

export const Section = styled.section`
  ${(props) =>
    props.type === "margin" &&
    css`
      margin: 0 auto;
      background: radial-gradient(at left top, #010101, #000000ce);

      @media (max-width: 768px) {
        background: radial-gradient(at left top, #010101, #000000a8);
      }
    `}

  ${(props) =>
    props.type === "text" &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(at left top, #010101, #000000ce);
    `}

  ${(props) =>
    props.type === "flex" &&
    css`
      display: flex;
      justify-content: space-between;
      background: radial-gradient(at left top, #010101, #000000ce);

      @media (max-width: 425px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}

    ${(props) =>
    props.type === "deff" &&
    css`
      display: flex;
      justify-content: center;
      background-color: black;
    `}
    
  @media (max-width: 768px) {
    padding: 0 6rem;
  }

  padding: 0 13rem;
  height: 100%;
  width: 100%;
`;

Section.defaultProps = {
  type: "deff",
};
