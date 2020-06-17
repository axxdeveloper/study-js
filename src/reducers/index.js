import { combineReducers } from 'redux';

export const pttPostsReducer = () => {
    console.log("pttPostsReducer")
    return [
        {title:'Article AAAA', author:"author AAA"},
        {title:'Article BBBB', author:"author BBB"},
        {title:'Article CCCC', author:"author CCC"},
        {title:'Article DDDD', author:"author DDD"},
    ];
};

export const selectedPttPostReducer = (selectedPttPost = null, action) => {
    console.log("selectedPttPostReducer", selectedPttPost, action)
     if (action.type === 'PTT_POST_SELECTED') {
        return action.payload;
     }

     return selectedPttPost;
}

export default combineReducers({
    pttPosts: pttPostsReducer,
    selectedPttPost: selectedPttPostReducer
})