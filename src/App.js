import React, { Component } from 'react';
import logo from './logo.svg';
import PlayList from './component/PlayList'

import Search from './component/Search'

import './App.css';

// function
   class App extends React.Component {

render() {
  return (
    <div className="App">
      
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Search/>
      <br>
      </br>
      <br>
      </br>
       
        < PlayList />
      
        {/* < List_Categories /> (may add a Search feature for the List_Categories) */}
        
        
      
    </div>
  );

  }
}

export default App;
