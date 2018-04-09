import React, { Component } from "react";
import styled from "styled-components";

const TopCardWrapper = styled.div`
  width: 80vw;
  margin: 200px auto 20px auto;
  font-family: "Philosopher", sans-serif;
  
`;

const ImageWrap = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 50vw;
  height: 27.77vw;
  border: 1px solid rgba(0, 0, 0, 0.6);
  box-shadow: 2px 3px 6px black;
  @media (max-width: 900px){
    margin: 5px auto;
  }
`;
const InfoWrap = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 2px;
  width: 29vw;
  height: 27.77vw;
  border: 1px solid rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 12px black;
  @media (max-width: 900px){
    margin: 5px auto;
    width: 50vw;
  }
`;
class TopCard extends Component {
  render() {
    return (
      <TopCardWrapper>
        <ImageWrap
          src={this.props.project.image}
          alt={this.props.project.name}
        />
        <InfoWrap />
      </TopCardWrapper>
    );
  }
}

export default TopCard;
