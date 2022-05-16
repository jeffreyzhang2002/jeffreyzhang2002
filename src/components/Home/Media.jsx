import React from "react";
import Styled from "styled-components";

const Container = Styled.div`
    width: min(3em, 8vw);
    height: min(3em, 8vw); 
    
    margin: 0.5em;
    
    box-shadow: ${props => props.theme.shadowPrimary};
    
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

const Icon = Styled.div`
   
    width: 100%;
    height: 100%;
   
    mask-image: url(${props => props.image});
    background-color: ${props => props.theme.primary};
            
`

export default class Media extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container {...this.props}>
                <Icon image={this.props.image}/>
            </Container>
        )
    }

}
