import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { Link } from 'react-router-dom'

const NavBar = (props) => {

    return (
      <div>
        <AppBar
          iconElementLeft={<Link to='/'>
            <IconButton><NavigationClose /></IconButton>
            </Link>}
          title={<span>Readable</span>}
          zDepth={2}
        />
      </div>
    );
  }

  export default (NavBar);
