import styled from "styled-components";

export const Column = styled.div`
  flex: 25%;
  padding-top: 2rem;

  @media (max-width: 768px) {
    flex: 50%;
  }

  @media (max-width: 425px) {
    flex: 100%;
  }
`;
