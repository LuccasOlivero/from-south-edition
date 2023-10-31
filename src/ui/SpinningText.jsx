import styled from "styled-components";
import { spin } from "../styles/Keyframes";

const Container = styled.div`
  position: absolute;
  width: 230px;
  height: 230px;
  background-color: transparent;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  right: 0;
  bottom: 0;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${spin} 50s linear infinite;
  color: white;
  text-transform: uppercase;
`;

const Text = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: 5px 120px;
`;

const Picture = styled.picture`
  background-image: url(/logo.svg);
  display: flex;
  width: 9rem;
  height: 9rem;
`;

function SpinningText({ text }) {
  const length = text.length;
  const deg = 360 / length;

  return (
    <Container>
      <TextWrapper>
        <p>
          {text.split("").map((letter, i) => (
            <Text key={i} style={{ transform: `rotate(${deg * i}deg)` }}>
              {letter}
            </Text>
          ))}
        </p>
      </TextWrapper>
      <Picture />
    </Container>
  );
}

export default SpinningText;
