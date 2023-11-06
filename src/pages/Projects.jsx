import styled from "styled-components";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { ContainerRigths, Rigths, RigthsLink } from "../ui/ContainerRigths";
import { Footer } from "../ui/Footer";
import { Line } from "../ui/Line";
import { Main } from "../ui/Main";
import Navbar from "../ui/Navbar";
import { Noise } from "../ui/Noise";
import { Section } from "../ui/Section";
import { Row } from "../ui/Row";
import { Column } from "../ui/Column";
import { VideoContainer } from "../ui/VideoContainer";
import { NavLink, useLocation } from "react-router-dom";

const Img = styled.img`
  width: 100%;
  height: 15rem;
  margin-top: -1.1rem;
  padding: 14px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

function Projects() {
  const location = useLocation();

  useEffect(() => {
    // Scrolls to the top when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <Section>
        <Main type="full">
          <Row>
            <Column>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <VideoContainer>
                  <Video controls>
                    <source src="/video.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img8.jpeg" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video2.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img4.jpeg" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video3.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img3.png" alt="" />
              </motion.span>
            </Column>

            <Column>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.55 }}
              >
                <Img src="/img1.png" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video6.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img9.jpeg" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video5.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img10.jpeg" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video4.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
              </motion.span>
            </Column>

            <Column>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <VideoContainer>
                  <Video controls>
                    <source src="/video7.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img11.jpeg" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video8.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img12.jpeg" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video9.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img13.jpeg" alt="" />
              </motion.span>
            </Column>

            <Column>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Img src="/img16.jpeg" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video10.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img18.jpeg" alt="" />
                <Img src="/img17.jpeg" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video11.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <VideoContainer>
                  <Video controls>
                    <source src="/video12.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
              </motion.span>
            </Column>
          </Row>
        </Main>
      </Section>
      <Footer>
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
      </Footer>
    </>
  );
}

export default Projects;
