import { combineReducers } from 'redux';

export const pttPostsReducer = () => {
    return [
        {title:'Article AAAA', author:"author AAA"},
        {title:'Article BBBB', author:"author BBB"},
        {title:'Article CCCC', author:"author CCC"},
        {title:'Article DDDD', author:"author DDD"},
    ];
};

export const selectedPttPostReducer = (selectedPttPost = null, action) => {
     if (action.type === 'PTT_POST_SELECTED') {
        return action.payload;
     }

     return selectedPttPost;
}

export const usersReducer = (state = [], action) => {
    if (action.type === 'FETCH_USER') {
        return [...state, action.payload]; // add payload to existing state
    }

    return state;
}

export const fetchPostReducer = (fetchPosts = null, action) => {
    if (action.type === 'FETCH_POSTS') {
        return action.payload;
    }

    return fetchPosts
}

export default combineReducers({
    selectedPttPost: selectedPttPostReducer,
    fetchPosts: fetchPostReducer,
    users: usersReducer
})