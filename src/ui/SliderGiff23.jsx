import styled from "styled-components";
import { scroll1, scroll2 } from "../styles/Keyframes";

const DivSlider = styled.div`
  width: 33rem;
  left: -29rem;
  height: auto;
  margin: auto;
  position: relative;
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
        <DivSlide>
          <Img src="/gif14.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif15.gif" alt="test" />
        </DivSlide>
        <DivSlide>
          <Img src="/gif16.gif" alt="test" />
        </DivSlide>
      </DivSlideTrack>
    </DivSlider>
  );
}