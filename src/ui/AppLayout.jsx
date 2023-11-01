import styled from "styled-components";
import { useRef } from "react";

import Navbar from "./Navbar";
import SpinningText from "./SpinningText";
import Slider1 from "./SliderImg1";
import Slider2 from "./SliderImg2";
import SliderGif from "./SliderGif";
import SliderGif2 from "./SliderGiff2";

import { Section } from "./Section";
import { H1 } from "./H1";
import { H2 } from "./H2";
import { Buttom } from "./Buttom";
import { Picture } from "./Picture";
import { Main } from "./Main";
import { SliderContainer } from "./SliderContainer";
import { Line } from "./Line";
import { noiseBg } from "../styles/Keyframes";

const StyledAppLayout = styled.div`
  background: radial-gradient(at left top, #010101, #000000e2);
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const Footer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  overflow: hidden;
  position: relative;
`;

const Contact = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  overflow: hidden;
  position: relative;
`;

const Noise = styled.div`
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent
    url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
  background-repeat: repeat;
  animation: noiseBg 0.2s infinite;
  opacity: 0.9;
  visibility: visible;
`;

const DivContact = styled.div`
  display: flex;
  height: 90vh;
  width: 80%;
  margin: 0 auto;
  /* background-color: yellow; */
`;

const DivLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: white;
  width: 20%;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const Icon = styled.div`
  font-size: 2rem;
  color: cyan;
`;

function AppLayout() {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const svg = svgRef.current;

    if (container && svg) {
      const containerRect = container.getBoundingClientRect();
      const cursorX = e.clientX - containerRect.left;
      const cursorY = e.clientY - containerRect.top;

      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;

      const angle = Math.atan2(cursorY - centerY, cursorX - centerX);

      svg.style.transform = `rotate(${angle * (180 / Math.PI)}deg)`;
    }
  };

  return (
    <StyledAppLayout ref={containerRef} onMouseMove={handleMouseMove}>
      <SliderContainer>
        <Slider1 scroll="scroll1" />
        <Slider2 scroll="scroll2" />

        <SliderGif scroll="scroll1" />
        <SliderGif2 scroll="scroll2" />

        <Slider1 scroll="scroll1" />
      </SliderContainer>
      <Navbar />
      <Section type="margin">
        <Main>
          <div>
            <H1>South Studio</H1>
            <H2 uppercase="uppercase">
              he full spectrun of
              <br /> content creation
            </H2>
            <Buttom>Selected Work</Buttom>
          </div>

          <SpinningText text="watch show reel - watch show reel - ">
            <div ref={svgRef}>
              <Picture />
            </div>
          </SpinningText>
        </Main>
      </Section>

      <Line />

      <Section type="margin">
        <H2 as="p" space="marginTop">
          At FromSouth, we know that no two projects are alike. We approach each
          job with a fresh and expansive mindset to create a curated, customized
          experience for every client. We love pushing the limits of what is
          achievable to bring each design into a unique reality. We specialize
          in short-form video editing, allowing us to provide a creative and
          effective approach to visual communication.
        </H2>
      </Section>

      <Contact>
        <Line />
        <Noise>
          <Section type="flex">
            <DivLinks>
              <H1>
                lets <br />
                talk turkey
              </H1>

              <div>
                <Icon>FACE</Icon>
                <Icon>link</Icon>
                <Icon>instagram</Icon>
              </div>
            </DivLinks>

            <Form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Type your message..." />
              <Buttom>Submit</Buttom>
            </Form>
          </Section>
        </Noise>
      </Contact>
    </StyledAppLayout>
  );
}

export default AppLayout;
