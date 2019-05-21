import React, { Component } from 'react';
import axios from 'axios';
import './style.scss';
import Loading from '../loading/';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class wordsBag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenInput: false,
      isLoading: true,
      words: [],
    };

    console.log(process.env);
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount(){
    this.getWords();
  }

  getWords() {
    axios.get(process.env.REACT_APP_API_URL+"words/")
      .then(result => {
        this.setState({
          isLoading: false,
          words: result.data
        });
      })
      .catch(error => {
        alert("No ha sido posible conectarse al servidor.");
      })
  }

  add(){
    var newWord = this.newWordInput.value;
    axios.post(process.env.REACT_APP_API_URL+"words/", {value: newWord})
      .then(result =>
        this.getWords()
      )
      .catch(error => {
        console.log(error);
        alert("Ha ocurrido un error al intentar agregar la palabra.")
      })
  }

  delete(word){
    if (window.confirm('Está seguro que desea eliminar la palabra de la bolsa?')) {
      axios.delete(process.env.REACT_APP_API_URL+"words/", {data: {value: word}})
        .then(result =>
          this.getWords()
        )
        .catch(error => {
          alert("Ha ocurrido un error al intentar eliminar la palabra.")
        })
    }
  }

  render() {
    return (
      <div id="wordsBagId"> 
        { this.state.isLoading ? (
          <Loading />
        ) : (
        <div className="card">
          <div className="card-header">
            <h3>Bolsa de palabras</h3>
            <div className="input-group">
              <input ref={input => this.newWordInput = input} type="text" className="form-control" placeholder="Ingrese una palabra" />
              <button type="button" className="btn btn-primary" onClick={ () => this.add() }>Añadir</button>
            </div>
          </div>
          <div id="cardWordsBagBody" className="card-body scroll">
            { this.state.words.map((word, index) => {
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