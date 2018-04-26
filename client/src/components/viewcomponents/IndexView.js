import React, { Component } from "react";
import ProjectList from "../projectcomponents/ProjectList";
import styled from "styled-components";
import axios from "axios";
import bulb from "../../images/lightbulb.mp4";
import TopSection from "../TopSection";
import OverlayNav from "./OverlayNav";

const IndexWrap = styled.div`
background-color: #d5daf2;
  video.back {
    position: relative;
    left: -5vw;
    height: auto;
    width: 105vw;
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
