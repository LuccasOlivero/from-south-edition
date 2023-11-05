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
import { useLocation } from "react-router-dom";

const Img = styled.img`
  width: 100%;
  height: 15rem;
  margin-top: -1.1rem;
  padding: 14px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
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
                <Img src="/img2.png" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img4.png" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video.mp4" type="video/mp4" />
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
                    <source src="/video.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img3.png" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img5.png" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video.mp4" type="video/mp4" />
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
                    <source src="/video.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img2.png" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img4.png" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video.mp4" type="video/mp4" />
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
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Img src="/img1.png" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img3.png" alt="" />
                <Img src="/img4.png" alt="" />
                <VideoContainer>
                  <Video controls>
                    <source src="/video.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <VideoContainer>
                  <Video controls>
                    <source src="/video.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
              </motion.span>
            </Column>
          </Row>
        </Main>
      </Section>
      <Footer>
        <Noise></Noise>
        <Line></Line>
        <ContainerRigths>
          <Rigths>
            &copy; {new Date().getFullYear()} South Studio. All rights reserved.{" "}
          </Rigths>
          <RigthsLink href="#">Privacy Policy</RigthsLink>
          <RigthsLink href="#">Cookie Policy</RigthsLink>
        </ContainerRigths>
      </Footer>
    </>
  );
}

export default Projects;
