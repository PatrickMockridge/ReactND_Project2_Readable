import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import {
    openEditPostDialog,
    upVotePost,
    deleteExistingPost,
    fetchComments
} from '../actions';

const PostDetailActions = (props) => {

        const {
            openEditPostDialog,
            deleteExistingPost,
            upVote,
            postDetail,
            fetchComments
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
                    <RaisedButton
                        secondary={true}
                        label="Delete Post"
                        style={buttonStyle}
                        onClick={() => deleteExistingPost(id)}
                    />
                    <RaisedButton
                        default={true}
                        label="+1 Vote"
                        style={buttonStyle}
                        onClick={() => upVote(id)}
                    />
                    <RaisedButton
                        default={true}
                        label="Get All Comments"
                        style={buttonStyle}
                        onClick={() => fetchComments(id)}
                    />
              </CardActions>

                );

};

const mapStateToProps = ({postDetail}) => {
    return {
        postDetail: postDetail.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openEditPostDialog: (postDetail) => dispatch(openEditPostDialog(postDetail)),
        upVote: (id) => dispatch(upVotePost(id)),
        deleteExistingPost: (id) => dispatch(deleteExistingPost(id)),
        fetchComments: (id) => dispatch(fetchComments(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailActions);
