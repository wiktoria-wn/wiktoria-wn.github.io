import styled from "styled-components";

export const SkillsSection = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 375px){
    flex-direction: column;
    margin: 10px 0 10px 0;
  }
`;

export const Skill = styled.div`
  margin-top: 10px;
`;

export const SkillList = styled.ul`
  color: #434140;
  padding: 0;
`;

export const SkillItem = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  font-size: 16pt;

  @media(max-width: 375px){
    font-size: 12pt;
  }
`;
