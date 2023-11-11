import styled from "styled-components";

export const SliderContainer = styled.div`
  height: 200%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  position: absolute;
  z-index: -1;
  background-color: black;
  overflow: hidden;
`;
