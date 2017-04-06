import React, { Component, PropTypes } from 'react';

class Basics extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.basicsinfo;

        return(
            <div>{data.name}<br />{data.email}<br />{data.phone}<br />{data.website}<br />{data.summary}</div>
        );
    }
}

Basics.propTypes = {
    basicsinfo: PropTypes.object
};

export default Basics;
