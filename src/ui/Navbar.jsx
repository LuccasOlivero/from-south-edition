import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  height: 6.5rem;
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
    border-bottom: 1px solid red;
  }
`;

const Logo = styled.picture`
  background-image: url(../../public/FromSouthLogo.png);
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
