import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./Navbar";

const StyledAppLayout = styled.div`
  background-color: grey;
  width: 100%;
  height: 100vh;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Navbar />

      <main>imagen</main>

      <section>
        <Outlet />
      </section>
    </StyledAppLayout>
  );
}

export default AppLayout;
