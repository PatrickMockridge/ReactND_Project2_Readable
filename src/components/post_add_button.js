import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { connect } from 'react-redux';
import {
    openPostDialog
} from '../actions';

const style = {
    marginRight: 20,
    position: 'fixed',
    bottom: 30,
    right: 30
};

const PostAddButton = (props) => {

        const { openPostDialog } = props;

        return (
          <FloatingActionButton
            style={style}
            onClick={openPostDialog}
          >
            <ContentAdd />
          </FloatingActionButton>

        );
};

const mapDispatchToProps = (dispatch) => {
    return {
        openPostDialog: () => dispatch(openPostDialog())
    };
};

export default connect(null, mapDispatchToProps)(PostAddButton);
