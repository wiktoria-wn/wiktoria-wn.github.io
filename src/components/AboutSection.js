import React from "react";
import Skills from "./SkillsSection";
import { Title, Subtitle } from "../styles/MainStyles";
import {
  AboutSection,
  Header,
  HeaderSection,
  AboutImage,
  Description,
} from "../styles/AboutSectionStyles.js";
import Image from "../assets/aboutimage.svg";

function About() {
  return (
    <AboutSection>
      <HeaderSection>
        <Header>
          <Title>Hello World!</Title>
          <Subtitle>A few words about me</Subtitle>
        </Header>
        <AboutImage src={Image} />
      </HeaderSection>
      <Description>
        Hello! As you probably know from the home page my name is Wiktoria and
        I'm Junior JavaScript Developer. But what skills do really I have?
      </Description>
      <Skills />
    </AboutSection>
  );
}

export default About;
