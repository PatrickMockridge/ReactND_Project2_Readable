import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import FontIcon from 'material-ui/FontIcon';
import { cyanA400, cyanA100, cyanA300 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

const iconStyles = {
  marginRight: 24
};

const HomeButton = (props) => {

  const { fetchPosts } = props;

  const handleClick = (event) => props.fetchPosts();

  return (
    <IconButton tooltip="Home" onClick={handleClick}>
      <ActionHome
        style={iconStyles}
        color={cyanA400}
        hoverColor={cyanA100}
        />
    </IconButton>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(
    null,
    mapDispatchToProps
)(HomeButton);
