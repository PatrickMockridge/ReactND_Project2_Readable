import {
    getPostsByCategory,
    getPosts,
    getPost,
    createPost,
    editPost,
    deletePost,
    getCategories
} from '../api';

export const LOAD_POSTS = 'LOAD_POSTS';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SELECT_POST = 'SELECT_POST';
export const CREATE_POST = 'CREATE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const SORT_POSTS_BY_UP_VOTES = 'SORT_POSTS_BY_UP_VOTES';
export const SORT_POSTS_BY_DOWN_VOTES = 'SORT_POSTS_BY_DOWN_VOTES';
export const SORT_POSTS_BY_TIME = 'SORT_POSTS_BY_TIME';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
//get
export const fetchPosts = () => dispatch => (
    getPosts()
        .then(posts => dispatch({
            type: LOAD_POSTS,
            posts
        }))
);
export const fetchPostsByCategory = (category) => dispatch => (
    getPostsByCategory(category)
        .then(posts => dispatch({
            type: SELECT_CATEGORY,
            category,
            posts
        }))
);
export const fetchPostDetails = (postId) => dispatch => (
    getPost(postId)
        .then(post => dispatch({
            type: SELECT_POST,
            post
        }))
);
export const fetchCategories = (category) => dispatch => (
    getCategories()
        .then(categories => dispatch({
            type: LOAD_CATEGORIES,
            categories,
            category
        }))
);
//create
export const createNewPost = (post) => dispatch => (
    createPost(post)
        .then(res => Object.assign(post, res))
        .then(newPost => dispatch({
            type: CREATE_POST,
            newPost
        }))
);

//update
export const editExistingPost = ({id, title, body}) => dispatch => (
    editPost({id, title, body})
        .then(post => dispatch({
            type: EDIT_POST,
            post
        }))
);

//delete
export const deleteExistingPost = (id) => dispatch => (
    deletePost(id)
        .then(() => dispatch({
            type: DELETE_POST,
            id
        }))
);

//sort
export const sortPostsByVotes = () => ({
    type: SORT_POSTS_BY_UP_VOTES
});

export const sortPostsByTime = () => ({
    type: SORT_POSTS_BY_TIME
});
