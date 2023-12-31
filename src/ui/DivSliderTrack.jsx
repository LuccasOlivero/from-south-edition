import styled from "styled-components";
import { scroll1, scroll2 } from "../styles/Keyframes";

export const DivSlideTrack = styled.div`
  display: flex;
  flex-direction: column;
  rotate: 20deg;
  width: 100%;
  gap: 2rem 0rem;
  position: relative;

  animation: ${(props) => (props.scroll === "scroll1" ? scroll1 : scroll2)} 300s
    linear infinite;

  -webkit-animation: ${(props) =>
      props.scroll === "scroll1" ? scroll1 : scroll2}
    300s linear infinite;
`;
