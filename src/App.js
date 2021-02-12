import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ContextHOC } from './Context/Context';
import './App.css';
import Home from './containers/Home';
import Posts from './containers/Posts'


function App(props) {
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()).then(data => {
        props.setUser(data)
      })
  }, [])

  return (
    <div className="App">
      <Route
        exact
        path="/"
        render={() => ContextHOC(Home)}
      />
      <Route
        exact
        path="/app/Posts"
        render={() => ContextHOC(Posts)}
      />
    </div>
  );
}

export default App;
