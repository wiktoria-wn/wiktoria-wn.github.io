import styled from "styled-components";

export const MainContent = styled.div`
  background: #fff;
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato", sans-serif;
`;

export const Title = styled.p`
  font-size: 45pt;
  color: #1b919e;
  margin: 0;
  font-weight: bold;

  @media(max-width: 375px){
        font-size: 32pt;
    }
`;

export const Subtitle = styled.p`
  margin-bottom: 0;
  font-size: 24pt;
  color: ${(props) => (props.blue ? "#1b919e" : "#434140")};
  font-weight: bold;

  @media(max-width: 375px){
        font-size: 23pt;
    }
`;
