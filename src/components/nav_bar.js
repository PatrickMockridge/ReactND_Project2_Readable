import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import PostSorterMenu from './post_sorter_menu'
import CategoriesMenu from './categories_menu'
import { connect } from 'react-redux'


const NavBar = (props) => {

  const handleTouchTap = () => {
    window.location.reload()
  }


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
          zDepth={2}
        />
      </div>
    );
  }

  export default (NavBar);
