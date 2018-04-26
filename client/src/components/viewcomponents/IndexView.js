import React, { Component } from "react";
import ProjectList from "../projectcomponents/ProjectList";
import styled from "styled-components";
import axios from "axios";
import fill from "../../images/bulbasaurusRex.jpg";
import bulb from "../../images/lightbulb.mp4";
import TopSection from "../TopSection";
import OverlayNav from "./OverlayNav";

const IndexWrap = styled.div`
  background-color: #d5daf2;
  video.back {
    background-image: url(${fill});
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    background-position-x: 4vw; 
    position: relative;
    left: -4vw;
    height: auto;
    width: 104vw;
    z-index: 0;
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
          <OverlayNav
            {...this.props}
            toggleOverlay={this.props.toggleOverlay}
            hideNav={this.props.hideNav}
            showNav={this.props.showNav}
          />
        ) : (
          <IndexWrap>
            <video className="back" preload="auto" autoPlay loop>
              <source src={bulb} type="video/mp4" />
            </video>
            <TopSection />
            <ProjectList projects={this.state.projects} />
          </IndexWrap>
        )}
      </div>
    );
  }
}

export default IndexView;
