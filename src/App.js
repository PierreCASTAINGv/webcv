import React, { Component } from 'react';
import BlockOne from "./component/blockone";
import BlockTwo from "./component/blocktwo";
import BlockThree from "./component/blockthree";
import BlockFour from "./component/blockfour";
import './App.css';

// function App() 
  class App extends Component {

    render() {

      return (
        <div className="container">

          <BlockOne />
          <BlockTwo />
          <BlockThree />
          <BlockFour />

        </div>
      );
    }
    
  }

export default App;
