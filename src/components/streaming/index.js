import React, { Component } from 'react';
import './style.scss';
import axios from 'axios';

class streaming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tweets: [],
    };
  }

  componentDidMount(){
    this.getTweets();
  }

  getTweets() {
    axios.get(process.env.REACT_APP_API_URL+"tweets/")
      .then(result => {
        this.setState({
          isLoading: false,
          tweets: result.data
        });
      })
      .catch(error => {
        alert("No ha sido posible conectarse al servidor.");
      })
  }

  render() {
    return (
      <div id="streamingId"> 
        <div className="card">
          <div className="card-header">
            Streaming
          </div>
          <div className="card-body">
            <ul>
            { this.state.tweets.map((tweet, index) => {
                return (
                  <li key={index}>
                    <span>{tweet.user}</span>
                    <p>{tweet.text}</p>
                  </li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default streaming;