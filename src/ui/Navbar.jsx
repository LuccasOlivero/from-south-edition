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
  @media (max-width: 768px) {
    padding: 0 5rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2.4rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    text-decoration: none;

    background-color: transparent;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1.2rem 0;
    transition: all 0.3s;
    position: relative;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      gap: 1rem;
      padding: 0 1rem;
    }
  }
`;

const Logo = styled.picture`
  background-image: url(/logo.svg);
  background-position: center;
  background-size: cover;
  height: 5rem;
  width: 5rem;
  display: block;

  @media (max-width: 768px) {
    height: 3rem;
    width: 3rem;
  }
`;

const Span = styled.span`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: #0f5b5b;
    transition: width 0.5s ease-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

function Navbar() {
  return (
    <Nav>
      <StyledNavLink to="/">
        <Logo />
      </StyledNavLink>

      <NavList>
        <li>
          <StyledNavLink to="/about">
            <Span>about</Span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/projects">
            <Span>projects</Span>
          </StyledNavLink>
        </li>
      </NavList>
    </Nav>
  );
}

export default Navbar;
