import {
    LOAD_POSTS,
    SORT_POSTS_BY_UP_VOTES,
    SORT_POSTS_BY_DOWN_VOTES,
    SORT_POSTS_BY_TIME,
    SELECT_CATEGORY,
    CREATE_POST,
    EDIT_POST,
    UP_VOTE_POST,
    DOWN_VOTE_POST,
    DELETE_POST
 } from '../actions';

function posts (state = initialPostsState, action) {
    switch (action.type) {
        case LOAD_POSTS:
            const { posts } = action;
            return {
                sortBy: SORT_BY_UP,
                posts: sortPostsBy(posts, SORT_BY_UP)
            };
        case CREATE_POST:
            return {
                ...state,
                sortBy: SORT_BY_LATEST,
                posts: sortPostsBy(
                    state.posts.concat(action.newPost),
                    SORT_BY_LATEST)
            };
        case EDIT_POST:
            return {
                ...state,
                sortBy: SORT_BY_LATEST,
                posts: sortPostsBy(
                    state.posts
                        .filter(post => post.id !== action.post.id)
                        .concat(action.post),
                    SORT_BY_LATEST)
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        case UP_VOTE_POST:
            return {
                ...state,
                posts: sortPostsBy(
                    state.posts
                        .filter(post => post.id !== action.post.id)
                        .concat(action.post),
                    state.sortBy)
            }
        case SORT_POSTS_BY_UP_VOTES:
            return {
                sortBy: SORT_BY_UP,
                posts: sortPostsBy(state.posts, SORT_BY_UP)
            };
        case SORT_POSTS_BY_TIME:
            return {
                sortBy: SORT_BY_LATEST,
                posts: sortPostsBy(state.posts, SORT_BY_LATEST)
            };
        case SELECT_CATEGORY:
            return {
                sortBy: SORT_BY_UP,
                posts: sortPostsBy(action.posts, SORT_BY_UP)
            };
        default:
            return state;
    }
}

const sortPostsBy = (posts, option) => {
    switch (option) {
        case SORT_BY_UP:
            return [...posts].sort((a, b) => {
                return b.voteScore - a.voteScore;
            });
        case SORT_BY_DOWN:
            return [...posts].sort((a, b) => {
                return a.voteScore - b.voteScore;
            });
        case SORT_BY_LATEST:
            return [...posts].sort((a, b) => {
                return b.timestamp - a.timestamp;
            });
        default:
            return posts;
    }
}

const SORT_BY_UP = 'upVotes';
const SORT_BY_DOWN = 'downVotes';
const SORT_BY_LATEST = 'latest';

const initialPostsState = {
    sortBy: SORT_BY_LATEST,
    posts: []
}

export default posts;
