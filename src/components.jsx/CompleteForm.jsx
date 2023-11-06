import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

import { Contact, DivLinks } from "../ui/Contact";
import { H1 } from "../ui/H1";
import { H2 } from "../ui/H2";
import { Line } from "../ui/Line";
import { LineV2 } from "../ui/LineV2";
import { Noise } from "../ui/Noise";
import { Section } from "../ui/Section";
import { Input } from "../ui/Input";
import { Buttom } from "../ui/Buttom";
import { Form } from "../ui/Form";
import styled from "styled-components";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const TextArea = styled.textarea`
  backdrop-filter: blur(10px);
  width: 100%;
  height: 16rem;
  background-color: transparent;
  font-size: 1.5rem;
  border: 1px solid white;
  padding: 1rem 1.5rem;
  color: white;
  position: relative;

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #181818;
  }
`;

function CompleteForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const form = useRef(null);

  async function onSubmit() {
    try {
      setIsLoading(true);
      await emailjs
        .sendForm(
          "service_kywvyrk",
          "template_gpuvigi",
          form.current,
          "aJJGUNBmIZNi_LrLb"
        )
        .then(() => {
          toast.success("mensage enviado correctamente");
          reset();
        });
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      toast.error("El mensaje no puedo enviarse, por favor, intente de nuevo");
    }
  }

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

          <NavLink to="https://www.linkedin.com/in/lucas-olivero-319090264/">
            <Buttom type="circle">
              <FontAwesomeIcon icon={faLink} size="2x" />
            </Buttom>
          </NavLink>
        </DivLinks>

        <Form onSubmit={handleSubmit(onSubmit)} ref={form}>
          <Input
            name="user_name"
            id="user_name"
            type="text"
            placeholder="Name"
            {...register("user_name")}
            required
            disabled={isLoading}
          />
          <Input
            name="user_email"
            id="user_email"
            type="email"
            placeholder="Email"
            {...register("user_email")}
            required
            disabled={isLoading}
          />
          <TextArea
            name="message"
            id="message"
            type="text-box"
            placeholder="Type your message..."
            {...register("message")}
            required
            disabled={isLoading}
          />

          <Buttom id="button" disabled={isLoading}>
            {isLoading ? "Sending..." : "Submit"}
          </Buttom>
        </Form>
      </Section>
    </Contact>
  );
}

export default CompleteForm;
