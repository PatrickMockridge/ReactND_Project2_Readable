import React, {Component} from 'react';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import {
    handleCommentDialogChange,
    createNewComment,
    editExistingComment
} from '../actions';



class CommentDialog extends Component {


    render() {
        const {
            open, onRequestClose, isYesActive = false,
            body, author, parentId, id,
            isEdit,
            handleCommentDialogChange,
            createNewComment,
            editExistingComment
        } = this.props;
        const yesButtonColor = isYesActive? "primary": "default";
        const title = isEdit? "Edit Comment": "Add Comment";

        const customContentStyle = {
          width: '100%',
          maxWidth: 'none',
        };

        const buttonStyle = {
          margin: 12,
        };

        return (
            <Dialog
                open={open}
                onRequestClose={onRequestClose}
                dialogueTitle={title}
                contentStyle={customContentStyle}
                >
                    <TextField
                        required
                        fullWidth
                        floatingLabelText="Body"
                        defaultValue={body}
                        multiLine={true}
                        rows={4}
                        rowsMax={6}
                        margin="normal"
                        onChange={(event) =>
                            handleCommentDialogChange("body", event.target.value)}
                        style={{minWidth: 320}}/>
                        <br/>
                        <br/>
                    <TextField
                        onChange={(event) =>
                            handleCommentDialogChange("author", event.target.value)}
                        floatingLabelText="Author"
                        defaultValue={author}/>
                      <RaisedButton onClick={onRequestClose}
                        secondary={true}
                        label='Cancel'
                        style={buttonStyle}
                        />
                      <RaisedButton
                        disabled={!isYesActive}
                        primary={true}
                        onClick={() => isEdit?
                            editExistingComment(id, body):
                            createNewComment({body, author, parentId})}
                        label='Submit'
                        style={buttonStyle}
                        />
            </Dialog>
        );
    }
}

function mapStateToProps ({commentDialog: {id, body, author, isEdit}, postDetail: { post }}) {
    return {
        isEdit,
        id, body, author, parentId: post? post.id: null,
        isYesActive: !!body && !!author
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
