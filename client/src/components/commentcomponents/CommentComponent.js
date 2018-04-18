import React, { Component } from "react";
import Comment from "./Comment";
import CommentDelete from "./CommentDelete";
import styled from "styled-components";
import axios from "axios";

const CommentWrapper = styled.div`
  width: 80vw;
  margin: auto;
`;

class CommentComponent extends Component {
  state = {
    showDelete: false,
    showComment: true
  };

  removeComment = async comment => {
    try {
      await axios.delete(
        `/api/projects/${this.props.projectId}/comments/${
          this.props.comments[this.props.index].id
        }`
      );
      await this.props.getSingleProject(this.props.projectId);
      this.toggleShowDelete()
    } catch (err) {
      console.log(err.message);
    }
  };

  toggleShowComment = async () => {
    try {
      await this.setState({
        showComment: true,
        showDelete: false
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  toggleShowDelete = async () => {
    try {
      await this.setState({ showDelete: !this.state.showDelete });
      this.state.showDelete
        ? this.setState({ showComment: false })
        : this.setState({ showComment: true });
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <CommentWrapper>
        {this.state.showComment ? (
          <Comment
            toggleShowDelete={this.toggleShowDelete}
            toggleShowComment={this.toggleShowComment}
            projectId={this.props.projectId}
            index={this.props.index}
            comments={this.props.comments}
            project={this.props.project}
          />
        ) : null}
        {this.state.showDelete ? (
          <CommentDelete
            toggleShowDelete={this.toggleShowDelete}
            toggleShowComment={this.toggleShowComment}
            removeComment={this.removeComment}
            index={this.props.index}
            comments={this.props.comments}
            project={this.props.project}
          />
        ) : null}
      </CommentWrapper>
    );
  }
}

export default CommentComponent;
