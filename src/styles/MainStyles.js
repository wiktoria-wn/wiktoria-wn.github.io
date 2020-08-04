import styled from "styled-components";

export const MainContent = styled.div`
  background: #fff;
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  font-family: "Lato", sans-serif;
`;

export const SectionContent = styled.div`
  padding: 60px 50px;
  background: ${(props) => (props.blue ? "#ebfafc" : "white")};

  @media (max-width: 375px) {
    padding: 10px 30px;
  }
`;

export const Title = styled.p`
  font-size: 45pt;
  color: #1b919e;
  margin: 0;
  font-weight: bold;

  @media(max-width: 375px){
        font-size: 26pt;
    }
`;

export const Subtitle = styled.p`
  margin-bottom: 0;
  font-size: 24pt;
  color: ${(props) => (props.blue ? "#1b919e" : "#434140")};
  font-weight: bold;

  @media(max-width: 375px){
        font-size: 18pt;
    }
`;

export const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 30px;
    justify-content: space-between;
    border-bottom: 2px solid #1B919E;
    
    @media(max-width: 375px){
        text-align: center;
        justify-content: center;
        padding: 10px 0 10px 0;
    }
`

export const Description = styled.p`
    color: #434140;
    padding: ${(props) => (props.project ? "none" : "10px 30px")};
    font-size: 18pt;
    line-height: 31px;

    @media(max-width: 375px){
        padding: 10px 0 10px 0;
        justify-content: center;
        font-size: 12pt;
    }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;
