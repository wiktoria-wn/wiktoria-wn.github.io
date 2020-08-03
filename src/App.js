import React from 'react';
import {MainContent} from './styles/MainStyles';
import Nav from './components/Navigation';
import Home from './components/HomeSection';
import About from './components/AboutSection';
import Work from './components/WorkSection';
import Contact from './components/ContactSection';

function App() {
  return (
    <MainContent>
      <Nav/>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
    </MainContent>
  );
}

export default App;
