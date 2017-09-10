import React, { Component } from 'react';
import { connect } from 'react-redux'
import CategoriesGridList from '../components/categories_grid_list'
import PostGridList from '../components/post_grid_list'
import PostAddButton from '../components/post_add_button'
import PostSortByVotesButton from '../components/post_sort_by_votes_button'
import PostSortByTimeButton from '../components/post_sort_by_time_button'
import { fetchPosts, fetchCategories, fetchPostsByCategory } from '../actions'

class RootView extends Component {

  componentWillMount() {

    const {
      match: { params: { category }},
      fetchPosts,
      fetchCategories,
      fetchPostsByCategory,
      posts,
      categories,
      } = this.props;
    category? fetchPostsByCategory(category) : fetchPosts()
    fetchCategories()
  }

  render() {
    const { categories,
      posts } = this.props
    return (
      <div>
        <CategoriesGridList categories={categories} />
        <PostGridList posts={posts} />
        <PostAddButton />
        <PostSortByTimeButton />
        <PostSortByVotesButton />
      </div>
    );
  }
}

const mapStateToProps = ({categories, posts}) => {
    return {
        categories: categories.categories,
        posts: posts.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchCategories: () => dispatch(fetchCategories()),
        fetchPostsByCategory: (category) => dispatch(fetchPostsByCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootView);
