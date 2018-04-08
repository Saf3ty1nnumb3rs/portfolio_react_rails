import React, { Component } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import '../../App.css'
const ProjectWrap = styled.div`
  display: block;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 50vw;
  
  button {
      border: none;
      
  }
  button:hover {
    cursor: pointer;
  }
  img {
    max-width: 50vw;
    min-width: 180px;
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
      <div className="projects">
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
