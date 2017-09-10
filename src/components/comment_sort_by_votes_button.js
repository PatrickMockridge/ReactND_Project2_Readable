import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSort from 'material-ui/svg-icons/content/sort';
import { connect } from 'react-redux';
import {
    sortCommentsByVotes
} from '../actions';

const style = {
    marginRight: 20,
    position: 'fixed',
    bottom: 30,
    right: 140
};

const CommentSortByVotesButton = (props) => {

        const {
          sortCommentsByVotes,
          postDetail,
          comments,
          posts
        } = props;

        const handleChange = (event) => {
            sortCommentsByVotes(postDetail.id, comments)
          }

        return (
          <FloatingActionButton
            mini={true}
            primary={true}
            style={style}
            onClick={handleChange}
          >
            <ContentSort />
          </FloatingActionButton>
        );

};

const mapStateToProps = ({postDetail, comments, posts}) => {
    return {
        postDetail: postDetail.post,
        comments: comments,
        posts: posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortCommentsByVotes: (id, comments) => dispatch(sortCommentsByVotes(id, comments))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentSortByVotesButton);
