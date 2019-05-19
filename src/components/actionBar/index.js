import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './style.scss';

class actionBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            handleSelectedItem,
        } = this.props;

        return (
            <div id="actionBarId"> 
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="btn btn-success" onClick = {() => handleSelectedItem(1)}> Streaming </button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <button class="btn btn-success" onClick = {() => handleSelectedItem(2)} > Bolsa de palabras </button>
                        </li>
                        <li className="nav-item">
                            <button class="btn btn-success" onClick = {() => handleSelectedItem(3)} > Integrantes </button>
                        </li>
                        <li className="nav-item">
                            <button class="btn btn-success" onClick = {() => handleSelectedItem(4)} > ¿Como funciona? </button>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
                
        );
    }
}

export default actionBar;