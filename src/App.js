import React, { Component } from 'react';
import './App.scss';

import ActionBar from './components/actionBar';
import Streaming from './components/streaming';
import Members from './components/members';
import WordsBag from './components/wordsBag';
import HowWorks from './components/howWorks';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 0,
      times: 0,
    };

    this.handleSelectedItem = this.handleSelectedItem.bind(this);
  }

  handleSelectedItem(item){
    this.setState({
      selectedItem: item,
    });
  }

  renderSelectedItem(item){
    console.log("item: " + item);
    switch (item) {
      case 1:
        return(
          <Streaming> </Streaming>
        );
    
      case 2:
          return(
            <WordsBag> </WordsBag>
          );

      case 3:
          return(
            <Members> </Members>
          );
      case 4:
          return(
            <HowWorks> </HowWorks>
          );
      default:
        break;
    }
  }

  render(){
    return (
      <div className="App">
            <ActionBar 
              handleSelectedItem={this.handleSelectedItem}></ActionBar>
            {this.renderSelectedItem(this.state.selectedItem)}
      </div>
    );
  }
  
}

export default App;
