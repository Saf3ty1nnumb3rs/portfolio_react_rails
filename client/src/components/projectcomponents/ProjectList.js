import React, { Component } from 'react';
import Project from './Project'
import ProjectCard from './ProjectCard'

class ProjectList extends Component {
    state = {
        showCard: false
    }
    render() {
        return (
            <div>
                {this.state.showCard ? 
                (<ProjectCard />
                ):( 
                <Project />)
                }
            </div>
        );
    }
}

export default ProjectList;