import React, { Component } from 'react';
import './style.scss';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class wordsBag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenInput: false,
            words: ["palabra1", "palabr2", "hola", "patatas", "melon", "manzana", "cerro", "casa", "hogar"],
        };
        this.showInputModify = this.showInputModify.bind(this);
    }

    componentDidMount(){
        //Llamada a API para obtener todas las palabras
    }

    showInputModify(index){
        var inputTextWordsBagDisplay = document.getElementById('inputTextWordsBag_' + index);
        // llamar a api para realizar el cambio a la base de datos de dicha palabra

        this.setState({
            
        });
    }

    addWord(e){
        e.preventDefault();
        const newWord = this.newItem.value;
        this.setState({
            words: [...this.state.words, newWord]
        });
    }

    render() {
        const {
        } = this.props;
        
        return (
            <div id="wordsBagId"> 
                <div className="card">
                    <div className="card-header">
                        Bolsa de palabras
                        <form className="form-inline" onSubmit={(e) => this.addWord(e)}>
                            <div className="form-group">
                                <label for="addWordBox" className="sr-only">Nueva palabra</label>
                                <input ref={input => this.newItem = input} type="text" className="form-control" id="addWordBox" placeholder="Ingrese nueva palabra" />
                            </div>
                            <button type="submit" className="btn btn-primary"> Añadir </button>
                        </form>
                    </div>
                    <div id="cardWordsBagBody" className="card-body scroll">
                        <ul>
                            {this.state.words.map( (words,index) => 
                                
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">{words}</span>
                                    </div>
                                    <button id="buttonEditWordsBag" type="button" className="btn btn-warning" onClick={ () => this.showInputModify( (index + 1) ) }> 
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                    <input id={"inputTextWordsBag_" + (index + 1)} type="text" className="form-control" placeholder="Ingrese una palabra" aria-describedby="basic-addon1"/>
                                </div>
                            )}
                        </ul>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default wordsBag;