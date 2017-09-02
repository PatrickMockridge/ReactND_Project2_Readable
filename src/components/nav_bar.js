import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import HomeButton from './home_button'
import CategoriesMenu from './categories_menu'

const NavBar = () => {

    return (
      <div>
        <AppBar
          title="Readable"
          iconElementLeft={<HomeButton/>}
          iconElementRight={<CategoriesMenu/>}
        />
      </div>
    );
  }

export default NavBar;
