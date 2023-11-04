import styled from "styled-components";
import { H1 } from "../ui/H1";
import { H2 } from "../ui/H2";
import { Main } from "../ui/Main";
import Navbar from "../ui/Navbar";
import { Noise } from "../ui/Noise";
import { Section } from "../ui/Section";
import { Line } from "../ui/Line";
import { SliderContainer } from "../ui/SliderContainer";
import Slider1 from "../ui/SliderImg1";
import Slider2 from "../ui/SliderImg2";
import SliderGif from "../ui/SliderGif";
import SliderGif2 from "../ui/SliderGiff2";
import { Footer } from "../ui/Footer";
import { ContainerRigths, Rigths, RigthsLink } from "../ui/ContainerRigths";
import Form from "../components.jsx/CompleteForm";

const Paragraph = styled.p`
  color: white;
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin: 3rem 0rem;
  text-wrap: balance;
  width: 100%;
`;

const Video = styled.div`
  width: 190rem;
  height: 40rem;
  position: relative;
  margin: 0 2rem;

  @media (max-width: 1440px) {
    /* padding: 0 6rem; */
  }
`;

function About() {
  return (
    <>
      <SliderContainer>
        <Slider1 scroll="scroll1" />
        <Slider2 scroll="scroll2" />

        <SliderGif scroll="scroll1" />
        <SliderGif2 scroll="scroll2" />

        <Slider1 scroll="scroll1" />
      </SliderContainer>
      <Navbar />

      <Section type="text">
        <Main type="centerY">
          <div>
            <H1 type="title">south studio</H1>
            <H2 uppercase="uppercase2">pushing the creative limitis</H2>
            <Paragraph>
              At FromSouth, we know that no two projects are alike. We approach
              each job with a fresh and expansive mindset to create a curated,
              customized experience for every client. We love pushing the limits
              of what is achievable to bring each design into a unique reality.
              We specialize in short-form video editing, allowing us to provide
              a creative and effective approach to visual communication.
            </Paragraph>
          </div>
        </Main>
      </Section>

      <Line></Line>

      <Section>
        <Noise></Noise>
        <Main>
          <div>
            <H2 uppercase="uppercase2">since 2021</H2>
            <Paragraph>
              Step into the world of short form video editing where magic
              happens! With a journey that began in 2021, I&apos;ve been
              passionately dedicated to crafting captivating, bite-sized visual
              stories. Whether it&apos;s TikTok, Shorts, Reels, or any other
              platform, I&apos;m here to transform your ideas into unforgettable
              moments that resonate with your audience. As an editor with over
              <strong> 20 million</strong> views to my name, I specialize in
              creating content<strong> Hormozi style </strong>that not only
              captivates but generates significant engagement. Let&apos;s
              collaborate and make your vision come to life through the art of
              video editing. 🎥✨
            </Paragraph>
          </div>

          <Video>
            <video width="100%" height="100%" controls>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </Video>
        </Main>
      </Section>

      <Form></Form>

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

export default About;
