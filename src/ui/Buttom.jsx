import styled, { css } from "styled-components";

export const Buttom = styled.button`
  ${(props) =>
    props.type === "default" &&
    css`
      width: 16rem;
      height: 4.5rem;
      font-size: 1.8rem;
    `}

  ${(props) =>
    props.type === "circle" &&
    css`
      width: auto;
      padding: 0.6rem;
    `} 

  backdrop-filter: blur(10px);
  background-color: transparent;
  border: 1.5px solid white;
  color: white;
  border-radius: 8rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
  }

  @media (max-width: 768px) {
    width: 10rem;
    font-size: 1rem;
    height: 3rem;
  }
`;

Buttom.defaultProps = {
  type: "default",
};
