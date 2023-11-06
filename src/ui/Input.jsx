import styled, { css } from "styled-components";

export const Input = styled.input`
  backdrop-filter: blur(10px);
  width: 100%;
  height: 4rem;
  background-color: transparent;
  font-size: 1.5rem;
  border: 1px solid white;
  padding: 1rem 1.5rem;
  color: white;
  position: relative;

  ${(props) =>
    props.format === "textbox" &&
    css`
      height: 13rem;
    `}

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #181818;
  }

  ::placeholder {
    color: white;
    position: absolute;
    top: 0;
    left: 1.5rem; /* Ajusta la posición horizontal según tus necesidades */
    font-size: 1.5rem; /* Ajusta el tamaño de fuente del placeholder */
  }
`;
