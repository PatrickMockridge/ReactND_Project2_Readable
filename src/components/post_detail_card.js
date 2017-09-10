import React, { Component } from 'react';
import TimeAgo from 'time-ago'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import PostDetailActions from './post_detail_actions'
import CommentsList from './comments_list'
import { connect } from 'react-redux'


const PostDetailCard = (props) => {
  const { postDetail } = props;
  const timeAgo = TimeAgo();
    return (
    <div>
      <Card>
        <CardHeader
          title={postDetail.title}
          subtitle={`${postDetail.author} posted ${timeAgo.ago(postDetail.timestamp)}`}
          />
        <CardText>
          {postDetail.body}
          <br />
          <br />
          <div>
            {postDetail.voteScore} votes
          </div>
        </CardText>
          <PostDetailActions postDetail={postDetail}/>
      </Card>
    </div>
    )
};

export default PostDetailCard;
