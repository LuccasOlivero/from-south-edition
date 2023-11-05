import styled from "styled-components";

export const ContainerRigths = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 2rem;
  @media (max-width: 768px) {
    gap: 0 1rem;
  }
`;

export const Rigths = styled.p`
  font-size: 1.5rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const RigthsLink = styled.span`
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 100;
  border-bottom: 1px solid white;

  &:hover {
    color: #0f5b5b;
    border-bottom: 1px solid #0f5b5b;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
