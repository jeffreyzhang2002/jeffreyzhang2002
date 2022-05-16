import React from "react";
import Styled from "styled-components";

export default Styled.div`
    width: fit-content;
    
    margin: 0 1em;
    
    color: ${props => props.theme.primary};
    font-size: 1.25em;

    &:hover {
        text-decoration: underline;
    }
`

