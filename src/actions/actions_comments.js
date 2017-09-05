import { getComments, createComment, deleteComment, editComment } from '../api';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const SORT_COMMENTS_BY_VOTES = 'SORT_COMMENTS_BY_VOTES'
export const SORT_COMMENTS_BY_TIME = 'SORT_COMMENTS_BY_TIME'

export const fetchComments = (id) => dispatch => (
    getComments(id)
        .then(comments => dispatch({
            type: FETCH_COMMENTS,
            id,
            comments
        }))
);
export const createNewComment = (comment) => dispatch => (
    createComment(comment)
        .then(newComment => dispatch({
            type: CREATE_COMMENT,
            comment: newComment
        }))
);
export const deleteExistingComment = (id, postId) => dispatch => (
    deleteComment(id)
        .then(() => dispatch({
            type: DELETE_COMMENT,
            id,
            postId
        }))
);
export const editExistingComment = (id, body) => dispatch => (
    editComment(id, body)
        .then(comment => dispatch({
            type: EDIT_COMMENT,
            comment
        }))
);

export const sortCommentsByVotes = (id, comments) => ({
    type: SORT_COMMENTS_BY_VOTES,
    id,
    comments
});

export const sortCommentsByTime = (id, comments) => ({
    type: SORT_COMMENTS_BY_TIME,
    id,
    comments
});
