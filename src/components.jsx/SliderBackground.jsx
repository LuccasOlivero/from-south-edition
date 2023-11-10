import { SliderContainer } from "../ui/SliderContainer";
import SliderGif2 from "../ui/SliderGiff2";
import SliderGif3 from "../ui/SliderGiff23";
import Slider1 from "../ui/SliderImg1";
import Slider2 from "../ui/SliderImg2";

function SliderBackground() {
  return (
    <>
      <SliderContainer>
        <Slider1 scroll="scroll1" />
        <Slider2 />
        <SliderGif3 scroll="scroll1" />
        <SliderGif2 />
        <Slider1 scroll="scroll1" />
      </SliderContainer>
    </>
  );
}

export default SliderBackground;
