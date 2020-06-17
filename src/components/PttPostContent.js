import React, {Component} from "react";
import {connect} from 'react-redux'

const PttPostContent = ({pttPost}) => {
    if (!pttPost) {
        return <div />
    }

    return <div>
        <div>${pttPost.title}</div>
        <div>${pttPost.author}</div>
    </div>
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps", state)
    return {pttPost: state.selectedPttPost}
}

export default connect(mapStateToProps)(PttPostContent)