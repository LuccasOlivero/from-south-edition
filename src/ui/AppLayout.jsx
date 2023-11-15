import styled from "styled-components";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

import SpinningText from "./SpinningText";
import CompleteForm from "../components.jsx/CompleteForm";
import SliderBackground from "../components.jsx/SliderBackground";

import { Section } from "./Section";
import { H1 } from "./H1";
import { H2 } from "./H2";
import { Buttom } from "./Buttom";
import { Picture } from "./Picture";
import { Main } from "./Main";
import { Line } from "./Line";
import { Noise } from "./Noise";
import { Strong } from "./Strong";

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
      <SliderBackground />
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
              the full spectrun of
              <br /> content creation
            </H2>

            <NavLink to="/projects">
              <Buttom>Selected Work</Buttom>
            </NavLink>
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
            As a video editor specializing in the art of short-form content, my
            work is heavily influenced by the distinctive style of{" "}
            <Strong>Alex Hormozi</Strong>. My primary focus is on creating
            videos that not only captivate but also excel in drawing in users,
            ultimately achieving hundreds of views. I bring a unique touch to my
            video editing. I am dedicated to crafting visually stunning,
            attention-grabbing short-form videos that are tailored to hook
            viewers and drive impressive audience engagement.
          </motion.span>
        </H2>
        <Noise />
      </Section>
      <CompleteForm></CompleteForm>
    </StyledAppLayout>
  );
}

export default AppLayout;
