import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../loading/';
import './style.scss';

class streaming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tweets: [ //Ejemplo
        { user: "marcelo", 
          text: "hola mundo"}
      ],
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
        console.log(error);
        this.setState({
          isLoading: false,
          //tweets: []
        });
        alert("No ha sido posible conectarse al servidor para obtener los Tweets.");
      })
  }

  render() {
    return (
      <div id="streamingId"> 
        <div className="card">
          <div className="card-header">
            Streaming de tweets
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