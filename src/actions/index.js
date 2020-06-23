import jsonPlaceholder from '../apis/jsonPlaceholder'
import _ from 'lodash'

export const selectPttPost = pttPost => {
    console.log("selectPttPost", pttPost)
    return {
        type: "PTT_POST_SELECTED",
        payload: pttPost
    };
};

// assign fetchUser to memoize, so that function instance is the same
export const fetchUser = (userId) => dispatch => _fetchUser(userId, dispatch);

// define a function to adapt memoize
const _fetchUser = _.memoize(async (userId, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`)

    dispatch({type:'FETCH_USER', payload: response.data})
})

// shorten version
export const fetchPosts = () => async dispatch => {
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
