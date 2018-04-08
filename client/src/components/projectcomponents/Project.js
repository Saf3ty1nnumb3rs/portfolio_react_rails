import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const ProjectWrap = styled.div`
  display: block;
  margin: 30px auto;
  button {
      border: none;
      
  }
  button:hover {
    cursor: pointer;
  }
  img {
    max-width: 50vw;
    min-width: 200px;
    height: auto;
    box-shadow: 2px 4px 12px black;
  }
`;

class Project extends Component {
    state = {
        showCard: false
      };

      toggleShowCard = () => {
          this.setState( { showCard: !this.state.showCard} )
      }
  render() {
    return (
      <div>
        {this.state.showCard ? (
        <ProjectWrap>
              <ProjectCard />
        </ProjectWrap>
        ) : (
          <ProjectWrap>
             <button onClick={this.toggleShowCard}><img src={this.props.projects[this.props.index].image} alt={this.props.projects[this.props.index].name} /></button>
          </ProjectWrap>
        )}
      </div>
    );
  }
}

export default Project;
