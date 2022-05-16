import React from "react";
import Styled, {ThemeProvider} from "styled-components";
import Themes from "../globals/themes";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Background from "./Background/Background";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";


const Article = Styled.div`
    width: 100vw;
    height: 90vh;
    overflow-x: clip;
    overflow-y: auto;
    
    ::-webkit-scrollbar {
        width: 10px;
        background-color: ${props => props.theme.backgroundPrimary}
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.primary}
    }
`

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.sections = new Map()

        for(const section of ["home", "about", "background", "skills", "projects", "contact"])
            this.sections.set(section, React.createRef())
    }

    scrollTo(section) {
        this.sections.get(section).current.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return(
            <ThemeProvider theme={Themes.lightMode}>
                <Header scroll={this.scrollTo.bind(this)}/>
                <Article>
                    <Home reference={this.sections.get("home")}  scroll={this.scrollTo.bind(this)}/>
                    <About reference={this.sections.get("about")} scroll={this.scrollTo.bind(this)}/>
                    <Background reference={this.sections.get("background")} scroll={this.scrollTo.bind(this)}/>
                    <Skills reference={this.sections.get("skills")} scroll={this.scrollTo.bind(this)}/>
                    <Projects reference={this.sections.get("projects")} scroll={this.scrollTo.bind(this)}/>
                    <Contact reference={this.sections.get("contact")} scroll={this.scrollTo.bind(this)}/>
                </Article>
            </ThemeProvider>
        );
    }
}
