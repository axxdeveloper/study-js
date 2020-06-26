import React, {Component} from "react";
import {connect} from 'react-redux'

class UserHeader extends Component {

    render() {
        return <div>Author: {this.props.user?.name}</div>
    }
}

const mapStateToProps = (state, props) => {
    return {user: state.users?.find(user => user.id === props.userId)}
}

export default connect(mapStateToProps)(UserHeader)