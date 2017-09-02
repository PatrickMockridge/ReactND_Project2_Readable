import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import PostSorterMenu from './post_sorter_menu'
import CategoriesMenu from './categories_menu'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'


const NavBar = (props) => {

  const { fetchPosts } = props;

  const handleTouchTap = () => props.fetchPosts();

  const styles = {
  title: {
    cursor: 'pointer',
  },
};

    return (
      <div>
        <AppBar
          title={<span style={styles.title}>Readable</span>}
          onTitleTouchTap={handleTouchTap}
          iconElementLeft={<PostSorterMenu/>}
          iconElementRight={<CategoriesMenu/>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchPosts: () => dispatch(fetchPosts())
    }
  }

  export default connect(
      null,
      mapDispatchToProps
  )(NavBar);
