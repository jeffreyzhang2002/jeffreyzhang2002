import React from "react";
import Styled from "styled-components";
import Profile from "./Profile";
import Title from "./Title";
import Nav from "./Nav";
import Link from "./Link";


const Container = Styled.div`
    background-color: ${props => props.theme.backgroundPrimary};
    box-shadow: ${props => props.theme.shadowPrimary};
    
    width: 100%;
    height: 10vh;
       
    position: relative;
    z-index: 10;
       
    display: grid;
    grid-template-columns: 1fr 1fr;
          
    @media only screen and (max-width: 992px) {
        grid-template-columns: 4fr 1fr;
    }
`

const RightAlign = Styled.div`
    justify-self: right;

    width: 100%;
    height: 100%;
    
    display: flex;    
    flex-direction: row;
    justify-content: flex-end;

`

const LeftAlign = Styled.div`
    justify-self: left;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    
    align-items: center;    
`

export default class Header extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container ref={this.props.reference}>
                <LeftAlign>
                    <Profile/>
                    <Title onClick={()=>this.props.scroll("home")}/>
                </LeftAlign>
                <RightAlign>
                    <Nav>
                        <Link onClick={()=>this.props.scroll("home")}> Home </Link>
                        <Link onClick={()=>this.props.scroll("about")}> About </Link>
                        <Link onClick={()=>this.props.scroll("background")}> Background </Link>
                        <Link onClick={()=>this.props.scroll("skills")}> Skills </Link>
                        <Link onClick={()=>this.props.scroll("projects")}> Projects </Link>
                        <Link onClick={()=>this.props.scroll("contact")}> Contact </Link>
                    </Nav>
                </RightAlign>
            </Container>
        );
    }

}
