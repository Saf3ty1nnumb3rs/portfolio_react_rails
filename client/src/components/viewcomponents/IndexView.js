import React, { Component } from "react";
import ProjectList from "../projectcomponents/ProjectList";
import styled from "styled-components";
import axios from "axios";
import katsuya from "../../images/katsuya1.jpg";
import TopSection from "../TopSection";
import OverlayNav from "./OverlayNav";


const IndexWrap = styled.div`
  img.back {
    position: relative;
    height: auto;
    width: 100vw;
    z-index: -1000;
    box-shadow: 2px 4px 12px black;
  }
`;

class IndexView extends Component {
  
    state = {
        projects: [],
        error: ""
      };
    
      componentDidMount() {
        this.getAllProjects();
      }
    
      getAllProjects = async () => {
        try {
          const response = await axios.get("api/projects");
          console.log(response.data);
          this.setState({
            projects: response.data.projects
          });
        } catch (err) {
          console.log(err);
          this.setState({ error: err.message });
        }
      };
    

  render() {
    return (
      <div>
        {this.props.showOverlay ? (
          <OverlayNav toggleOverlay={this.props.toggleOverlay}/>
        ) : (
          <IndexWrap>
            <img className="back" src={katsuya} alt="katsuya" />
            <TopSection />
            <ProjectList projects={this.state.projects} />
           
          </IndexWrap>
          
        )}
      </div>
    );
  }
}

export default IndexView;
