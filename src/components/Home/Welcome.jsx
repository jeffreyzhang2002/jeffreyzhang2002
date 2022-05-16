import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: 100%;
    height: 100%;
        
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = Styled.h1`
    font-size: min(8em, 15vw);
    line-height: 100%;
    margin-left: 5%;
    color: ${props => props.theme.primary};
`

const SubTitle = Styled.h2`
    font-size: min(2em, 5vw);
    margin-left: 5%;
    margin-top: 1em;
    color: ${props => props.theme.primary};
`

const Wave = Styled.span`
    font-size: min(3em, 6vw);
    display: inline-block;
    transform-origin: 75% 75%;
    animation-fill-mode: forwards;
    
    ${Container}:hover &{
   
        @keyframes wave {
            0%  {transform: rotate(0deg);}
            20% {transform: rotate(16deg);}
            40% {transform: rotate(-8deg);}
            60% {transform: rotate(0deg);}
            80% {transform: rotate(8deg);}
            100% {transform: rotate(-16deg);}
        }
        
        animation: wave 2.6s infinite;
    }
`

export default class Welcome extends React.Component{

    render() {
        return(
            <Container>
                <SubTitle> <Wave> 👋 </Wave> Hey There! </SubTitle>
                <Title> I'm Jeffrey </Title>
                <SubTitle> I'm computer science student at the Georgia Institute of Technology.</SubTitle>
            </Container>
        )
    }

}
