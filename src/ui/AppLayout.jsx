import styled from "styled-components";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

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
import { Noise } from "./Noise";
import { Footer } from "./Footer";
import { ContainerRigths, Rigths, RigthsLink } from "./ContainerRigths";
import CompleteForm from "../components.jsx/CompleteForm";
import { useLocation } from "react-router-dom";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

function AppLayout() {
  const location = useLocation();

  const svgRef = useRef(null);
  const containerRef = useRef(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

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

  useEffect(() => {
    // Scrolls to the top when the location changes
    window.scrollTo(0, 0);
  }, [location]);

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
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 300 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <H1 type="title">South Studio</H1>
            <H2 uppercase="uppercase">
              he full spectrun of
              <br /> content creation
            </H2>
            <Buttom>Selected Work</Buttom>
          </motion.div>

          <SpinningText text="watch show reel - watch show reel - ">
            <div ref={svgRef}>
              <Picture />
            </div>
          </SpinningText>
        </Main>
      </Section>
      <Line />
      <Section type="text">
        <H2 as="p" space="marginTop" ref={ref}>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 300 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 1 }}
          >
            At FromSouth, we know that no two projects are alike. We approach
            each job with a fresh and expansive mindset to create a curated,
            customized experience for every client. We love pushing the limits
            of what is achievable to bring each design into a unique reality. We
            specialize in short-form video editing, allowing us to provide a
            creative and effective approach to visual communication.
          </motion.span>
        </H2>
        <Noise />
      </Section>

      <CompleteForm></CompleteForm>

      <Footer>
        <Noise />
        <Line />

        <ContainerRigths>
          <Rigths>
            &copy; {new Date().getFullYear()} South Studio. All rights reserved.{" "}
          </Rigths>
          <RigthsLink href="#">Privacy Policy</RigthsLink>
          <RigthsLink href="#">Cookie Policy</RigthsLink>
        </ContainerRigths>
      </Footer>
    </StyledAppLayout>
  );
}

export default AppLayout;
