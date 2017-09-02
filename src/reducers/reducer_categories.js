import {
    LOAD_CATEGORIES,
    SELECT_CATEGORY,
    SELECT_POST,
 } from '../actions';

function categories (state = initialCategoriesState, action) {
    switch (action.type) {
        case LOAD_CATEGORIES:
            let {categories, category} = action;
            return {
                categories,
                currentCategory: category
            };
        case SELECT_CATEGORY:
            ({category} = action);
            return {
                ...state,
                currentCategory: category
            };
        case SELECT_POST:
            return {
                ...state,
                currentCategory: action.category
            }
        default:
            return state;
    }
}

const initialCategoriesState = {
    currentCategory: null,
    categories: []
}

export default categories;
