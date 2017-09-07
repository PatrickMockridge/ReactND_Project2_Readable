import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu'
import { sortPostsByVotes, sortPostsByTime } from '../actions'
import { connect } from 'react-redux'

class PostSorterMenu extends Component {

render() {
    const {
      sortPostsByVotes,
      sortPostsByTime } = this.props;

    const handleChange = (event, value) => {
      if(value=='Sort Posts by Votes') {
        this.props.sortPostsByVotes()
      }
      else if (value=='Sort Posts by Time') {
        this.props.sortPostsByTime()
      }
    }
    return (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        onChange={handleChange}
        openImmediately={true}
        >
              <MenuItem value={'Sort Posts by Time'}
                        primaryText={'Sort Posts by Time'}
                        />
              <MenuItem value={'Sort Posts by Votes'}
                        primaryText={'Sort Posts by Votes'}
                        />
      </IconMenu>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
    return {
        sortPostsByVotes: () => dispatch(sortPostsByVotes()),
        sortPostsByTime: () => dispatch(sortPostsByTime())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(PostSorterMenu);
