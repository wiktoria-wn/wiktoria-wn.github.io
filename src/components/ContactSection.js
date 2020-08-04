import React from "react";
import { Title } from "../styles/MainStyles";
import MyForm from '../components/FormSection';
import {ContactSection} from '../styles/FormSectionStyles';

function Contact() {
  return (
    <ContactSection>
      <Title center>Get in touch!</Title>
      <MyForm />
    </ContactSection>
  );
}

export default Contact;
