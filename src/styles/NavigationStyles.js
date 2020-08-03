import styled from "styled-components";

export const TopBar = styled.div`
  color: #434140;
  font-weight: medium;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid #1b919e;
  align-items: center;
  padding: 10px 40px;
`;

export const Media = styled.div`
  display: flex;

  &&:hover{
      color: #1b919e;
      cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 32px;
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  margin-left: 32px;
  display: inline;

  &&:hover{
      color: #1b919e;
      cursor: pointer;
  }
`;
