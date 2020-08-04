import React from "react";
import {SkillsSection, Skill, SkillList, SkillItem} from '../styles/SkillsSectionStyles';
import {Subtitle} from '../styles/MainStyles';
import TechnologiesData from '../data/technologies.json';
import LibrariesData from '../data/libraries.json';
import LanguagesData from '../data/languages.json';

function Skills() {
  return (
    <SkillsSection>
      <Skill>
        <Subtitle blue>Technologies</Subtitle>
        <SkillList>
          {TechnologiesData.map((item) => {
            return(
            <SkillItem key={item.key}>{item.cotent}</SkillItem>
            )
          })}
        </SkillList>
      </Skill>
      <Skill>
        <Subtitle blue>Libraries</Subtitle>
        <SkillList>
          {LibrariesData.map((item) => {
            return(
            <SkillItem key={item.key}>{item.cotent}</SkillItem>
            )
          })}
        </SkillList>
      </Skill>
      <Skill>
        <Subtitle blue>Languages</Subtitle>
        <SkillList>
          {LanguagesData.map((item) => {
            return(
            <SkillItem key={item.key}>{item.cotent}</SkillItem>
            )
          })}
        </SkillList>
      </Skill>
    </SkillsSection>
  );
}

export default Skills;
