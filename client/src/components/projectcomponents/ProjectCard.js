import React, { Component } from 'react';
import { Link } from 'react-router-dom' 
import styled from 'styled-components'

const CardWrapper = styled.div`
    width: 50vw;
    height: 40vh;
    color: black;
   .cards a.card-link {
        color: black;
    }
`


class ProjectCard extends Component {
    render() {
        return (
            <CardWrapper className="cards">
                <h2>{this.props.project.name}</h2>
                <h3>{this.props.project.grade}/100</h3>
                <Link className="card-links" to={this.props.project.git_url} target='_blank'>On GitHub</Link>
                <Link className="card-links" to={this.props.project.deploy_url} target='_blank'>Deployed</Link>
                <button onClick={this.props.toggleShowCard}>Back</button>
            </CardWrapper>
        );
    }
}

export default ProjectCard;