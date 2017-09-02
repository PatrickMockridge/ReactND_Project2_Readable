import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FontIcon from 'material-ui/FontIcon';
import { connect } from 'react-redux';
import { tealA400 } from 'material-ui/styles/colors';

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
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  tileStyle: {
    minWidth: '200',
  }
};

const PostGridList = (props) => (

  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {props.posts.map((post) => (
        <GridTile
          key={post.id}
          title={post.title}
          actionIcon={<IconButton><ActionFlightTakeoff  color={tealA400} /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          style={styles.tileStyle}
        >
          <img src={'https://unsplash.it/200'} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

function mapStateToProps ({posts, currentCategory}) {
    return {
        posts: posts.posts
    }
}


export default connect(mapStateToProps, null)(PostGridList);
