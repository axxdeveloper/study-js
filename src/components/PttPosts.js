import React, {Component} from "react";
import {connect} from 'react-redux'
import {fetchPosts, selectPttPost} from "../actions";

class PttPosts extends Component {
    componentDidMount() {
        console.log('fetch posts')
        this.props.fetchPosts()
    }

    renderList() {
        if (this.props.postList) {
            console.log("renderList", this.props.postList)
            return this.props.postList.map((post) => {
                return <div key={post.id}>
                    <div key={post.id}><a onClick={() => this.props.selectPttPost(post)}>Title:{post.title}</a></div>
                </div>
            });
        } else {
            return 'Loading...'
        }
    };

    render() {
        console.log('render', this.props)
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    console.log("mapStateToProps",state)
    return {postList: state.fetchPosts};
}

export default connect(mapStateToProps, { fetchPosts, selectPttPost })(PttPosts)