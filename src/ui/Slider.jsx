import styled from "styled-components";
import { scroll } from "../styles/Keyframes";

const DivSlider = styled.div`
  width: 33rem;
  left: -33rem;
  height: auto;
  margin: auto;
  position: relative;
`;

const DivSlideTrack = styled.div`
  display: flex;
  flex-direction: column;
  rotate: 13deg;
  width: calc(200px * 14);
  gap: 2rem 0;

  animation: ${scroll} 200s linear infinite;
  -webkit-animation: ${scroll} 200s linear infinite;
`;

const DivSlide = styled.div`
  width: 30rem;
`;

const Img = styled.img`
  width: 100%;
  border-radius: 9%;
`;

export default function Slider() {
  return (
    <DivSlider>
      <DivSlideTrack>
        <DivSlide>
          <Img src="../../public/img1.jpg" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="../../public/img1.jpg" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="../../public/img1.jpg" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="../../public/img1.jpg" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="../../public/img2.jpg" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="../../public/img1.jpg" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="../../public/img3.jpg" alt="test" />
        </DivSlide>
      </DivSlideTrack>
    </DivSlider>
  );
}
