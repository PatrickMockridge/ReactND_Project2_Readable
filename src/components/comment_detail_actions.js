import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { CardActions } from 'material-ui/Card';
import { connect } from 'react-redux';
import {
    openEditCommentDialog,
    upVoteComment,
    deleteExistingComment
} from '../actions';

const PostDetailActions = (props) => {

        const {
            openEditCommentDialog,
            deleteExistingComment,
            upVote,
            comment
        } = props;

        const { id, parentId } = comment;


        const buttonStyle = {
          margin: 12,
        };

        return (
              <CardActions>
                    <RaisedButton
                        primary={true}
                        label='Edit Comment'
                        style={buttonStyle}
                        onClick={() => openEditCommentDialog(comment)}
                    />
                    <RaisedButton
                        secondary={true}                        
                        label="Delete Comment"
                        style={buttonStyle}
                        onClick={() => deleteExistingComment(id, parentId)}
                    />
                    <RaisedButton
                        default={true}
                        label="+1 Vote"
                        style={buttonStyle}
                        onClick={() => upVote(id)}
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
        openEditCommentDialog: (comment) => dispatch(openEditCommentDialog(comment)),
        upVote: (id) => dispatch(upVoteComment(id)),
        deleteExistingComment: (id, parentId) => dispatch(deleteExistingComment(id, parentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailActions);
