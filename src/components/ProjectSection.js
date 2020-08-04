import React from "react";
import { Subtitle, Description } from "../styles/MainStyles";
import {
  ProjectsSection,
  Project,
  ProjectContent,
  ProjectImage,
} from "../styles/ProjectSectionStyles.js";
import UpdateImage from '../assets/update.svg'
import RebrandingImage from '../assets/rebranding.svg'

function Projects() {
  return (
    <ProjectsSection>
      <Project>
        <ProjectContent>
          <Subtitle blue>Customer website upadte</Subtitle>
          <Description project>
            The client was a UK Brand that helps companies tackle new market
            realities. On this project, I was responsible for visual changes and
            adding cookies to the customers' website. Tech-stack: React.js and
            Cookiebot.
          </Description>
        </ProjectContent>
        <ProjectImage src={UpdateImage} />
      </Project>
      <Project>
        <ProjectImage src={RebrandingImage} />
        <ProjectContent>
          <Subtitle blue>Mobile application rebranding</Subtitle>
          <Description project>
            The application allows user quick payments using the phone as a
            terminal and can be used by seller. I was responsible for creating
            new functionaities in this app. Tech-stack: ReactNative.
          </Description>
        </ProjectContent>
      </Project>
    </ProjectsSection>
  );
}

export default Projects;
