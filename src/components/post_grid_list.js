import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
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

  const { fetchPostDetails } = props

  const openPostDetail = (event) => {
    props.fetchPostDetails(event.target.value)
  }



  return (

  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {props.posts.map((post, index) => (
        <GridTile
          key={post.timestamp.toString()}
          title={post.title}
          actionIcon={<IconButton value={post.id} onClick={openPostDetail}><ActionFlightTakeoff  color={tealA400} /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          style={styles.tileStyle}
        >
          <img src={'https://unsplash.it/g/200'} alt={'Placeholder Picture'} />
        </GridTile>
      ))}
    </GridList>
  </div>
  )
};

function mapStateToProps ({posts, currentCategory}) {
    return {
        posts: posts.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostDetails: (id) => dispatch(fetchPostDetails(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostGridList);
