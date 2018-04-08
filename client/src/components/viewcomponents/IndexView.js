import React, { Component } from 'react';
import ProjectList from '../projectcomponents/ProjectList'
import styled from 'styled-components'
import katsuya from '../../images/katsuya1.jpg'
import TopSection from '../TopSection'

const IndexWrap = styled.div`
img.back {
  position: relative;
  height: auto;
  width: 100vw;
  z-index: -1000;
  box-shadow: 2px 4px 12px black;
}
`

class IndexView extends Component {



    render() {
        return (
            <IndexWrap>
                <img className="back" src={katsuya} alt="katsuya"/>
                <TopSection />
               <ProjectList /> 
            </IndexWrap>
        );
    }
}

export default  IndexView;