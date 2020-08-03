import React from 'react';
import {HomeSection, HomeImage} from '../styles/HomeSectionStyles';
import {Title, Subtitle} from '../styles/MainStyles';
import ReactImage from '../assets/homeimage.svg'


function Home() {
    return (
        <HomeSection>
            <Title>Wiktoria Niezborała</Title>
            <Subtitle>Junior Javascript Developer</Subtitle>
            <HomeImage src={ReactImage}/>
        </HomeSection>
    );
  }
  
  export default Home;