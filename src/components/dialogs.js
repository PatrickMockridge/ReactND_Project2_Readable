import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDialog from './post_dialog';
import CommentDialog from './comment_dialog';
//import ToastMessage from './ToastMessage';
import {
    closePostDialog,
    closeCommentDialog,
    //closeSnackbar
} from '../actions';

const Dialog = (props) => {
        const {
            isPostDialogOpen,
            isCommentDialogOpen,
            //isSnackbarOpen,
            closePostDialog,
            closeCommentDialog,
            //closeSnackbar
        } = props;
        return (
            <div>
                <PostDialog
                    open={isPostDialogOpen}
                    onRequestClose={closePostDialog}/>
                <CommentDialog
                    open={isCommentDialogOpen}
                    onRequestClose={closeCommentDialog}/>
            </div>
        );

}

function mapStateToProps ({
    postDialog: { openPostDialog: isPostDialogOpen },
    commentDialog: { isOpen: isCommentDialogOpen },
    // snackbar: { isOpen: isSnackbarOpen}
    }) {
    return {
        isPostDialogOpen,
        isCommentDialogOpen,
        //isSnackbarOpen
    }
}

function mapDispatchToProps (dispatch) {
    return {
        closePostDialog: () => dispatch(closePostDialog()),
        closeCommentDialog: () => dispatch(closeCommentDialog()),
        //closeSnackbar: () => dispatch(closeSnackbar())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
