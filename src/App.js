import React, { useState, useEffect } from 'react'

import './App.css';
import Home from './containers/Home';

function App(props) {
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()).then(data => {
        props.setUser(data)
      })
  }, [])

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
