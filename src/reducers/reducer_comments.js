import {
    FETCH_COMMENTS,
    CREATE_COMMENT,
    UP_VOTE_COMMENT,
    DOWN_VOTE_COMMENT,
    DELETE_COMMENT,
    DELETE_POST,
    EDIT_COMMENT
 } from '../actions';

function comments (state = initialCommentsState, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                [action.id]: action.comments
            }
        case CREATE_COMMENT:
            let existingComments = state[action.comment.parentId] || [];
            return {
                ...state,
                [action.comment.parentId]: existingComments.concat(action.comment)
            }
        case UP_VOTE_COMMENT:
        case DOWN_VOTE_COMMENT:
        case EDIT_COMMENT:
            existingComments = state[action.comment.parentId] || [];
            return {
                ...state,
                [action.comment.parentId]: existingComments
                    .filter(comment => comment.id !== action.comment.id)
                    .concat(action.comment)
                    .sort((a, b) => {
                        return a.timestamp - b.timestamp;
                    })
            }
        case DELETE_COMMENT:
            existingComments = state[action.postId] || []
            return {
                ...state,
                [action.postId]: existingComments
                    .filter(comment => comment.id !== action.id)
            }
        case DELETE_POST:
            return {
                ...state,
                [action.id]: []
            }
        default:
            return state
    }
}

const initialCommentsState = {}

export default comments;
