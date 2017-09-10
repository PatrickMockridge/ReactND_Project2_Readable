import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentSort from 'material-ui/svg-icons/content/sort';
import { connect } from 'react-redux';
import {
    sortPostsByVotes
} from '../actions';

const style = {
    marginRight: 20,
    position: 'fixed',
    bottom: 30,
    right: 175
};

const PostSortByVotesButton = (props) => {

        const {
          sortPostsByVotes,
          posts } = props;

        const handleChange = (event) => {
            sortPostsByVotes()
          }

        return (
          <FloatingActionButton
            secondary={true}
            style={style}
            onClick={handleChange}
          >
            <ContentSort />
          </FloatingActionButton>
        );      
};

const mapStateToProps = ({posts}) => {
    return {
        posts: posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortPostsByVotes: () => dispatch(sortPostsByVotes()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostSortByVotesButton);
