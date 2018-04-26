import React, { Component } from "react";
import CommentList from "../commentcomponents/CommentList";
import styled from "styled-components";
import OverlayNav from './OverlayNav'
import axios from "axios";
import "../../App.css";

const ListWrapper = styled.div`
  width: 100vw;
  margin: 0;
  background-color: #d5daf2;
`;

class ProjectSingleView extends Component {
  state = {
    project: {},
    comments: []
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.getSingleProject(nextProps.match.params.id);
    }
    console.log(nextProps);
    console.log(this.props);
  }

  componentDidMount() {
    this.getSingleProject(this.props.match.params.id);
  }

  getSingleProject = async projectId => {
    try {
      const res = await axios.get(`/api/projects/${projectId}`);
      await this.setState({
        project: res.data.project,
        comments: res.data.comments
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <ListWrapper>
      {this.props.showOverlay ? (
          <OverlayNav {...this.props} toggleOverlay={this.props.toggleOverlay}/>
        ) : (
        <CommentList
          {...this.props}
          project={this.state.project}
          comments={this.state.comments}
          getSingleProject={this.getSingleProject}
          projectId={this.props.match.params.id}
        />
        )}
      </ListWrapper>
    );
  }
}

export default ProjectSingleView;
