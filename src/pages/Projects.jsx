import styled from "styled-components";

import { ContainerRigths, Rigths, RigthsLink } from "../ui/ContainerRigths";
import { Footer } from "../ui/Footer";
import { Line } from "../ui/Line";
import { Main } from "../ui/Main";
import Navbar from "../ui/Navbar";
import { Noise } from "../ui/Noise";
import { Section } from "../ui/Section";

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  flex: 25%;
  padding-top: 2rem;
`;

const Img = styled.img`
  width: 100%;
  height: 15rem;
  margin-top: -1.1rem;
  padding: 14px;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 35rem;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

function Projects() {
  return (
    <>
      <Navbar />
      <Section>
        <Main type="full">
          <Row>
            <Column>
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
            </Column>

            <Column>
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
            </Column>

            <Column>
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
            </Column>

            <Column>
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
