import React from "react";
import Styled from "styled-components";
import Image from "../../assets/arrow.svg";

const Container = Styled.div`
    width: min(3em, 8vw);
    height: min(3em, 8vw); 
    
    position: absolute;
   
    transform: translate(-50%, -50%);
    border-radius: 50%;
 
    box-shadow: ${props => props.theme.shadowPrimary};
            
    bottom: 0%;
    right: 0%;
`
const Icon = Styled.div`
    width: 100%;
    height: 100%;
    
    background-color: ${props => props.theme.primary};
    
    mask-image: url(${props => props.image? props.image : Image});

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
`

export default class Arrow extends React.Component{

    render() {
        return (
            <Container {...this.props}>
                <Icon image={this.props.image}/>
            </Container>
        )
    }
}
