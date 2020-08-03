import styled from 'styled-components'

export const AboutSection = styled.div`
    background: #EBFAFC;
    padding: 10px 50px;

    @media(max-width: 375px){
        padding: 10px 30px;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;

    @media(max-width: 375px){
        text-align: center;
    }
`

export const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    border-bottom: 2px solid #1B919E;
    
    @media(max-width: 375px){
        padding: 10px 0 10px 0;
    }
`

export const AboutImage = styled.img`
    width: 233px;
    height: 197px;

    @media(max-width: 375px){
        display: none;
    }
`

export const Description = styled.p`
    color: #434140;
    padding: 10px 30px;
    font-size: 18pt;
    line-height: 31px;

    @media(max-width: 375px){
        padding: 10px 0 10px 0;
    }
`