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
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" onClick = {() => handleSelectedItem(1)}>Streaming</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Button onClick = {() => handleSelectedItem(2)} >Bolsa de palabras</Button>
                        </li>
                        <li className="nav-item">
                            <Button onClick = {() => handleSelectedItem(3)} >Integrantes</Button>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
                
        );
    }
}

export default actionBar;