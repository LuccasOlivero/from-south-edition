import styled from "styled-components";

export const Contact = styled.div`
  /* max-width: 2500px; */
  height: 100vh;
  width: 100%;
  background-color: black;
  position: relative;
`;

export const DivLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  color: white;
  gap: 10rem;
  width: 60%;

  @media (max-width: 425px) {
    width: 100%;
  }
`;
