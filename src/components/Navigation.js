import React from 'react';
import {TopBar, Media, Icon, Menu, MenuItem} from '../styles/NavigationStyles';
import Github from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';


function Nav() {
    return (
      <TopBar>
          <Media>
              <Icon src={Github} alt="github"/>
              <Icon src={LinkedIn} alt="linkedin"/>
          </Media>
          <Menu>
              <MenuItem>Home</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Work</MenuItem>
              <MenuItem>Contact</MenuItem>
          </Menu>
      </TopBar>
    );
  }
  
  export default Nav;