import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const FormWrapper = styled.div`
  p {
    text-align: start;
    margin-left: 30vw;
    max-width: 40vw;
  }
  form {
    display: block;
    width: 80vw;
    margin: 2vw auto;
    button {
      width: 11vw;
      height: 20px;
      margin: 1vw auto;
      border: none;
      background-color: #59CD90;
      border-radius: 5px;
    }
    .name {
      width: 60vw;
      padding: 15px;
      min-width: 50vw;
      align-self: center;
      min-height: 2.5vw;
      border: 1px solid black;
      border-radius: 5px;
    }
    #name {
      color: black;
    }
    .content {
      text-align: start;
      align-self: center;
      width: 60vw;
      min-width: 50vw;
      border: 1px solid black;
      border-radius: 5px;
      overflow-y: auto;
      padding: 15px;
      min-height: 2vw;
    }
    .buttons {
        width: 80vw;
        
    }
    #content {
      color: black;
    }

    @media (max-width: 900px) {
      display: block;
      margin: 15px auto;
      width: 50vw;
      .content, .name, .buttons {
        width: 50vw;
        margin-bottom: 28px;
      }
    }
  }
`;

class AddComment extends Component {
  state = {
    newPost: {
      name: "",
      comment: ""
    }
  };

  //Handle Change//////////////////////////////////
  handleChange = event => {
    event.preventDefault();
    const name = event.target.name;
    const newPost = { ...this.state.newPost };
    newPost[name] = event.target.value;
    this.setState({
      newPost: newPost
    });
    
  };
  //Add Comment//////////////////////////////////
  addComment = async event => {
      event.preventDefault()
    const payload = {
      comment: {
        name: this.state.newPost.name,
        comment: this.state.newPost.comment
      }
    };
    try {
      await axios.post(
        `/api/projects/${this.props.projectId}/comments`,
        payload
      );
      await this.setState({
        newPost: {
          name: "",
          comment: ""
        }
      });
      await this.props.getSingleProject(this.props.projectId)

    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <FormWrapper>
        <p>Please feel free to leave constructive criticism or to ask any questions. Solid feedback is appreciated and encouraged.</p>
        <form className="form" onSubmit={this.addComment}>
          <input
            className="name"
            name="name"
            onChange={this.handleChange}
            type="text"
            placeholder="Name"
            value={this.state.newPost.name}
          />
          <textarea
            className="content"
            name="comment"
            onChange={this.handleChange}
            type="text"
            placeholder="Comments and Questions"
            value={this.state.newPost.comment}
            required
          />
          <div className="buttons">
            <button type="submit">Post</button>
          </div>
        </form>
      </FormWrapper>
    );
  }
}

export default AddComment;
