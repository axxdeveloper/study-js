import React, {Component} from "react";
import {connect} from 'react-redux'
import {fetchPostsAndUsers, selectPttPost} from "../actions";
import UserHeader from "./UserHeader";

class PttPosts extends Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers()
    }

    renderList() {
        if (this.props.postList) {
            return this.props.postList.map((post) => {
                return <div key={post.id}>
                    <div key={post.id}><a onClick={() => this.props.selectPttPost(post)}>Title:{post.title}</a></div>
                    <UserHeader userId={post.userId} />
                </div>
            });
        } else {
            return 'Loading...'
        }
    };

    render() {
        return <div>{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return {postList: state.fetchPosts};
}

export default connect(mapStateToProps, { fetchPostsAndUsers, selectPttPost })(PttPosts)