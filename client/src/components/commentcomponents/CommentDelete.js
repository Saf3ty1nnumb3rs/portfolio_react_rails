import React, { Component } from 'react';
import styled from 'styled-components'


const DeleteWrapper = styled.div`
    width: 80vw;


`
class CommentDelete extends Component {
    state = {
        showDelete: false
    }
    render() {
        return (
            <DeleteWrapper>
               Are you sure you want to delete ? 
               <button onClick={this.props.toggleShowDelete}>Back</button>
               <button onClick={this.props.removeComment}>Delete</button>
            </DeleteWrapper>
        );
    }
}

export default CommentDelete;