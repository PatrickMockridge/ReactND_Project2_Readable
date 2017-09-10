import React from 'react';
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import { CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import {
    openEditPostDialog,
    upVotePost,
    downVotePost,
    deleteExistingPost
} from '../actions';

const PostDetailActions = (props) => {

        const {
            openEditPostDialog,
            deleteExistingPost,
            upVote,
            downVote,
            postDetail
        } = props;

        const { category, id } = postDetail;

        const buttonStyle = {
          margin: 12,
        };

        return (
              <CardActions>
                    <RaisedButton
                        primary={true}
                        label='Edit Post'
                        style={buttonStyle}
                        onClick={() => openEditPostDialog(postDetail)}
                    />
                    <Link to="/">
                      <RaisedButton
                          secondary={true}
                          label="Delete Post"
                          style={buttonStyle}
                          onClick={() => deleteExistingPost(id)}
                          />
                    </Link>
                    <RaisedButton
                        default={true}
                        label="+1 Vote"
                        style={buttonStyle}
                        onClick={() => upVote(id)}
                    />
                    <RaisedButton
                        default={true}
                        label="-1 Vote"
                        style={buttonStyle}
                        onClick={() => downVote(id)}
                    />
              </CardActions>
                );
};

const mapDispatchToProps = (dispatch) => {
    return {
        openEditPostDialog: (postDetail) => dispatch(openEditPostDialog(postDetail)),
        upVote: (id) => dispatch(upVotePost(id)),
        downVote: (id) => dispatch(downVotePost(id)),
        deleteExistingPost: (id) => dispatch(deleteExistingPost(id)),
    }
}

export default connect(null, mapDispatchToProps)(PostDetailActions);
