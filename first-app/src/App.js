import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

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
