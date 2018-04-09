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
            </DeleteWrapper>
        );
    }
}

export default CommentDelete;