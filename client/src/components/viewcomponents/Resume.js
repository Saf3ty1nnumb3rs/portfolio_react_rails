import React, { Component } from 'react';
import styled from "styled-components";
import res from "../../images/JWSResume.jpg";

class Resume extends Component {
    render() {
        return (
            <ResWrap>
               <img src={ res } alt="resumé"/> 
            </ResWrap>
        );
    }
}

export default Resume;

const ResWrap = styled.div`
    width: 100vw;
    height: 100%;
    overflow-y: auto;
    img {
        width: 60vw;
        height: auto;
        margin: 200px auto;
        
    }
`