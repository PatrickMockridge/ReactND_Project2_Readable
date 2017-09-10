import React, { Component } from 'react';
import { connect } from 'react-redux'
import PostDetailCard from '../components/post_detail_card'
import CommentsList from '../components/comments_list'
import CommentAddButton from '../components/comment_add_button'
import CommentSortByVotesButton from '../components/comment_sort_by_votes_button'
import CommentSortByTimeButton from '../components/comment_sort_by_time_button'
import { fetchComments, fetchPostDetails } from '../actions'

class PostDetailView extends Component {

  componentWillMount() {
    const {
        match: { params: { category, id }},
        fetchPostDetails,
        fetchComments,
      } = this.props;
            fetchPostDetails(id);
            fetchComments(id);
        }

  componentDidMount() {
    const {
        postDetail,
        comments
    } = this.props;
  }

    render() {
        const {
            match: { params: { category, id }},
            comments,
            postDetail,
          } = this.props;
    return(
      <div>
        <PostDetailCard id={id} postDetail={postDetail? postDetail : {}}/>
        <CommentsList comments={comments[id]}/>
        <CommentAddButton />
        <CommentSortByVotesButton />
        <CommentSortByTimeButton />
      </div>
    );
  }
}

const mapStateToProps = ({ postDetail , comments }) => {
        return {
          postDetail: postDetail.post,
          comments: comments
        }
      }

const mapDispatchToProps = (dispatch) => {
          return {
              fetchComments: (id) => dispatch(fetchComments(id)),
              fetchPostDetails: (id) => dispatch(fetchPostDetails(id))
          }
      }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetailView);
