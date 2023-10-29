import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import SpinningText from "./SpinningText";

const StyledAppLayout = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
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

          <SpinningText text="test test test test test test" />
        </Main>

        <section>
          <Outlet />
        </section>
      </Section>
    </StyledAppLayout>
  );
}

export default AppLayout;
