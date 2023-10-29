import styled, { keyframes } from "styled-components";
import { spin } from "../styles/Keyframes";

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 2rem;
  font-weight: bold;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${spin} 50s linear infinite;
`;

const Text = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  /* transform-origin: 0 300px; */
`;

function SpinningText({ text }) {
  const length = text.length;
  const deg = 360 / length;

  return (
    <Container>
      <TextWrapper>
        <p>
          {text.split("").map((letter, i) => (
            <Text key={i} style={{ transform: `rotate(${deg * i})deg` }}>
              {letter}
            </Text>
          ))}
        </p>
      </TextWrapper>
    </Container>
  );
}

export default SpinningText;
