import styled from "styled-components";
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useLocation } from "react-router-dom";
import Form from "../components.jsx/CompleteForm";

import { H1 } from "../ui/H1";
import { H2 } from "../ui/H2";
import { Main } from "../ui/Main";
import { Noise } from "../ui/Noise";
import { Section } from "../ui/Section";
import { Line } from "../ui/Line";
import { Paragraph } from "../ui/Paragraph";
import { Video } from "../ui/Video";
import { Strong } from "../ui/Strong";
import SliderBackground from "../components.jsx/SliderBackground";

const Test = styled.div`
  width: 50%;
  max-height: 70rem;
  max-width: 70rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function About() {
  const location = useLocation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log("ey");
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  useEffect(() => {
    // Scrolls to the top when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <SliderBackground />
      {/* <Navbar /> */}

      <Section type="text">
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
            <H1 type="title">south studio</H1>
            <H2 uppercase="uppercase2">pushing the creative limitis</H2>
            <Paragraph>
              As a video editor specializing in the art of short-form content,
              my work is heavily influenced by the distinctive style of{" "}
              <Strong>Alex Hormozi</Strong>. My primary focus is on creating
              videos that not only captivate but also excel in drawing in users,
              ultimately achieving hundreds of views. I bring a unique touch to
              my video editing. I am dedicated to crafting visually stunning,
              attention-grabbing short-form videos that are tailored to hook
              viewers and drive impressive audience engagement.
            </Paragraph>
          </motion.div>
        </Main>
      </Section>

      <Line></Line>

      <Section>
        <Noise></Noise>
        <Main>
          <Test ref={ref}>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: 300 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <H1 type="form" as="h2">
                since 2021
              </H1>
              <Paragraph>
                Step into the world of short form video editing where magic
                happens! With a journey that began in 2021, I&apos;ve been
                passionately dedicated to crafting captivating, bite-sized
                visual stories. Whether it&apos;s TikTok, Shorts, Reels, or any
                other platform, I&apos;m here to transform your ideas into
                unforgettable moments that resonate with your audience. As an
                editor with over
                <Strong> 20 million</Strong> views to my name, I specialize in
                creating content style of<Strong> Alex Hormozi </Strong> that
                not only captivates but generates significant engagement.
                Let&apos;s collaborate and make your vision come to life through
                the art of video editing. 🎥✨
              </Paragraph>
            </motion.span>
          </Test>

          <Video>
            <motion.span
              variants={{
                hidden: { opacity: 0, x: 300 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <video width="100%" height="100%" controls>
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </motion.span>
          </Video>
        </Main>
      </Section>

      <Form></Form>

      {/* <Footer>
        <Noise />
        <Line />

        <ContainerRigths>
          <Rigths>
            &copy; {new Date().getFullYear()} South Studio. All rights reserved.{" "}
          </Rigths>
          <NavLink to="/policy/privacy-policy">
            <RigthsLink>Privacy Policy</RigthsLink>
          </NavLink>
          <NavLink to="/policy/cookie-policy">
            <RigthsLink>Cookie Policy</RigthsLink>
          </NavLink>
        </ContainerRigths>
      </Footer> */}
    </>
  );
}

export default About;
