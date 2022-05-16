import React from "react";
import Styled from "styled-components";
import Arrow from "../Lib/Arrow";

import HomeIcon from "../../assets/home.svg";

import img from "../../assets/contact.png"
import mailimg from "../../assets/email.svg"
import githubimg from "../../assets/github.svg";
import linkedinimg from "../../assets/linkedin.svg";
import resumeimg from "../../assets/resume.svg";

const Container = Styled.div`
    width: 100%;
    height: 90vh;
  
    background-color: ${props => props.theme.backgroundSecondary};
  
    display: grid;
    grid-template-columns: 2fr 3fr;
    
    justify-items: center;
    align-items: center;
    
    @media (max-width: 770px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    position: relative;
    
`


const SplashImg = Styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: 90% 50%;
    
    @media (max-width: 770px) {
        display: none;
    }
`

const Surface = Styled.div`
    
    width: 80%;
    height: 90%;
    
    box-shadow: ${props => props.theme.shadowPrimary};
    border-radius: 10px;

    background-color: ${props => props.theme.backgroundPrimary};
    color: ${props => props.theme.primary};

    & h1{
        margin: 1em 0;
        text-align: center;
        font-weight: 900;
        color: #394AB1;
    }
    
    & h2{
        width: 90%;
        margin: auto;
        font-weight: 100;
        margin-bottom: 3em;
    }
    
    & p{
        margin: 1em;
        margin-left: 2em;
    }
    
    @media (max-width: 770px) {
        width: 90%;
        background-image: url(${img});
        background-repeat: no-repeat;
        background-position: 50% 95%;
        background-size: 60%;
    }
    
    @media (max-width: 400px) {
        width: 90%;
        background-image: none;
    }
    
`

const ContactBox = Styled.div`

    margin: 2em;
    height: fit-content;
    
    display: grid;
    grid-template-columns: 1fr 10fr;
    row-gap: 1em;
    
    font-size: 1.1em;
        
    @media (max-width: 770px) {
        margin: 0.5em;
    }
    
`

const IconBox = Styled.div`
    width: 50px;
    height: 50px;
      
    background-color: ${props => props.theme.primary};
    
    mask-image: url(${props => props.img});
    mask-position: center;
    mask-size: cover;
    
    &:hover{
        animation: zoom 0.5s ;
        animation-fill-mode: forwards;
    
        @keyframes zoom {
        
            from {
                transform: scale(1);
            } to {
                transform: scale(1.1);
            }
        }
    }
`

const Text = Styled.div`
    
    font-size: min(1.5em, 5vw);
    color: black;
    
    padding-top: 0.5em;
    padding-left: 0.5em;    
    
    a {
        color: ${props => props.theme.primary};; 
        text-decoration: none;
    }
    
     :hover{
        text-decoration: underline;
    }


`

export default class Contact extends React.Component{


    constructor(props) {
        super(props);

    }

    render() {
        return(
            <Container ref={this.props.reference}>
                <SplashImg/>
                <Surface>
                    <h1> Let's get in touch </h1>
                    <h2> Feel free to contact me using email or Linkedin and I'll get back to you ASAP. <br/><br/> Interested in my projects? Please ask me any questions or check them out on Github. </h2>
                    <ContactBox>
                        <IconBox img={mailimg} onClick={()=>{window.open("mailto:jeffreyzhang2002@gmail.com")}} />
                        <Text> <a href="mailto:jeffreyzhang2002@gmail.com"> JeffreyZhang2002@gmail.com </a></Text>
                        <IconBox img={githubimg} onClick={()=>{window.open("https://github.com/jeffreyzhang2002", "_blank")}}/>
                        <Text> <a href="https://github.com/jeffreyzhang2002" target="_blank"> @Jeffreyzhang2002  </a> </Text>
                        <IconBox img={linkedinimg} onClick={()=>{window.open("https://www.linkedin.com/in/jeffreyzhang2002/", "_blank")}}/>
                        <Text> <a href="https://www.linkedin.com/in/jeffreyzhang2002/" target="_blank"> @Jeffreyzhang2002 </a> </Text>
                        {/*<IconBox img={resumeimg} onClick={()=>{window.open("https://www.linkedin.com/in/jeffreyzhang2002/", "_blank")}}/>*/}
                        {/*<Text> <a href="https://www.linkedin.com/in/jeffreyzhang2002/" target="_blank"> Resume </a> </Text>*/}
                    </ContactBox>
                </Surface>
                <Arrow onClick={()=>this.props.scroll("home")} image={HomeIcon}/>
            </Container>
        )

    }

}

