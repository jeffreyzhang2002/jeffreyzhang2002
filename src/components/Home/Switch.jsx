import React from "react";
import Styled from "styled-components";

const Container = Styled.label`

    width: 2em;
    height: 4em;
    
    border: 1px solid red;
    
    position: absolute;
    
    top: 0;
    right: 0;
    
    margin-right: 3em;
    margin-top: 3em;

`

const Input = Styled.input`
    
`

const Slider = Styled.span`
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
      
      &:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: .4s;
          transition: .4s;
      }
`

export default class Switch extends React.Component{

    render() {
        return(
            <Container>
                <Input type={"checkbox"}/>
                <Slider/>
            </Container>
        )
    }


}
