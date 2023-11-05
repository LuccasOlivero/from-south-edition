import styled from "styled-components";

import { H2 } from "../ui/H2";
import { Buttom } from "../ui/Buttom";
import { Noise } from "../ui/Noise";
import { H1 } from "../ui/H1";

const Test = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding: 0 13rem;
`;

function PageNotFound() {
  return (
    <Test>
      <Noise />
      <H1 type="bigger">404</H1>
      <H2 as="h2" uppercase="uppercase2">
        UH OH! You&apos;re lost.
      </H2>

      <H2 as="h2" uppercase="uppercase">
        the page you are looking for does not exist. <br />
        how you got here is a mystery. <br />
        but you can click the button below to go back to the homepage.
      </H2>

      <Buttom>Home</Buttom>
    </Test>
  );
}

export default PageNotFound;
