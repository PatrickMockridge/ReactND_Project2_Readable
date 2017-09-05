import {
    FETCH_COMMENTS,
    CREATE_COMMENT,
    UP_VOTE_COMMENT,
    DOWN_VOTE_COMMENT,
    DELETE_COMMENT,
    DELETE_POST,
    EDIT_COMMENT,
    SORT_COMMENTS_BY_TIME,
    SORT_COMMENTS_BY_VOTES
 } from '../actions';

function comments (state = initialCommentsState, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                [action.id]: action.comments.sort((a, b) => {
                    return b.voteScore - a.voteScore;
                })
            }
        case CREATE_COMMENT:
            let existingComments = state[action.comment.parentId] || [];
            return {
                ...state,
                [action.comment.parentId]:
                existingComments
                .concat(action.comment)
                .sort((a, b) => {
                   return b.voteScore - a.voteScore;
                })
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
                        return b.voteScore - a.voteScore;
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
        case SORT_COMMENTS_BY_VOTES:
              existingComments = state[action.id] || [];
              return {
                  ...state,
                  [action.id]:
                  existingComments
                  .sort((a, b) => {
                     return b.voteScore - a.voteScore;
                  })
              };
        case SORT_COMMENTS_BY_TIME:
              existingComments = state[action.id] || [];
              return {
                ...state,
                [action.id]:
                existingComments
                .sort((a, b) => {
                    return b.timestamp - a.timestamp;
                })
        };
        default:
            return state
    }
}

const initialCommentsState = {}

export default comments;
