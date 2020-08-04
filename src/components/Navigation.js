import React from "react";
import { TopBar, Menu, MenuItem } from "../styles/NavigationStyles";
import MenuData from "../data/menu.json";

function Nav() {
  return (
    <TopBar>
      <Menu>
        {MenuData.map((item, index) => {
          return <MenuItem key={index.id}>{item.content}</MenuItem>;
        })}
      </Menu>
    </TopBar>
  );
}

export default Nav;
