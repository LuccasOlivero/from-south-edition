import styled from "styled-components";

export const Video = styled.div`
  width: 35%;
  height: 90%;
  position: relative;
  margin: 0 2rem;
  max-height: 70rem;
  max-width: 70rem;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
