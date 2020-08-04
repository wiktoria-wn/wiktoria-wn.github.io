import styled from "styled-components";

export const ProjectsSection = styled.div`
display: flex;
flex-direction: column;
align-content: center;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 30px;
  align-items: center;
  margin: 20px 0;

  @media(max-width: 375px){
      flex-direction: column;
  }
`;

export const ProjectContent = styled.div`
  flex-direction: column;
  max-width: 750px;
`;

export const ProjectImage = styled.img`
  width: 208px;
  height: 189px;

  @media(max-width: 375px){
      display: none;
  }
`;
