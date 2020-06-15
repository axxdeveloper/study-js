export const selectPttPost = pttPost => {
    return {
        type: "PTT_POST_SELECTED",
        payload: pttPost
    };
};