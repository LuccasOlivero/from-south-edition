import styled from "styled-components";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { Main } from "../ui/Main";
import { Section } from "../ui/Section";
import { Row } from "../ui/Row";
import { Column } from "../ui/Column";
import { VideoContainer } from "../ui/VideoContainer";
import CompleteForm from "../components.jsx/CompleteForm";

const Img = styled.img`
  width: 100%;
  margin-bottom: 1rem;
  position: relative;

  @media (max-width: 1024px) {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Video = styled.video`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-bottom: 0.5rem;
  }
`;

function Projects() {
  const location = useLocation();

  useEffect(() => {
    // Scrolls to the top when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  function handlePlay(event) {
    const allVideos = document.querySelectorAll("video");
    allVideos.forEach((video) => {
      if (video !== event.currentTarget) {
        video.pause();
      }
    });
  }

  return (
    <>
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
                  <Video onClick={handlePlay} controls>
                    <source src="/video.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img8.jpg" alt="" />
                <VideoContainer>
                  <Video controls onClick={handlePlay}>
                    <source src="/video2.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img4.jpg" alt="" />
                <VideoContainer>
                  <Video controls onClick={handlePlay}>
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
                  <Video controls onClick={handlePlay}>
                    <source src="/video6.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img9.jpg" alt="" />
                <VideoContainer>
                  <Video controls onClick={handlePlay}>
                    <source src="/video5.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img10.jpg" alt="" />
                <VideoContainer>
                  <Video controls onClick={handlePlay}>
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
                  <Video controls onClick={handlePlay}>
                    <source src="/video7.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img11.jpg" alt="" />
                <VideoContainer>
                  <Video controls onClick={handlePlay}>
                    <source src="/video8.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img12.jpg" alt="" />
                <VideoContainer>
                  <Video controls onClick={handlePlay}>
                    <source src="/video9.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img13.jpg" alt="" />
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
                <Img src="/img16.jpg" alt="" />
                <VideoContainer>
                  <Video controls onClick={handlePlay}>
                    <source src="/video10.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <Img src="/img18.jpg" alt="" />
                <Img src="/img17.jpg" alt="" />
                <VideoContainer>
                  <Video controls onClick={handlePlay}>
                    <source src="/video11.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
                <VideoContainer>
                  <Video controls onClick={handlePlay}>
                    <source src="/video12.mp4" type="video/mp4" />
                  </Video>
                </VideoContainer>
              </motion.span>
            </Column>
          </Row>
        </Main>
      </Section>

      <CompleteForm />
    </>
  );
}

export default Projects;
