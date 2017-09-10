import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import { connect } from 'react-redux';

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

const CategoriesGridList = (props) => {
  const { categories } = props;
  return (
    <div style={styles.root}>
      <GridList style={styles.gridList} cols={2.2}>
        {props.categories.map((category, index) => (
          <Link to={`/${category.path}`}>
            <GridTile
              key={index.toString()}
              title={category.name}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              style={styles.tileStyle}
              >
            <img src={'https://unsplash.it/200'} alt={'Placeholder Picture'} />
          </GridTile>
        </Link>
        ))}
      </GridList>
    </div>
    );
};


export default CategoriesGridList;
