import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';





// vanilla JavaScript version:
// function displayTime(){
//   let n = new Date().toLocaleTimeString();
//   document.getElementById('time').innerHTML = n
// }

// function time() {
//   let timer = setInterval(displayTime, 1000)
// }

// time();

// end vanilla JavaScript version

setInterval(function () {
  // creating an HTML element
  let myClock = React.createElement("h1", null, "This is the time: " + new Date().toLocaleTimeString());
  ReactDOM.render(myClock, document.getElementById("app"));
}, 1000);


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
