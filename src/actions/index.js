export const selectPttPost = pttPost => {
    console.log("selectPttPost", pttPost)
    return {
        type: "PTT_POST_SELECTED",
        payload: pttPost
    };
};