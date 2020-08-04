import styled from "styled-components";

export const TopBar = styled.div`
  color: #434140;
  font-weight: medium;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  border-bottom: 2px solid #1b919e;
  align-items: center;
  padding: 10px 40px;
  position:fixed;
  top:0;
  right: 0;
  width: 100vw;
  background: #fff;

  @media(max-width: 375px){
        justify-content: center;
    }
`;

export const Menu = styled.ul`
    display: flex;
`;

export const MenuItem = styled.li`
  margin: 0 8px;
  display: inline;

  &&:hover{
      color: #1b919e;
      cursor: pointer;
  }
`;
