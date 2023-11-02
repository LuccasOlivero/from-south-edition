import styled from "styled-components";

export const ContainerRigths = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 2rem;
`;

export const Rigths = styled.p`
  font-size: 1.5rem;
  color: white;
`;

export const RigthsLink = styled.a`
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 100;

  &:hover {
    color: #0f5b5b;
  }
`;
