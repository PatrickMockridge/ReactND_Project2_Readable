import React from 'react';
import TimeAgo from 'time-ago'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import PostDetailActions from './post_detail_actions'
import CommentsList from './comments_list'
import { connect } from 'react-redux'
import { fetchComments } from '../actions'

const PostDetailCard = (props) => {

  const { postDetail, fetchComments } = props;

  const timeAgo = TimeAgo();

  if (!props.postDetail) {
    return (
        <p></p>
    )
  }
  else {
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
          <PostDetailActions />
      </Card>
      <CommentsList />
    </div>
    )
  }
};


const mapStateToProps = ({postDetail}) => {
    return {
        postDetail: postDetail.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchComments: (id) => dispatch(fetchComments(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetailCard);
