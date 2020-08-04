import React from "react";
import Projects from "../components/ProjectSection";
import { Title, Subtitle } from "../styles/MainStyles";
import { HeaderSection, Description, Header, SectionContent } from "../styles/MainStyles";

function Work() {
  return (
    <SectionContent>
      <HeaderSection>
        <Header>
          <Title>My Projects</Title>
          <Subtitle>What have I do in past few months</Subtitle>
        </Header>
      </HeaderSection>
      <Description>
        For almost a year I was working for STX Next one of the biggest software
        houses in Poland, I’ve been a part of 3 projects from different
        countries here are two of them:
      </Description>
      <Projects/>
    </SectionContent>
  );
}

export default Work;
