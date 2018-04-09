import React, { Component } from 'react';
import styled from 'styled-components'

const CommWrapper = styled.div`
display: flex;
 width: 80vw;
 margin:0 auto;
 .name {
     width: 20vw;
     align-self: center;
     
 }
 .content{
     text-align: center;
     width: 60vw;
     min-width: 50vw;
     border: 1px solid black;
     overflow-y: auto;
     padding: 15px;
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
                <div className="name">
                    <h2>{comment[index].name}</h2> 
                </div>
                <div className="content">
                    <p>{comment[index].comment}</p> 
                </div> 
            </CommWrapper>
        );
    }
}

export default Comment;