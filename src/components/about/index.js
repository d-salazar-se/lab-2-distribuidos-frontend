import React, { Component } from 'react';
import './style.scss';

class About extends Component {

    render() {
        return (
            <div id="aboutId"> 
                <div className="card">
                    <div className="card-header">
                        Acerca de
                    </div>
                    <div className="card-body">
                        <div className="mb-3">
                            <p className="card-text">Este proyecto corresponde al laboratorio 2 del ramo Sistemas Distribuídos</p>
                        </div>
                        <div className="text-left">
                            <div >Integrantes</div>
                            <ul>
                                <li>Cristóbal Donoso</li>
                                <li>Shalini Ramchandani</li>
                                <li>Diego Salazar S.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;