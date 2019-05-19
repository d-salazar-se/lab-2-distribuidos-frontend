import React, { Component } from 'react';
import './style.scss';

class members extends Component {

    render() {
        return (
            <div id="membersId"> 
                <div className="card">
                    <div className="card-header">
                        Integrantes
                    </div>
                    <div className="card-body">
                        <p className="card-text">Acá se verán los integrantes del taller</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default members;