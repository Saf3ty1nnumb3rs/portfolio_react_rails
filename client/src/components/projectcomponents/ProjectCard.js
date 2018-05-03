import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 50vw;
  height: 27.77vw;
  margin-top: 30px;
  margin-bottom: 30px;
  display: block;
  color: black;
  border: 1px solid black;
  box-shadow: 2px 4px 12px black;
  overflow-y: auto;
  .cards a.card-link button {
    color: black;
  }
  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    background-color: lightsteelblue;
    color: white;
    text-shadow: 1px 1px 1px #313030;
    #score {
      padding-right: 18px;
    }
  }
  @media (max-width: 645px) {
    max-width: 90vw;
    max-height: 49.99vw;
  }
`;
const ButtonGroupWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 42px 15px;
  button {
    height: 33px;
    width: 11.2vw;
    margin: 2px;
    border-radius: 4px;
    box-shadow: 1px 2px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }
  button:hover {
    background-color: lightgreen;
  }
  @media (max-width: 645px) {
   button {
     width: 20vw;
     font-size: 3vw;
   }
  }
`;
const ItemWrap = styled.div`
  margin: 23px 10px;
  padding: 5px 15px;
  p {
    color: black;
    font-size: 16px;
    letter-spacing: 0.1rem;
  }
`;
class ProjectCard extends Component {
  render() {
    return (
      <CardWrapper className="cards">
        <ItemWrap id="header">
          <div>
            <h1>{this.props.project.name}</h1>
          </div>
          <div id="score">
            <h3>{this.props.project.grade}/100</h3>
          </div>
        </ItemWrap>
        <hr />
        <ItemWrap>
          <p>{this.props.project.description}</p>
        </ItemWrap>
        <hr />
        <ButtonGroupWrap>
          <Link
            className="card-links"
            to={this.props.project.git_url}
            target="_blank"
          >
            <button>GitHub</button>
          </Link>
          <Link
            className="card-links"
            to={this.props.project.deploy_url}
            target="_blank"
          >
            <button>Deployed</button>
          </Link>
          <Link to={`/projects/${this.props.project.id}`}>
            <button>Comment</button>
          </Link>
          <button onClick={this.props.toggleShowCard}>Back</button>
        </ButtonGroupWrap>
      </CardWrapper>
    );
  }
}

export default ProjectCard;
