import React, {Component} from "react";
import {connect} from 'react-redux'

class PttPosts extends Component {
    render() {
        console.log("render")
        return <div>PttPosts</div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state;
}

export default connect(mapStateToProps)(PttPosts)