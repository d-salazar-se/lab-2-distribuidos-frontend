import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../loading/';
import './style.scss';

import {
  InputGroup,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

class streaming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      count: 0,
      isStreamingOn: false,
      tweets: [],
      words: [],
      dropdownOpen: false,
      wordSelected: '',
    };
    this.startStreaming = this.startStreaming.bind(this);
    this.stopStreaming = this.stopStreaming.bind(this);
  }

  startStreaming(){
    this.setState({
      isStreamingOn: true
    });
    this.myInterval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 1000)
    this.getTweets();
  }

  stopStreaming(){
    this.setState({
      isStreamingOn: false,
      count: 0,
    });
    clearInterval(this.myInterval)
  }

  componentDidMount(){
    this.getWords();
  }

  componentWillMount(){
    clearInterval(this.myInterval)
  }

  refreshPageIn(seconds){
    if(this.state.count === seconds){
      this.getTweets();
      clearInterval(this.myInterval)
      this.setState({
        count: 0
      });
      this.myInterval = setInterval(() => {
        this.setState(prevState => ({
          count: prevState.count + 1
        }));
      }, 1000)
    }
  }
  

  getTweets() {
    axios.get(process.env.REACT_APP_API_URL+"tweets/")
      .then(result => {
        this.setState({
          isLoading: false,
          tweets: result.data,
          count: 0,
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
  }

  getWords() {
    axios.get(process.env.REACT_APP_API_URL+"words/")
      .then(result => {
        this.setState({
          isLoading: false,
          words: result.data
        });
        let select = document.getElementById("dropdownWords"); 
        if(this.state.words.length > 1){
          for (let i = 1; i < this.state.words.length; i++) {
            let option = document.createElement("OPTION"), txt = document.createTextNode(this.state.words[i]);
            option.appendChild(txt);
            select.insertBefore(option, select.lastChild);
          }
        }
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

  toggleDropDown(){
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onChangeWordSelected(event){
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      wordSelected: event.target.innerText
    });
  }

  /*
  <ul>
  { this.state.words.map((word, index) => {
      return (
        <li key={index}>
          <option value={"" + index}> {word} </option>
        </li>
        
      )
    })
  }
  </ul>
  */ 

  render() {
    this.refreshPageIn(10);
    console.log("words: ", this.state.words);

    
    return (
      <div id="streamingId"> 
        <div className="card">
          <div className="card-header">
            <h5>Streaming de tweets, count: {this.state.count}</h5>

            <div id="myForm" class="form-group">
              <select id="dropdownWords" class="custom-select">
                <option selected="">{this.state.words[0]}</option>
              </select>
            </div>
            
            {!this.state.isStreamingOn && 
              <button id="btnStreaming" type="button" class="btn btn-success" onClick={this.startStreaming}> Empezar streaming </button>
            }

            {this.state.isStreamingOn &&
              <button id="btnStreaming" type="button" class="btn btn-warning" onClick={this.stopStreaming}> Detener streaming </button>
            }
            
            
          </div>
          <div className="card-body">
            { this.state.isLoading ? 
              <Loading />
              :
              <ul>
              { this.state.tweets.map((tweet, index) => {
                  return (
                    <li key={index}>
                      <div id="tweet" class="card text-white bg-info mb-3">
                        <div class="card-header">
                          <span>{tweet.user}</span>
                        </div>
                          <div class="card-body">
                            <p class="card-text">{tweet.text}</p>
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