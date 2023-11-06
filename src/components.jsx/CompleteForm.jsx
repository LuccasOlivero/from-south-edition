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
import { useRef } from "react";

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
`;

function CompleteForm() {
  const { register, handleSubmit } = useForm();
  const form = useRef(null);

  function onSubmit(data) {
    console.log(data);

    emailjs
      .sendForm(
        "service_kywvyrk",
        "template_gpuvigi",
        form.current,
        "aJJGUNBmIZNi_LrLb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            id="user_name"
            type="text"
            placeholder="Name"
            name="user_name"
            {...register("user_name", { required: "This filed is required" })}
          />
          <Input
            name="user_email"
            id="user_email"
            type="email"
            placeholder="Email"
            {...register("user_email", { required: "This filed is required" })}
          />
          <TextArea
            name="message"
            id="message"
            type="text-box"
            placeholder="Type your message..."
            {...register("message", { required: "This filed is required" })}
          />

          <Buttom id="button">Submit</Buttom>
        </Form>

        {/* <form id="form">
          <div className="field">
            <label htmlFor="from_name">from_name</label>
            <input type="text" name="from_name" id="from_name" />
          </div>
          <div className="field">
            <label htmlFor="message">message</label>
            <input type="text" name="message" id="message" />
          </div>
          <div className="field">
            <label htmlFor="email_id">email_id</label>
            <input type="text" name="email_id" id="email_id" />
          </div>
          <div className="field">
            <label htmlFor="reply_to">reply_to</label>
            <input type="text" name="reply_to" id="reply_to" />
          </div>

          <input type="submit" id="button" value="Send Email" />
        </form> */}
      </Section>
    </Contact>
  );
}

export default CompleteForm;
