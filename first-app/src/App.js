import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';






function displayTime(){
  var d = new Date();
  var n = d.toLocaleTimeString();
  document.getElementById('time').innerHTML = n
}

function time() {
  let timer = setInterval(displayTime, 1000)
}

time();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
