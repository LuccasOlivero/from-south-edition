import { NavLink } from "react-router-dom";
import { ContainerRigths, Rigths, RigthsLink } from "../ui/ContainerRigths";
import { Footer } from "../ui/Footer";
import { Line } from "../ui/Line";
import { Noise } from "../ui/Noise";
import styled from "styled-components";

const By = styled.a`
  font-size: 1.5rem;
  color: #4a4a4a;
  cursor: pointer;
  position: absolute;
  z-index: 100;
  bottom: 0;
  margin-bottom: 1.3rem;

  &:hover {
    color: #0f5b5b;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function FooterComplete() {
  return (
    <Footer>
      <Noise />
      <Line />

      <ContainerRigths>
        <By href="https://www.linkedin.com/in/lucas-olivero-319090264/">
          by Lucas Olivero
        </By>
        <Rigths>
          &copy; {new Date().getFullYear()} South Studio. All rights reserved.
        </Rigths>
        <NavLink to="/policy/privacy-policy">
          <RigthsLink>Privacy Policy</RigthsLink>
        </NavLink>
        <NavLink to="/policy/cookie-policy">
          <RigthsLink>Cookie Policy</RigthsLink>
        </NavLink>
      </ContainerRigths>
    </Footer>
  );
}

export default FooterComplete;
