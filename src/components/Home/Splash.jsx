import React from "react";
import Styled from "styled-components";

import SplashImage from "../../assets/splash.svg";

const Container = Styled.div`
    
    
    box-sizing: content-box;
    border: 1px solid ${props => props.theme.primary};
       
    @media only screen and (max-width: 992px) {
        grid-row-start: 3;
    }
`

const Image = Styled.div`
    width: 100%;
    height: 100%;
    
    mask-image: url(${SplashImage});
    background-color: ${props => props.theme.primary};
`

export default class Splash extends React.Component {

    render() {

        return(
            <Container>
                <Image/>
            </Container>
        )

    }

}
