import React from "react";
import Styled from "styled-components";
import Arrow from "../Lib/Arrow";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

import 'react-accessible-accordion/dist/fancy-example.css';
import SkillIcon from "./SkillIcon.jsx";

import JavaIcon from "../../assets/java.png";
import JSIcon from "../../assets/javascript.png";
import TSIcon from "../../assets/Typescript.png";
import PYIcon from "../../assets/python.png";
import CppIcon from "../../assets/Cpp.png";
import CIcon from "../../assets/C.png";
import HTMLIcon from "../../assets/HTML.png";
import CSSIcon from "../../assets/CSS.png";
import RustIcon from "../../assets/Rust.png";
import SQLIcon from "../../assets/SQL.png";
import ReactIcon from "../../assets/React.png";
import P5Icon from "../../assets/p5.png";
import SvelteIcon from "../../assets/Svelte.png";
import ElectronIcon from "../../assets/electron.png";
import SassIcon from "../../assets/Sass.png";
import BootstrapIcon from "../../assets/bootstrap.png";
import MongoIcon from "../../assets/Mongo.png";
import GitIcon from "../../assets/Git.png";
import NodeIcon from "../../assets/Node.png";
import JetBrainsIcon from "../../assets/Jetbrains.png";
import VSIcon from "../../assets/VisualStudio.png";
import VSCIcon from "../../assets/VisualStudioCode.png";
import LinuxIcon from "../../assets/Ubuntu.png";
import WindowsIcon from "../../assets/windows.png";
import SolidworksIcon from "../../assets/solidworks.png";
import PhotoshopIcon from "../../assets/photoshop.png";

const Container = Styled.div`
    width: 100vw;
    height: 90vh;
    
    background-color: ${props=>props.theme.backgroundSecondary};
 
    display: grid;
    grid-template-rows: 15% 75% 10%;
   
    justify-items: center;
    align-items: center;
    
    position: relative;
     
`

const Title = Styled.h2`

    width: fit-content;
   
    text-align: center;
    
    color: ${props => props.theme.primary};
    
    font-size: min(3em, 7vw);

`

const AccordionStyled =Styled(Accordion)`
    width: 90%;
    height: 100%;
    
    
`

const AccordionItemPanelStyled = Styled(AccordionItemPanel)`
    
    background-color: white;
    height: 30vh;
`

const Panel = Styled.div`
    
    width: 100%;
    height: 100%;
    
    padding: 1em;
    display: flex;    
    flex-wrap: wrap;
`

export default class Skills extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container ref={this.props.reference}>
                <Title> Skills </Title>
                <AccordionStyled preExpanded={["programming"]}>
                    <AccordionItem uuid={"programming"} style={{boxShadow: "0 3px 10px #8b8eaf", marginBottom:"1em"}}>
                        <AccordionItemHeading>
                            <AccordionItemButton style={{color:"#394AB1", fontSize:"1.5em"}}>
                                👨‍💻 Programming Languages
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanelStyled>
                            <Panel>
                                <SkillIcon image={JavaIcon} description={"Level: Advanced"}> Java </SkillIcon>
                                <SkillIcon image={JSIcon} description={"Level: Advanced"}> Javascript (ES6) </SkillIcon>
                                <SkillIcon image={TSIcon} description={"Level: Proficient"}> Typescript </SkillIcon>
                                <SkillIcon image={PYIcon} description={"Level: Advanced"}> Python </SkillIcon>
                                <SkillIcon image={CppIcon} description={"Level: Proficient"}> C++ </SkillIcon>
                                <SkillIcon image={CIcon} description={"Level: Beginner"}> C </SkillIcon>
                                <SkillIcon image={HTMLIcon} description={"Level: Proficient"}> HTML </SkillIcon>
                                <SkillIcon image={CSSIcon} description={"Level: Proficient"}> CSS </SkillIcon>
                                <SkillIcon image={RustIcon} description={"Level: Beginner"}> Rust </SkillIcon>
                                <SkillIcon image={SQLIcon} description={"Level: Beginner"}> SQL </SkillIcon>
                            </Panel>
                        </AccordionItemPanelStyled>
                    </AccordionItem>
                    <AccordionItem style={{boxShadow: "0 3px 10px #8b8eaf", marginBottom:"1em"}}>
                        <AccordionItemHeading>
                            <AccordionItemButton style={{color:"#394AB1", fontSize:"1.5em"}}>
                                🖥️ Frameworks & Libraries
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanelStyled>
                            <Panel>
                                <SkillIcon image={ReactIcon} description={"Level: Advanced"}> React </SkillIcon>
                                <SkillIcon image={P5Icon} description={"Level: Advanced"}> P5.js </SkillIcon>
                                <SkillIcon image={SvelteIcon} description={"Level: Beginner"}> Svelte </SkillIcon>
                                <SkillIcon image={ElectronIcon} description={"Level: Proficient"}> Electron </SkillIcon>
                                <SkillIcon image={SassIcon} description={"Level: Proficient"}> SASS </SkillIcon>
                                <SkillIcon image={BootstrapIcon} description={"Level: Beginner"}> Bootstrap </SkillIcon>
                                <SkillIcon image={MongoIcon} description={"Level: Beginner"}> MongoDB </SkillIcon>
                            </Panel>
                        </AccordionItemPanelStyled>
                    </AccordionItem>
                    <AccordionItem style={{boxShadow: "0 3px 10px #8b8eaf" , marginBottom:"1em"}}>
                        <AccordionItemHeading>
                            <AccordionItemButton style={{color:"#394AB1", fontSize:"1.5em"}}>
                                🛠️ Tools
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanelStyled>
                            <Panel>
                                <SkillIcon image={GitIcon} description={"Level: Advanced"}> Git </SkillIcon>
                                <SkillIcon image={NodeIcon} description={"Level: Advanced"}> Node </SkillIcon>
                                <SkillIcon image={JetBrainsIcon} description={"Level: Advanced"}> Jetbrains IDE </SkillIcon>
                                <SkillIcon image={VSIcon} description={"Level: Proficient"}> Visual Studio </SkillIcon>
                                <SkillIcon image={VSCIcon} description={"Level: Advanced"}> Visual Studio Code </SkillIcon>
                                <SkillIcon image={LinuxIcon} description={"Level: Proficient"}> Ubuntu Linux </SkillIcon>
                                <SkillIcon image={WindowsIcon} description={"Level: Advanced"}> Windows </SkillIcon>
                                <SkillIcon image={SolidworksIcon} description={"Level: Proficient"}> SolidWorks </SkillIcon>
                                <SkillIcon image={PhotoshopIcon} description={"Level: Intermediate"}> Photoshop </SkillIcon>
                            </Panel>
                        </AccordionItemPanelStyled>
                    </AccordionItem>
                </AccordionStyled>
                <Arrow onClick={()=>this.props.scroll("projects")}/>
            </Container>
        )
    }
}
