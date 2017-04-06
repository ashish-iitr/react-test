import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getUserData } from '../actions';
import { bindActionCreators } from 'redux';
import Basics from '../components/Basics';

class UserData extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        const { data } = this.props;
        if(!data.basics) {
            return <div>Loading..</div>;
        }
        console.log(data);
        return(
            <Basics basicsinfo={data.basics} />
        );
    }
}

UserData.propTypes = {
    data: PropTypes.object,
    getUserData: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        data: state.user.userData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserData: bindActionCreators(getUserData, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserData);
