import { useEffect, useState } from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import SpinningText from "./SpinningText";
import Slider from "./Slider";

const StyledAppLayout = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
`;

const SliderContainer = styled.div`
  display: flex;
  position: absolute;
  overflow: hidden;
`;

const Section = styled.section`
  margin: 0 auto;
  width: 80%;
  height: 100%;
`;

const StyledH1 = styled.main`
  -webkit-text-stroke: 1px white;
  font-size: 36px;
  font-weight: bold;
  font-size: 7rem;
  color: transparent;
  text-transform: uppercase;
  margin-top: 9rem;
`;

const StyledH2 = styled.h2`
  font-size: 4rem;
  color: white;
  text-transform: uppercase;
  margin: 1rem 0rem;
  font-weight: 900;
`;

const Buttom = styled.button`
  width: 16rem;
  height: 4.5rem;
  background-color: transparent;
  border: 1.5px solid white;
  color: white;
  border-radius: 8rem;
  font-size: 1.8rem;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  height: 80vh;
  position: relative;
`;

const Section2 = styled.div`
  background-color: red;
  position: relative;
  height: 100%;
  display: flex;
  z-index: 200;
`;

function AppLayout() {
  // const [coords, setCoords] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleWindowMouseMove = (e) => {
  //     setCoords({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener("mousemove", handleWindowMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleWindowMouseMove);
  //   };
  // }, []);

  return (
    <StyledAppLayout>
      <SliderContainer>
        <Slider />
        <Slider />
        <Slider />
        <Slider />
      </SliderContainer>
      <Section>
        <Navbar />
        <Main>
          <div>
            <StyledH1>South Studio</StyledH1>
            <StyledH2>
              he full spectrun of
              <br /> content creation
            </StyledH2>
            <Buttom>Selected Work</Buttom>
          </div>
          <SpinningText text="watch show reel - watch show reel - " />
        </Main>
      </Section>

      <Section2>
        <h2>test</h2>
      </Section2>

      <Section2>
        <h2>test</h2>
      </Section2>

      <Section2>
        <h2>test</h2>
      </Section2>
      <Section2>
        <h2>test</h2>
      </Section2>
    </StyledAppLayout>
  );
}

export default AppLayout;
