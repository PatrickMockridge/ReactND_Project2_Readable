import {
    votePost,
    voteComment
} from '../api';

export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

//posts
export const upVotePost = (id) => dispatch => (
    votePost(id, "upVote")
        .then(post => dispatch({
            type: UP_VOTE_POST,
            post
        }))
);
export const downVotePost = (id) => dispatch => (
    votePost(id, "downVote")
        .then(post => dispatch({
            type: DOWN_VOTE_POST,
            post
        }))
);

//comments
export const upVoteComment = (id) => dispatch => (
    voteComment(id, "upVote")
        .then(comment => dispatch({
            type: UP_VOTE_COMMENT,
            comment
        }))
);
export const downVoteComment = (id) => dispatch => (
    voteComment(id, "downVote")
        .then(comment => dispatch({
            type: DOWN_VOTE_COMMENT,
            comment
        }))
);
