import React, { Component } from 'react';
import './style.scss';

class wordsBag extends Component {
    render() {
        const {
        } = this.props;

        return (
            <div id="wordsBagId"> 
                <div class="card">
                    <div class="card-header">
                        Bolsa de palabras
                    </div>
                    <div class="card-body">
                        <p class="card-text">Acá se verán las palabras que querrá obtener de twitter</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default wordsBag;