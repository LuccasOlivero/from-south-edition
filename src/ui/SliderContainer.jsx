import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: absolute;
  z-index: -1;
  background-color: black;
  overflow: hidden;
`;
