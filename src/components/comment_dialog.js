import React, {Component} from 'react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import YesIcon from 'material-ui-icons/CheckCircle';
import CancelIcon from 'material-ui-icons/Cancel';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import {
    handleCommentDialogChange,
    createNewComment,
    editExistingComment
} from '../actions';

const CommentDialog = (props) => {
        const {
            open,
            onRequestClose,
            isYesAcive = false,
            body,
            author,
            parentId,
            id,
            isEdit,
            handleCommentDialogChange,
            createNewComment,
            editExistingComment
        } = props;
        const yesButtonColor = isYesAcive? "primary": "default";
        const title = isEdit? "Edit Comment": "Add Comment";
        return (
            <Dialog
                open={open}
                onRequestClose={onRequestClose}
                title={title}>
                    <TextField
                        required autoFocus fullWidth multiline
                        rowsMax="3"
                        label="Comment"
                        defaultValue={body}
                        margin="normal"
                        onChange={(event) =>
                            handleCommentDialogChange("body", event.target.value)}
                        style={{minWidth: 320}}/>
                    <TextField
                        required disabled={isEdit}
                        label="Owner"
                        defaultValue={author}
                        onChange={(event) =>
                            handleCommentDialogChange("author", event.target.value)}
                        margin="normal"/>
                    <IconButton onClick={onRequestClose}
                        color="default">
                        <CancelIcon />
                    </IconButton>
                    <IconButton
                        disabled={!isYesAcive}
                        color={yesButtonColor}
                        onClick={() => isEdit?
                            editExistingComment(id, body):
                            createNewComment({body, author, parentId})}>
                        <YesIcon />
                    </IconButton>
            </Dialog>
        );

}

function mapStateToProps ({commentDialog: {id, body, author, isEdit}, postDetail: { post }}) {
    return {
        isEdit,
        id,
        body,
        author,
        parentId: post? post.id: null,
        isYesAcive: !!body && !!author
    }
}

function mapDispatchToProps (dispatch) {
    return {
        handleCommentDialogChange: (source, value) => dispatch(handleCommentDialogChange({source, value})),
        createNewComment: (comment) => dispatch(createNewComment(comment)),
        editExistingComment: (id, body) => dispatch(editExistingComment(id, body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentDialog);
