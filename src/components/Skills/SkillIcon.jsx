import React from 'react';
import Styled from "styled-components";

const Container = Styled.div`

    width: fit-content;
    height: 40px;
            
    margin: 0 0.5em;
    
    border-radius: 10px;

    box-shadow: 0 3px 10px #8b8eaf;
    
    &:hover {
        animation: zoom 0.5s;
        animation-fill-mode: forwards;
    }
    
    @keyframes zoom {
        from {
            transform: scale(1);
        } to {
            transform: scale(1.1);
        }
    }

    display: flex;
    align-items: center;

`

const ImageIcon = Styled.div`
        
    height: 1.5em;
    width: 1.5em;
    
    margin: 0 0.2em;
        
    background-image: url(${props => props.image});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    


`

const Title = Styled.div`

    margin-left: 0.1em;
    margin-right: 0.5em;
    color: ${props => props.theme.primary};
    
    font-size: 1.5em;
    
      @media only screen and (max-width: 992px) {
        font-size: 1em;
    }

`

const Description = Styled.div`
    display: none;
    
    height: 100%;
    
    ${Container}:hover & {
        display: flex;
        align-items: center;
    
    } 
    
    padding: 0 0.5em;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.backgroundSecondary};
    
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`

export default class SkillIcon extends React.Component{

    render() {

        let description;

        if(this.props.description) {
            description =
                <Description>
                    {this.props.description}
                </Description>
        }

        return(
            <Container>
                <ImageIcon image={this.props.image} color={this.props.color}/>
                <Title>
                    {this.props.children}
                </Title>
                {description}
            </Container>
        );
    }

}
