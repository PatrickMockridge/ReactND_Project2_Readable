import {
    SELECT_POST,
    EDIT_POST,
    UP_VOTE_POST,
    DOWN_VOTE_POST,
    DELETE_POST
} from '../actions';

function postDetail(state = initialPostDetailState, action) {
    switch (action.type) {
        case SELECT_POST:
        case EDIT_POST:
        case UP_VOTE_POST:
            return {
            post: action.post
            };
        case DOWN_VOTE_POST:
            return {
                post: action.post
            };
        case DELETE_POST:
            return initialPostDetailState;
        default:
            return state;
    }
}

const initialPostDetailState = {
    post: null
}
export default postDetail;
