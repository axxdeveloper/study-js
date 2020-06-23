import React, {Component} from "react";
import {connect} from 'react-redux'
import {fetchUser} from "../actions";

class UserHeader extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }

    render() {
        return <div>Author: {this.props.user?.name}</div>
    }
}

const mapStateToProps = (state, props) => {
    return {user: state.users?.find(user => user.id === props.userId)}
}

export default connect(mapStateToProps, {fetchUser})(UserHeader)