import React from "react";
import Styled from "styled-components";

import Menu from "../../assets/menu.svg";


const HorizontalContainer = Styled.div`
    
    width: fit-content;
    height: 100%;
    
    margin-right: 1em;
    
    display: flex;
    align-items: center;
        
    @media only screen and (max-width: 992px) {
        display: none;
    }
`

const DropDown = Styled.div`
    height: 100%;
    aspect-ratio: 1 / 1;
    
    position: relative;
        
    @media only screen and (min-width: 992px) {
        display: none;
    }
`

const DropDownIcon = Styled.div`
    
    height: 100%;
    width: 100%;
   
    mask-image: url(${Menu});
    mask-size: 50% 50%;
    mask-position: center;
    mask-repeat: no-repeat;
    
    background-color: ${props => props.theme.primary};
`

const DropDownContent = Styled.div`
    width: fit-content;
    height: fit-content;
    
    background-color: ${props => props.theme.backgroundPrimary};
    box-shadow: ${props => props.theme.shadowPrimary};
    
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 999;
    
    padding: 0.5em;
    
    position: absolute;
    top: 100%;
    right: 0px;
    

    
    display: none;
        
    &:hover, ${DropDown}:hover & {
        display: block;
    }
`

export default class Nav extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <HorizontalContainer>
                    {this.props.children}
                </HorizontalContainer>
                <DropDown>
                    <DropDownIcon/>
                    <DropDownContent>
                        {this.props.children}
                    </DropDownContent>
                </DropDown>
            </>

        )
    }
}
