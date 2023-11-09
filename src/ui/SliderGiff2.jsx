import styled from "styled-components";
import { DivSlideTrack } from "./DivSliderTrack";
import { DivSlider } from "./DivSlider";

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

export default function SliderGif2({ scroll }) {
  return (
    <DivSlider>
      <DivSlideTrack scroll={scroll}>
        <DivSlide>
          <Img src="/gif5.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif6.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif9.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif10.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif11.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif12.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif13.gif" alt="test" />
        </DivSlide>
      </DivSlideTrack>
    </DivSlider>
  );
}
