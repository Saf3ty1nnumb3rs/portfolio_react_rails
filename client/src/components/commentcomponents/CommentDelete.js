import React, { Component } from "react";
import styled from "styled-components";

const DeleteWrapper = styled.div`
  width: 60vw;
  height: 12vw;
  margin: 15px auto;
  display: block;
  border: 1px solid black;
  border-radius: 4px;
 p {
     font-size: 2vw;
 }
  .center {
      margin: 1vw auto 2vw;
  }
  .buttons {
    margin-top: .5vw;
  }
`;
class CommentDelete extends Component {
  state = {
    showDelete: false
  };
  render() {
    return (
      <DeleteWrapper>
        <div className="center">
          <p> Are you sure you want to delete ? </p>
          <div className="buttons">
            <button onClick={this.props.toggleShowDelete}>Back</button>
            <button onClick={this.props.removeComment}>Delete</button>
          </div>
        </div>
      </DeleteWrapper>
    );
  }
}

export default CommentDelete;
