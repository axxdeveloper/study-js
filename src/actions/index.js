import jsonPlaceholder from '../apis/jsonPlaceholder'

export const selectPttPost = pttPost => {
    console.log("selectPttPost", pttPost)
    return {
        type: "PTT_POST_SELECTED",
        payload: pttPost
    };
};

// shorten version
export const fetchPosts = () => async dispatch => {
    console.log("action fetchPosts")
    const response = await jsonPlaceholder.get('/posts')

    dispatch({type:'FETCH_POSTS', payload: response.data})
}

// origin version
// export const fetchPosts = () => {
//     // dispatch: can change any data we want
//     // getState: get or access any data we want
//     return async function(dispatch, getState) {
//         const response = await jsonPlaceholder.get('/posts')
//
//         dispatch({type:'FETCH_POSTS', payload: response})
//     }
// }
