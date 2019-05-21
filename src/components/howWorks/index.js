import React, { Component } from 'react';
import './style.scss';

class HowWorks extends Component {
    render() {
        return (
            <div id="howWorksId"> 
                <div className="card">
                    <div className="card-header">
                        Funcionamiento
                    </div>
                    <div className="card-body">
                        <p className="text-justify card-text">Agrega palabras en la sección "Bolsa de palabras" y nuestra aplicación buscará dichas palabras dentro de Twitter.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HowWorks;