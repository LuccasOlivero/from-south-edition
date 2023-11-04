import styled from "styled-components";

export const Buttom = styled.button`
  backdrop-filter: blur(10px);
  width: 16rem;
  height: 4.5rem;
  background-color: transparent;
  border: 1.5px solid white;
  color: white;
  border-radius: 8rem;
  font-size: 1.8rem;
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
