import { NavLink } from "react-router-dom";
import { ContainerRigths, Rigths, RigthsLink } from "../ui/ContainerRigths";
import { Footer } from "../ui/Footer";
import { Line } from "../ui/Line";
import { Noise } from "../ui/Noise";

function FooterComplete() {
  return (
    <Footer>
      <Noise />
      <Line />

      <ContainerRigths>
        <Rigths>
          &copy; {new Date().getFullYear()} South Studio. All rights reserved.{" "}
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
