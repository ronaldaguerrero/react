import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// createElement accepts(type, props, children)

// const myList = (
//   <ul>
//     <li>apple</li>
//     <li>cookie</li>
//     <li>sushi</li>
//   </ul>  
// );

// ReactDOM.render(myList, document.getElementById('app2'));

const myButton = React.createElement('button', null, 'Click Me');
  console.log(JSON.stringify(myButton));
  /*
    Prints the following:
    {
    "type":"button",
    "key":null,
    "ref":null,
    "props": {
    "children":"Click Me!"
    },
    "_owner":null,
    "_store":{}
    }
  */
  ReactDOM.render(myButton, document.getElementById('app'));


var d = new Date();
var n = d.toLocaleTimeString();

// document.getElementById('time').innerHTML = n;


const timeButton = React.createElement(n, null, 'Time');

// var intervalID = window.setInterval(myCallback, 500);

function myCallback() {
  // ReactDOM.render(timeButton, document.getElementById('time').innerHTML = n);
}
  

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
