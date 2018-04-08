import React, { Component } from 'react';

class CommentDelete extends Component {
    state = {
        showDelete: false
    }
    render() {
        return (
            <div>
               Are you sure you want to delete ? 
            </div>
        );
    }
}

export default CommentDelete;