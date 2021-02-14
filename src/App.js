import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { ContextHOC } from './Context/Context';
import './App.css';
import Home from './containers/Home';
import Posts from './containers/Posts'
import PostDetails from './containers/PostDetails';
import Header from './components/Header/Header';


function App(props) {
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()).then(data => {
        props.setUser(data)
      })
  }, [])

  return (
    <div className="App">
      <Header setSearchTerm={props.setSearchTerm}/>
      <div className="body">
        <div className="body-content">
      <Route
        exact
        path="/Blog-post"
        render={() => ContextHOC(Home)}
      />
      <Route
        exact
        path="/Blog-post/Posts"
        render={() => ContextHOC(Posts)}
      />
      <Route
        exact
        path="/Blog-post/PostDetails"
        render={() => ContextHOC(PostDetails)}
      />
        </div>
      </div>
    </div>
  );
}

export default App;
