import styled from "styled-components";

export const Footer = styled.div`
  height: 15vh;
  width: 100%;
  background-color: black;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 10vh;
  }

  @media (max-width: 425px) {
    padding: 0 1rem;
  }
`;
