import React from "react";
import Styled from "styled-components";
import Welcome from "./Welcome";
import Splash from "./Splash";

import EmailIcon from "../../assets/email.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import GithubIcon from "../../assets/github.svg";
import Media from "./Media";
import Arrow from "./Arrow";

const Container = Styled.div`
    width: 100vw;
    height: 90vh;
    
    background-color: ${props=>props.theme.backgroundPrimary};
    
    display: grid;
    grid-template-columns: 5% 85% 10%;
     
    position: relative;
     
    @media only screen and (max-width: 992px) {
        grid-template-columns: 100%;
        grid-template-rows: 82% 10% 8%;
    }
`

const MediaBar = Styled.div`
    width: 100%;
    height: 100%;
    
    padding-bottom: 3em;
    
    display: flex;
    flex-direction: column-reverse;
    
    align-items: center;
    
    @media only screen and (max-width: 992px) {
        flex-direction: row;
        padding-bottom: 0;
    }
`

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container ref={this.props.reference}>
                <Splash/>
                <Welcome/>
                <MediaBar>
                    <Media image={EmailIcon} style={{borderRadius: "1.5em"}} onClick={()=>{window.open("mailto:Jeffreyzhang2002@gmail.com")}}/>
                    <Media image={LinkedinIcon} onClick={()=>{window.open("https://www.linkedin.com/in/jeffreyzhang2002/", "_blank")}}/>
                    <Media image={GithubIcon} style={{borderRadius: "1.5em"}} onClick={()=>{window.open("https://github.com/jeffreyzhang2002", "_blank")}}/>
                </MediaBar>
                <Arrow onClick={()=>{this.props.scroll("about")}}/>
            </Container>
        );
    }
}
