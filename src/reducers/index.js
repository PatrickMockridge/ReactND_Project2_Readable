import { combineReducers } from 'redux';
import posts from './reducer_posts';
import categories from './reducer_categories';
import postDialog from './reducer_post_dialog';
import comments from './reducer_comments';
import commentDialog from './reducer_comment_dialog';
//import snackbar from './SnackbarReducer';
import postDetail from './reducer_post_detail';

export default combineReducers({
    categories,
    posts,
    postDialog,
    comments,
    commentDialog,
    //snackbar,
    postDetail
});
