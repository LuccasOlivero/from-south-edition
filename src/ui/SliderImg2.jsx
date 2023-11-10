import styled from "styled-components";
import { DivSlider } from "./DivSlider";
import { DivSlideTrack } from "./DivSliderTrack";
import { DivSlide } from "./DivSlide";

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 35rem;
  border-radius: 9%;
`;

export default function Slider2({ scroll }) {
  return (
    <DivSlider>
      <DivSlideTrack scroll={scroll}>
        <DivSlide>
          <Img src="/img7.png" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/img6.jpg" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/img5.jpg" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/img4.jpg" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/img3.png" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/img2.png" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/img1.png" alt="test" />
        </DivSlide>
      </DivSlideTrack>
    </DivSlider>
  );
}
