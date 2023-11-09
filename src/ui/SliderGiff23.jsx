import styled from "styled-components";
import { DivSlider } from "./DivSlider";
import { DivSlideTrack } from "./DivSliderTrack";

const DivSlide = styled.div`
  width: 31rem;
  position: relative;
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 35rem;
  border-radius: 9%;
`;

export default function SliderGif3({ scroll }) {
  return (
    <DivSlider>
      <DivSlideTrack scroll={scroll}>
        <DivSlide>
          <Img src="/gif16.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif15.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif14.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif13.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif12.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif11.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif6.gif" alt="test" />
        </DivSlide>
      </DivSlideTrack>
    </DivSlider>
  );
}
