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
    handlePostDialogChange,
    createNewPost,
    editExistingPost
} from '../actions';



class PostDialog extends Component {
    setCurrentCategory() {
        const {
            currentCategory,
            handlePostDialogChange
        } = this.props;
        if (currentCategory) {
            handlePostDialogChange("category", currentCategory);
        }
    }
    render() {
        const {
            title,
            body,
            author,
            category,
            id,
            onRequestClose,
            open,
            createNewPost,
            editExistingPost,
            handlePostDialogChange,
            currentCategory,
            isEdit,
            isYesActive,
            isTitleError,
            isAuthorError,
            isBodyError,
            isCategoryError
        } = this.props;

        const yesButtonColor = isYesActive? true: false;

        const dialogTitle = isEdit? "Edit Post": 'New Post';

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
                onEntered={() => this.setCurrentCategory()}
                title={dialogTitle}
                contentStyle={customContentStyle}>
                    <TextField
                        required autoFocus
                        error={isTitleError}
                        onChange={(event) =>
                            handlePostDialogChange("title", event.target.value)}
                        floatingLabelText="Title"
                        defaultValue={title}
                        />
                      <br/>
                      <br/>
                    <TextField
                        required fullWidth
                        error={isBodyError}
                        onChange={(event) =>
                            handlePostDialogChange("body", event.target.value)}
                        rowsMax="5"
                        floatingLabelText="Body"
                        defaultValue={body}
                        multiLine={true}
                        rows={4}
                        rowsMax={6}
                      />
                        <br/>
                        <br/>
                        <TextField
                            required disabled={isEdit}
                            error={isAuthorError}
                            onChange={(event) =>
                                handlePostDialogChange("author", event.target.value)}
                            floatingLabelText="Author"
                            defaultValue={author}
                            />
                        <br />
                        <br/>
                        <TextField
                              required
                              error={isCategoryError}
                              onChange={(event) =>
                                  handlePostDialogChange("category", event.target.value)}
                              hintText="react, redux or udacity"
                              floatingLabelText="Category"
                          />
                        <br/>
                        <br/>
                        <br/>
                    <RaisedButton
                      label='Cancel'
                      secondary={true} onClick={() => onRequestClose()}
                      style={buttonStyle}/>
                    <RaisedButton
                        label='Submit'
                        disabled={!isYesActive}
                        onClick={() => {
                            isEdit ?
                            editExistingPost(id, title, body):
                            createNewPost({title, body, category, author})
                        }}
                        primary={true}
                        style={buttonStyle}/>
            </Dialog>
        );
      }
}

const isError = (content) => (content === undefined? false: !!!content);

const isValidCategory = (categories, category, isStrict) => {
    if (category === undefined && !isStrict) {
        return true;
    }
    return categories.map((cat) => cat.name).includes(category);
}

const mapStateToProps = ({
        categories: {categories, currentCategory},
        postDialog: {title, body, category, author, isEdit, id}
    }) => {
    return {
        isEdit,
        title,
        body,
        category,
        author,
        id,
        currentCategory: currentCategory,
        isTitleError: isError(title),
        isBodyError: isError(body),
        isCategoryError: isError(category) || !isValidCategory(categories, category),
        isAuthorError: isError(author),
        isYesActive: !!title && !!author &&!!body &&
            isValidCategory(categories, category, true)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        handlePostDialogChange: (source, value) => dispatch(handlePostDialogChange({source, value})),
        createNewPost: (post) => dispatch(createNewPost(post)),
        editExistingPost: (id, title, body) => dispatch(editExistingPost({id, title, body}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDialog);
