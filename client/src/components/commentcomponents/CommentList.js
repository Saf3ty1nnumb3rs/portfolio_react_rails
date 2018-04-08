import React, { Component } from 'react';
import AddComment from './AddComment'
import Comment from './Comment'


class CommentList extends Component {
    
    render() {
        return (
            <div>
               {/* map here */}
                <Comment />
                {/* stop map here */}
                <AddComment />
            </div>
        );
    }
}

export default CommentList;