import React from "react";
import Styled from "styled-components";
import {withTheme} from "styled-components";

const Container = Styled.h1`
    color: ${props => props.theme.primary};

    font-size: min(8vw, 2.5em);
    
    align-text: center;
    
    margin-left: 2%;    
`

class Title extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container {...this.props}>
                Jeffrey Zhang
            </Container>
        );
    }
}

export default withTheme(Title);
