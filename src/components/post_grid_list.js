import React from 'react';
import { Link } from 'react-router-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import { connect } from 'react-redux';
import { tealA400 } from 'material-ui/styles/colors';
import { fetchPostDetails } from '../actions'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    marginRight: '1'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  tileStyle: {
    minWidth: '200',
  }
};

const PostGridList = (props) => {
  return (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {props.posts.map((post, index) => (
        <Link to={`${post.category}/${post.id}`}>
          <GridTile
            key={post.timestamp.toString()}
            title={post.title}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            style={styles.tileStyle}
            >
          <img src={'https://unsplash.it/g/200'} alt={'Placeholder Picture'} />
        </GridTile>
      </Link>
      ))}
    </GridList>
  </div>
  )
};

export default PostGridList;
