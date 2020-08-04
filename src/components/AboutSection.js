import React from "react";
import Skills from "./SkillsSection";
import { Title, Subtitle, SectionContent } from "../styles/MainStyles";
import { HeaderSection, Description, Header } from "../styles/MainStyles";

function About() {
  return (
    <SectionContent blue>
      <HeaderSection>
        <Header>
          <Title>Hello World!</Title>
          <Subtitle>A few words about my skills</Subtitle>
        </Header>
      </HeaderSection>
      <Description>
        Hello! As you probably know from the home page my name is Wiktoria and
        I'm Junior JavaScript Developer. But what skills do really I have?
      </Description>
      <Skills />
    </SectionContent>
  );
}

export default About;
