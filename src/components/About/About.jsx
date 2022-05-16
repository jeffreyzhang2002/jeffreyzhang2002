import React from "react";
import Styled from "styled-components";
import Arrow from "../Lib/Arrow";

import headshot from "../../assets/HeadShot.jpg"

const Container = Styled.div`
    width: 100vw;
    height: 90vh;
    
    background-color: ${props=>props.theme.backgroundSecondary};
 
    display: grid;
    grid-template-rows: 15% 85%;
   
    justify-items: center;
    align-items: center;
    
    position: relative;
`

const Box = Styled.div`

    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 30% 70%;
    
    @media only screen and (max-width: 992px) {
        grid-template-columns: 100%;
        grid-template-rows: 40% 60%;
    }

`

const Image = Styled.div`
    
    margin: 1.5em;

    
    border-radius: 1em;
    
    background-image: url(${headshot});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    @media only screen and (max-width: 992px) {
        margin: 0;
        background-size: contain;
    }
    
`

const Title = Styled.h2`

    width: fit-content;

   
    text-align: center;
    
    color: ${props => props.theme.primary};
    
    font-size: min(3em, 7vw);

`

const Callout = Styled.p`
    
    background-color: ${props=>props.theme.backgroundHighLight};
    padding: 1em;
    box-shadow: ${props => props.theme.shadowPrimary};
    
    height: fit-content;
    
    color: ${props => props.theme.primary};
    
    margin: 1.5em;
    font-size: min(2em, 4vw);
    
    border-radius: 1em;
    
`

export default class About extends React.Component {

    render() {
        return (
            <Container ref={this.props.reference}>
                <Title> About Me </Title>
                <Box>
                    <Image/>
                    <Callout>
                        Hey There! I'm Jeffrey Zhang. I'm currently a student at Georgia Institute of Technology majoring in computer science. My concentrations are
                        in artificial intelligence and computer systems. <br/><br/>

                        I choose these because I'm eager to learn more about robotics and machine learning and the overlap between these fields. <br/><br/>

                        Outside of class, I enjoy 3D modeling with SolidWorks or Blender and learning more about web development.
                    </Callout>
                </Box>
                <Arrow onClick={()=>this.props.scroll("background")}/>
            </Container>
        )
    }
}
