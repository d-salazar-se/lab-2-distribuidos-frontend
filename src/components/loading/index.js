import React, { Component } from 'react';

import Spinner from 'react-bootstrap/Spinner';

class Loading extends Component {
    render() {
        return (
            <Spinner animation="grow"></Spinner>
        );
    }
}

export default Loading;