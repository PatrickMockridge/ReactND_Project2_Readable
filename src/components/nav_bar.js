import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom'


const NavBar = (props) => {

    return (
      <div>
        <AppBar
          title={<Link to='/'><span>Readable</span></Link>}
          zDepth={2}
        />
      </div>
    );
  }

  export default (NavBar);
