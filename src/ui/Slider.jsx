import styled from "styled-components";
import { scroll1, scroll2 } from "../styles/Keyframes";

const DivSlider = styled.div`
  width: 33rem;
  left: -20rem;
  height: auto;
  margin: auto;
  position: relative;
`;

const DivSlideTrack = styled.div`
  display: flex;
  flex-direction: column;
  rotate: 15deg;
  width: calc(200px * 14);
  gap: 2rem 0;
  position: relative;

  animation: ${(props) => (props.scroll === "scroll1" ? scroll1 : scroll2)} 200s
    linear infinite;
  -webkit-animation: ${(props) =>
      props.scroll === "scroll1" ? scroll1 : scroll2}
    200s linear infinite;
`;

const DivSlide = styled.div`
  width: 30rem;
  position: relative;
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 35rem;
  border-radius: 9%;
`;

export default function Slider({ scroll }) {
  return (
    <DivSlider>
      <DivSlideTrack scroll={scroll}>
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
