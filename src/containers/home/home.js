import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

class Home extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <div>
                <h1>
                    Home
                </h1>
                <h4>Welcome, {user.email}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
};
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home)