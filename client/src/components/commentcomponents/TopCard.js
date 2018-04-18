import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopCardWrapper = styled.div`
  width: 80vw;
  margin: 200px auto 20px auto;
  font-family: "Philosopher", sans-serif;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.75vw;
`;

const ImageWrap = styled.img`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 50vw;
  height: 27.77vw;
  border: 1px solid rgba(0, 0, 0, 0.6);
  box-shadow: 2px 3px 6px black;
  @media (max-width: 900px) {
    margin: 5px auto;
  }
`;
const InfoWrap = styled.div`
  padding-top: 15px;
  margin: 30px 0 30px 2px;
  width: 29vw;
  height: 27.77vw;
  border: 1px solid rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 12px black;
  overflow: auto;
  p {
    margin: 1vw 2vw;
  }
  @media (max-width: 900px) {
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
        <InfoWrap>
          <p>Project: {this.props.project.name}</p>
          <p>Grade: {this.props.project.grade}</p>
          <p>{this.props.project.description}</p>
        </InfoWrap>
      </TopCardWrapper>
    );
  }
}

export default TopCard;
