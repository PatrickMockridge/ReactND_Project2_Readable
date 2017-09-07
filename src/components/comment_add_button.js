import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { connect } from 'react-redux';
import {
    openCommentDialog
} from '../actions';

const style = {
    marginRight: 20,
    position: 'fixed',
    bottom: 30,
    right: 105
};

const CommentAddButton = (props) => {

        const { openCommentDialog, postDetail } = props;

        if(!postDetail) {
          return <p></p>
        }

        else {

        return (
          <FloatingActionButton
            mini={true}
            secondary={true}
            style={style}
            onClick={openCommentDialog}
          >
            <ContentAdd />
          </FloatingActionButton>

        );
      }
};

const mapStateToProps = ({postDetail}) => {
    return {
        postDetail: postDetail.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openCommentDialog: () => dispatch(openCommentDialog())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentAddButton);
