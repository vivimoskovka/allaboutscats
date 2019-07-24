import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Router from './Router.js'

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
