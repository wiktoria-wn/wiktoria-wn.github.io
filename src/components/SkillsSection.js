import React from "react";
import {SkillsSection, Skill, SkillList, SkillItem} from '../styles/SkillsSectionStyles';
import {Subtitle} from '../styles/MainStyles';

function Skills() {
  return (
    <SkillsSection>
      <Skill>
        <Subtitle blue>Technologies</Subtitle>
        <SkillList>
          <SkillItem>JavaScript Ecma 5, Ecma 6</SkillItem>
          <SkillItem>TypeScript</SkillItem>
          <SkillItem>PHP</SkillItem>
          <SkillItem>MySql</SkillItem>
          <SkillItem>ReactNative</SkillItem>
          <SkillItem>HTML5, CSS3, XML, JSON</SkillItem>
        </SkillList>
      </Skill>
      <Skill>
        <Subtitle blue>Libraries</Subtitle>
        <SkillList>
          <SkillItem>React.js</SkillItem>
          <SkillItem>Node.js</SkillItem>
          <SkillItem>jQuery.js</SkillItem>
        </SkillList>
      </Skill>
      <Skill>
        <Subtitle blue>Languages</Subtitle>
        <SkillList>
          <SkillItem>English B2</SkillItem>
          <SkillItem>Polish native</SkillItem>
        </SkillList>
      </Skill>
    </SkillsSection>
  );
}

export default Skills;
