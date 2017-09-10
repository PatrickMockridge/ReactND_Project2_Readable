import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import NavBar from '../components/nav_bar'
import Dialog from '../components/dialogs'
import RootView from './root_view'
import PostDetailView from './post_detail_view'
import CategoryView from './category_view'
import FourOhFour from './four_oh_four'
import { connect } from 'react-redux'
import { fetchPosts, fetchCategories } from '../actions'

class App extends Component {

  componentWillMount() {
    const { fetchPosts, fetchCategories } = this.props;
    fetchPosts()
    fetchCategories()
  }

  render() {
    return (
    <div>
        <Dialog />
        <NavBar />
        <Switch>
            <Route exact path="/" component={RootView} />
            <Route exact path="/:category" component={CategoryView} />
            <Route exact path="/:category/:id" component={PostDetailView} />
            <Route component={FourOhFour} />
        </Switch>
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchPosts: () => dispatch(fetchPosts()),
    };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
