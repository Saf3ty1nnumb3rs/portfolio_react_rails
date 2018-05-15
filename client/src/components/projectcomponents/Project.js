import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import "../../App.css";

const ProjectWrap = styled.div`
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 90vw;
  height: 27.77vw;
  font-family: "Philosopher", sans-serif;

  button.pic-button {
    border: none;
    max-width: 50vw;
    height: 27.77vw;
    background-color: #d5daf2;
  }
  button:hover {
    cursor: pointer;
  }
  img {
    max-width: 50vw;
    min-width: 180px;
    height: 27.77vw;
    box-shadow: 2px 4px 12px black;
  }
  @media (max-width: 645px) {
    max-width: 90vw;
    max-height: 49.99vw;
    margin: 20px auto;
    button.pic-button {
      max-width: 90vw;
      height: 49.99vw;
    }
    img {
      max-width: 90vw;
      height: 49.99vw;
      margin-left: -8px;
    }
  }
`;

class Project extends Component {
  state = {
    showCard: false
  };

  toggleShowCard = () => {
    this.setState({ showCard: !this.state.showCard });
  };
  render() {
    return (
      <div className="projects mobile">
        {this.state.showCard ? (
          <ProjectWrap>
            <ProjectCard
              toggleShowCard={this.toggleShowCard}
              project={this.props.projects[this.props.index]}
              projects={this.props.projects}
            />
          </ProjectWrap>
        ) : (
          <ProjectWrap>
            <button className="pic-button" onClick={this.toggleShowCard}>
              <img
                src={this.props.projects[this.props.index].image}
                alt={this.props.projects[this.props.index].name}
              />
            </button>
          </ProjectWrap>
        )}
      </div>
    );
  }
}

export default Project;
