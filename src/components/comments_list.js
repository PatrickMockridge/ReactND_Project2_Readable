import React from 'react';
import TimeAgo from 'time-ago'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import { indigo900 } from 'material-ui/styles/colors'
import { connect } from 'react-redux'
import CommentDetailActions from './comment_detail_actions'


const CommentsList = (props) => {

  const commentStyle = {
  backgroundColor: indigo900
  };

  const timeAgo = TimeAgo();

  const { comments } = props;

   return (
    <div>
    {comments? comments.map(((comment) => (
              <Card item key={comment.id}
                style={commentStyle}>
                 <CardHeader
                   subtitle={`${comment.author} posted ${timeAgo.ago(comment.timestamp)}`}
                   />
                   <CardText>
                     {comment.body}
                     <br/>
                     <br/>
                     <div>
                     {comment.voteScore} Votes
                    </div>
                   </CardText>
                   <CommentDetailActions comment={comment}/>
              </Card>
              ))) : null}
    </div>
            );
}

export default CommentsList;
