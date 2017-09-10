import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSort from 'material-ui/svg-icons/content/sort';
import { connect } from 'react-redux';
import {
    sortPostsByTime
} from '../actions';

const style = {
    marginRight: 20,
    position: 'fixed',
    bottom: 30,
    right: 105
};

const PostSortByVotesButton = (props) => {

        const {
          sortPostsByTime,
          posts } = props;

        const handleChange = (event) => {
            sortPostsByTime()
          }


        return (
          <FloatingActionButton
            primary={true}
            style={style}
            onClick={handleChange}
          >
            <ContentSort />
          </FloatingActionButton>
        );
      
};

const mapStateToProps = ({postDetail, comments, posts}) => {
    return {
        posts: posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortPostsByTime: () => dispatch(sortPostsByTime()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostSortByVotesButton);
