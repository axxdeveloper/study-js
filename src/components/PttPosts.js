import React, {Component} from "react";
import {connect} from 'react-redux'
import {selectPttPost} from '../actions'

class PttPosts extends Component {
    renderPosts() {
        return this.props.pttPosts.map((post) => {
           return <div key={post.title}>
               ${post.title} / ${post.author} <button onClick={() => this.props.selectPttPost(post)} key={post.title}>Click</button>
           </div>
        });
    }


    render() {
        return <div>{this.renderPosts()}</div>
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state;
}

export default connect(mapStateToProps, { selectPttPost })(PttPosts)