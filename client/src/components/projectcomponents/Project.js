import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectWrap = styled.div`
  display: block;
  margin: 30px auto;
  img {
    max-width: 50vw;
    min-width: 320px;
    height: auto;
    box-shadow: 2px 4px 12px black;
  }
`;

class Project extends Component {
  state = {
    showCard: false
  };
  render() {
    return (
      <div>
        {this.state.showCard ? (
          <ProjectCard />
        ) : (
          <ProjectWrap>
            <img src={this.props.projects[this.props.index].image} alt={this.props.projects[this.props.index].name} />
          </ProjectWrap>
        )}
      </div>
    );
  }
}

export default Project;
