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

const StyledAppLayout = styled.div`
  background: radial-gradient(at left top, #010101, #000000e2);
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
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

      <Section>
        <Main>
          <div>
            <H1>South Studio</H1>
            <H2>
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

      <Section>
        <H2>tests</H2>
      </Section>
    </StyledAppLayout>
  );
}

export default AppLayout;
