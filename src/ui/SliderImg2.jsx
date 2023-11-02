import styled from "styled-components";
import { scroll1, scroll2 } from "../styles/Keyframes";

const DivSlider = styled.div`
  width: 33rem;
  left: -29rem;
  height: auto;
  margin: auto;
  position: relative;
  /* overflow: hidden; */
`;

const DivSlideTrack = styled.div`
  display: flex;
  flex-direction: column;
  rotate: 20deg;
  width: calc(200px * 14);
  gap: 2rem 0;
  position: relative;

  animation: ${(props) => (props.scroll === "scroll1" ? scroll1 : scroll2)} 370s
    linear infinite;
  -webkit-animation: ${(props) =>
      props.scroll === "scroll1" ? scroll1 : scroll2}
    370s linear infinite;
`;

const DivSlide = styled.div`
  width: 30rem;
  position: relative;
  /* overflow: hidden; */
`;

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
          <Img src="/img6.png" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/img5.png" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/img4.png" alt="test" />
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
