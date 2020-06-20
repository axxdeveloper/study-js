import React from "react";
import {connect} from 'react-redux'

const PttPostContent = ({selectedPost}) => {
    if (!selectedPost) {
        return <div />
    }
    return <div>
        <div>{selectedPost.title}</div>
        <div>{selectedPost.body}</div>
    </div>
}

const mapStateToProps = (state) => {
    return {selectedPost: state.selectedPttPost}
}

export default connect(mapStateToProps)(PttPostContent)