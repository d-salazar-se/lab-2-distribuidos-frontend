import React, { Component } from 'react';
import './style.scss';

class members extends Component {
    render() {
        const {
        } = this.props;

        return (
            <div id="membersId"> 
                <div class="card">
                    <div class="card-header">
                        Integrantes
                    </div>
                    <div class="card-body">
                        <p class="card-text">Acá se verán los integrantes del taller</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default members;