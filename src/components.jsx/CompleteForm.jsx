import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Contact, DivLinks } from "../ui/Contact";
import { H1 } from "../ui/H1";
import { H2 } from "../ui/H2";
import { Line } from "../ui/Line";
import { LineV2 } from "../ui/LineV2";
import { Noise } from "../ui/Noise";
import { Section } from "../ui/Section";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../ui/Input";
import { Buttom } from "../ui/Buttom";
import { Form } from "../ui/Form";

function CompleteForm() {
  return (
    <Contact>
      <Line />
      <Noise />

      <Section type="flex">
        <DivLinks>
          <div>
            <H1 type="form" as="h2">
              Lets
            </H1>
            <H2 uppercase="uppercase2">connect!</H2>
            <LineV2 />
          </div>

          <FontAwesomeIcon icon={faLink} size="2x" />
        </DivLinks>

        <Form>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input
            id="myInput"
            type="text-box"
            placeholder="Type your message..."
            format="textbox"
          />
          <Buttom>Submit</Buttom>
        </Form>
      </Section>
    </Contact>
  );
}

export default CompleteForm;
