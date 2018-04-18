import React, { Component } from 'react';
import styled from 'styled-components'

const CommWrapper = styled.div`
display: block;
 width: 75vw;
 margin: 15px auto; 
 
 
 .name {
     width: 60vw;
     text-align: start;
     align-self: center;
     overflow-wrap: break-word;
     margin: 3px auto 3px ;
     
 }
 #name {
     color: black;
 }
 .content{
    margin: 3px auto;
     text-align: center;
     width: 60vw;
     min-width: 50vw;
     min-height: 8vw;
     border: 1px solid black;
     overflow-y: auto;
     padding: 15px;
     border-radius: 5px;
 }
 #content {
     color: black;
 }
 @media (max-width: 900px){
     display: block;
    margin: 15px auto;
    width: 50vw;
    .content {
        width: 50vw;
        margin-bottom: 28px;
    }
    
  }
`

class Comment extends Component {
    render() {
        const index = this.props.index
        const comment = this.props.comments
        return (
            <CommWrapper>
                <div className="name" id="name">
                    <h3>{comment[index].name}</h3> 
                </div>
                <div className="content" id="content">
                    <p>{comment[index].comment}</p> 
                </div> 
                <button onClick={this.props.toggleShowDelete}>Remove Comment</button>
            </CommWrapper>
        );
    }
}

export default Comment;