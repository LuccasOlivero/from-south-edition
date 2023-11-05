import styled from "styled-components";

export const Paragraph = styled.p`
  color: white;
  font-size: 2.5rem;
  line-height: 3rem;
  margin: 2rem 0rem;
  text-wrap: balance;
  width: 100%;

  @media (max-width: 1440px) {
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    line-height: 2.5rem;
  }
`;
