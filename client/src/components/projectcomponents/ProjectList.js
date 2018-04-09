import React, { Component } from 'react';
import Project from './Project'
import styled from 'styled-components'
import Footer from '../Footer'
import "../../App.css";

const ListWrap = styled.div`
.footer {
    bottom: 0;
    left: 0;
    right: 0;
}
  

`


class ProjectList extends Component {
    
    
    render() {
        return (
            <ListWrap>
                {this.props.projects.map((project, i) => {
                    return(
                        <Project key={project.id}
                        index={i} projects={this.props.projects} id={project.name} projectId={project.id}/>
                    )
                })}
                
                
                <Footer className="footer" />
            </ListWrap>
        );
    }
}

export default ProjectList;