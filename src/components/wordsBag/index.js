import React, { Component } from 'react';
import axios from 'axios';
import './style.scss';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_URL = "http://localhost:9000/"

class wordsBag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenInput: false,
            isLoading: true,
            words: [],
        };

        // this.addWord = this.addWord.bind(this);
        this.delete = this.delete.bind(this);
    }

    componentDidMount(){
        this.getWords();
    }

    getWords() {
        axios.get(API_URL+"words/")
            .then(result => {
                this.setState({
                    isLoading: false,
                    words: result.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    addWord(e){
        const newWord = this.newItem.value;
        axios.post(API_URL+"words/", {value: newWord})
            .then(result =>
                this.getWords()
            )
            .catch(error => {
                console.log(error)
            })
    }

    delete(word){
        console.log(word);
        
        axios.delete(API_URL+"words/", {value: word})
            .then(result =>
                this.getWords()
            )
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div id="wordsBagId"> 
                { this.state.isLoading ? (
                    <div>Cargando</div>
                ) : (
                <div className="card">
                    <div className="card-header">
                        <h3>Bolsa de palabras</h3>
                        <div className="input-group">
                            <input ref={input => this.newItem = input} type="text" className="form-control" placeholder="Ingrese nueva palabra" />
                            <button type="button" className="btn btn-primary">Añadir</button>
                        </div>
                    </div>
                    <div id="cardWordsBagBody" className="card-body scroll">
                        {this.state.words.map( (word, index) => {
                            return (
                                <div className="input-group mb-3" key="{index}">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">{word.value}</span>
                                    </div>
                                    <button type="button" className="btn btn-danger" onClick={ () => this.delete(word.value) }> 
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </div>
                            )}
                        )}
                    </div>
                </div>
                )}
            </div>
        );
    }
}

export default wordsBag;