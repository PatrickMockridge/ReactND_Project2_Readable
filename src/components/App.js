import React, { Component } from 'react';
import { connect } from 'react-redux'
//import Post from './post'
//import CommentDetail from './comment_detail'
import NavBar from './nav_bar'
import PostGridList from './post_grid_list'
import Dialog from './dialogs'
import PostAddButton from './post_add_button'
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
        <PostAddButton/>
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
