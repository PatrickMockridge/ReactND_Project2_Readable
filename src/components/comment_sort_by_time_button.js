import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSort from 'material-ui/svg-icons/content/sort';
import { connect } from 'react-redux';
import {
    sortCommentsByTime
} from '../actions';

const style = {
    marginRight: 20,
    position: 'fixed',
    bottom: 30,
    right: 175
};

const CommentSortbyTimeButton = (props) => {

        const {
          sortCommentsByTime,
          postDetail,
          comments,
          posts } = props;

        const handleChange = (event) => {
            sortCommentsByTime(postDetail.id, comments)
          }

        if((Object.keys(comments).length === 0 && comments.constructor === Object) || (posts.length == 0)) {
          return <p></p>
        }

        else {

        return (
          <FloatingActionButton
            mini={true}
            secondary={true}
            style={style}
            onClick={handleChange}
          >
            <ContentSort />
          </FloatingActionButton>
        );
      }
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
        sortCommentsByTime: (id, comments) => dispatch(sortCommentsByTime(id, comments)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentSortbyTimeButton);
