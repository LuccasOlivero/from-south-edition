import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
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

    color: black;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: crimson;
  }
`;

const Logo = styled.picture`
  font-size: 3rem;
`;

function Navbar() {
  return (
    <Nav>
      <Logo>logo</Logo>
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
