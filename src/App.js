import React, { Component } from 'react';
import './App.scss';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Streaming from './components/streaming';
import About from './components/about';
import WordsBag from './components/wordsBag';
import HowWorks from './components/howWorks';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'Streaming',
    };
  }

  render(){
    return (
      <div className="App">
        <Tabs
          activeKey={this.state.key}
          unmountOnExit="true"
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="Streaming" title="Streaming">
            <Streaming></Streaming>
          </Tab>
          <Tab eventKey="WordsBag" title="Bolsa de palabras">
            <WordsBag></WordsBag>
          </Tab>
          <Tab eventKey="HowWorks" title="¿Cómo funciona?">
            <HowWorks></HowWorks>
          </Tab>
          <Tab eventKey="About" title="Acerca de">
            <About></About>
          </Tab>
        </Tabs>
      </div>
    );
  }
  
}

export default App;
