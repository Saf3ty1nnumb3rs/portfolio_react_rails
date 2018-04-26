import React, { Component } from "react";
import styled from "styled-components";

const CommWrapper = styled.div`
  display: block;
  width: 75vw;
  margin: 15px auto;

  #name {
    width: 60vw;
    text-align: start;
    align-self: center;
    overflow-wrap: break-word;
    margin: 3px auto 3px;
    color: black;
    
  }
    button {
        background-color: red;
        box-shadow: 1px 2px 2px black;
        border-radius: 4px;
    }
  #content {
    margin: 3px auto;
    text-align: center;
    width: 60vw;
    min-width: 50vw;
    min-height: 8vw;
    border: 1px solid black;
    overflow-y: auto;
    padding: 15px;
    border-radius: 5px;
    color: black;
    background-color: white;
  }

  @media (max-width: 900px) {
    display: block;
    margin: 15px auto;
    width: 50vw;
    #content {
      width: 50vw;
      margin-bottom: 28px;
    }
  }
`;

class Comment extends Component {
  render() {
    const index = this.props.index;
    const comment = this.props.comments;
    return (
      <CommWrapper>
        <div id="name">
          <h3>{comment[index].name}</h3>
        </div>
        <div id="content">
          <p>{comment[index].comment}</p>
        </div>
        <button onClick={this.props.toggleShowDelete}>Remove Comment</button>
      </CommWrapper>
    );
  }
}

export default Comment;
