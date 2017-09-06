import React, { Component } from 'react';
import { connect } from 'react-redux'
//import Post from './post'
//import CommentDetail from './comment_detail'
import NavBar from './nav_bar'
import PostGridList from './post_grid_list'
import Dialog from './dialogs'
import PostAddButton from './post_add_button'
import CommentAddButton from './comment_add_button'
import CommentSortbyVotesButton from './comment_sort_by_votes_button'
import CommentSortbyTimeButton from './comment_sort_by_time_button'
import PostDetailCard from './post_detail_card'
import { fetchPosts } from '../actions'

class App extends Component {

  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div className="App">
        <Dialog />
        <NavBar/>
        <br/>
        <PostGridList />
        <br/>
        <PostDetailCard/>
        <br />
        <br />
        <PostAddButton/>
        <CommentAddButton/>
        <CommentSortbyVotesButton/>
        <CommentSortbyTimeButton/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(
    null,
    mapDispatchToProps
)(App);
