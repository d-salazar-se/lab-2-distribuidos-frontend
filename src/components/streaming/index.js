import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../loading/';
import './style.scss';

import {
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class streaming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isStreamingOn: false,
      tweets: [],
      words: [],
      wordSelected: '',
      limit: 10
    };
    
    this.toggleStreaming = this.toggleStreaming.bind(this);
    this.onChangeWordSelected = this.onChangeWordSelected.bind(this);
  }

  componentDidMount(){
    this.getWords();
    this.getTweets();
  }

  getTweets() {
    let url = process.env.REACT_APP_API_URL+"tweets/"

    if(this.state.wordSelected !== ''){
      url += "by-word/"+this.state.wordSelected+"/"+this.state.limit;
    } else {
      url += this.state.limit;
    }

    axios.get(url)
      .then(result => {
        this.setState({
          isLoading: false,
          tweets: result.data,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          tweets: []
        });
        alert("No ha sido posible conectarse al servidor para obtener los Tweets.");
      })
      .then(() => {
        var isStreamingOn = this.state.isStreamingOn;
        setTimeout(() => {
          if (isStreamingOn) {
            this.getTweets()
          }
        }, 5000);
      })
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
        console.log(error);
        this.setState({
          isLoading: false,
          words: [],
        });
        alert("No ha sido posible conectarse al servidor para obtener la Bolsa de Palabras.");
      })
  }

  toggleStreaming(){
    if (this.state.isStreamingOn === true) {
      this.setState({
        isStreamingOn: false
      });
    } else {
      this.setState({
        isStreamingOn: true
      });

      this.getTweets()
    }
  }

  onChangeWordSelected(event){
    event.preventDefault();
    const value = event.target.value;
    
    this.setState({
      wordSelected: value,
    }, () => { this.getTweets() });
  }

  render() {    
    return (
      <div id="streamingId"> 
        <div className="card">
          <div className="card-header">
            <div>
              <div className="row"> 
                <h3 id="labelStreaming">Streaming de tweets</h3>
              </div>
              <div className="row"> 
                <FormGroup>
                  <Label htmlFor="dropdownWords"> ¿Quieres buscar por una palabra especifica?, escoge la que quieras! (Puedes editar la bolsa de palabras desde el menu de bolsa de palabras) </Label>
                  <Input
                    id="dropdownWords"
                    type="select"
                    defaultValue=""
                    onChange={this.onChangeWordSelected}>
                    <option value="">Ninguno</option>
                    {
                      this.state.words.map((word, index) => {
                        return (<option key={index} value={word.value}>{word.value}</option>)
                      })
                    }
                  </Input>
                  
                </FormGroup>
              </div>
              <div className="row"> 
                <div id="btnStreaming">
                  { this.state.isStreamingOn
                    ? <button type="button" className="btn btn-warning" onClick={this.toggleStreaming}> Detener streaming </button>
                    : <button type="button" className="btn btn-success" onClick={this.toggleStreaming}> Empezar streaming </button>
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="card-body">
            { this.state.isLoading ? 
              <Loading />
              :
              <ul>
              { this.state.tweets.map((tweet, index) => {
                  return (
                    <li key={index}>
                      <div id="tweet" className="card text-white bg-info mb-3">
                        <div className="card-header">
                          <span>{tweet.user}</span>
                        </div>
                          <div className="card-body">
                            <p className="card-text">{tweet.text}</p>
                          </div>
                      </div>
                    </li>
                  )
                })
              }
              </ul>
          }
          </div>
        </div>
      </div>
    );
  }
}

export default streaming;