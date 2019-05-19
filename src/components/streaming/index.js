import React, { Component } from 'react';
import './style.scss';

class streaming extends Component {
    render() {
        return (
            <div id="streamingId"> 
                <div className="card">
                    <div className="card-header">
                        Streaming
                    </div>
                    <div className="card-body">
                        <p className="card-text">Acá se verá el streaming en directo</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default streaming;