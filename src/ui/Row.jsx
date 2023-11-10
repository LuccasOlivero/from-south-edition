import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 2600px;
  overflow: hidden;

  @media (max-width: 1024px) {
    gap: 1rem;
  }
`;
