import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./Navbar";
import { useEffect, useState } from "react";

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
  font-size: 5rem;
  color: white;
  text-transform: uppercase;
  margin: 1rem 0rem;
`;

const Buttom = styled.button`
  width: 16rem;
  height: 5rem;
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

function AppLayout() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  console.log(coords);

  return (
    <StyledAppLayout>
      <Section>
        <Navbar />

        <main>
          <StyledH1>South Studio</StyledH1>
          <StyledH2>
            he full spectrun of
            <br /> content creation
          </StyledH2>
          <Buttom>Selected Work</Buttom>
        </main>

        <section>
          <Outlet />
        </section>
      </Section>
    </StyledAppLayout>
  );
}

export default AppLayout;
