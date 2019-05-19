import React, { Component } from 'react';
import './style.scss';

class streaming extends Component {
    render() {
        const {
        } = this.props;

        return (
            <div id="streamingId"> 
                <div class="card">
                    <div class="card-header">
                        Streaming
                    </div>
                    <div class="card-body">
                        <p class="card-text">Acá se verá el streaming en directo</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default streaming;