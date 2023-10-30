import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  border-bottom: 0.5px solid #464646;
  position: fixed;
  width: 100%;
  z-index: 100;
  padding: 0 13rem;
`;

const NavList = styled.ul`
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    background-color: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover {
    color: red;
  }
`;

const Logo = styled.picture`
  background-image: url(../../public/logo.svg);
  background-position: center;
  background-size: cover;
  height: 4rem;
  width: 4rem;
  display: block;
`;

function Navbar() {
  return (
    <Nav>
      <Logo />
      <NavList>
        <li>
          <StyledNavLink to="/about">
            <span>about</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/services">
            <span>services</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/projects">
            <span>projects</span>
          </StyledNavLink>
        </li>
      </NavList>
    </Nav>
  );
}

export default Navbar;
