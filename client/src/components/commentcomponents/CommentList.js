import React, { Component } from 'react';
import AddComment from './AddComment'
import CommentComponent from './CommentComponent'
import Footer from '../Footer'
import TopCard from './TopCard'
import '../../App.css'
import styled from 'styled-components'


const ListWrap = styled.div`
.footer {
    bottom: 0;
    left: 0;
    right: 0;
}
`
class CommentList extends Component {
    
    render() {
        return (
            <ListWrap>
                <TopCard project={this.props.project} projectId={this.props.project.id} />
               {this.props.comments.map((comment, i) => {
                   return(
                    <CommentComponent 
                    key={i} 
                    index={i} 
                    projectId={this.props.project.id} 
                    getSingleProject={this.props.getSingleProject} 
                    comments={this.props.comments} 
                    project={this.props.project} />
                   )
               })}
                
                
                <AddComment projectId={this.props.projectId} getSingleProject={this.props.getSingleProject} comments={this.props.comments} {...this.props}/>
                <Footer className="footer" />
            </ListWrap>
        );
    }
}

export default CommentList;