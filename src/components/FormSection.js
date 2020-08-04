import React from "react";
import {
  FormSection,
  FormArea,
  Form,
  Input,
  TextInput,
  SendButton,
  ContactImage,
} from "../styles/FormSectionStyles.js";
import Contact from '../assets/contactimage.svg';

class MyForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
      e.preventDefault()

      const {name, email, message} = this.state
  }

  render() {
    return (
      <FormSection>
        <FormArea>
          <Form>
            <Input
              placeholder="Your name"
              type="text"
              name="name"
              onChange={this.handleChange}
            />
            <Input
              placeholder="Your e-mail"
              type="text"
              name="e-mail"
              onChange={this.handleChange}
            />
            <TextInput
              placeholder="Your message"
              type="text"
              name="e-mail"
              onChange={this.handleChange}
            />
            <SendButton>Send</SendButton>
          </Form>
        </FormArea>
        <ContactImage src={Contact} />
      </FormSection>
    );
  }
}

export default MyForm;
