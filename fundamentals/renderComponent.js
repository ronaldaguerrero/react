import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
ReactDOM.render(<MyComponentClass />, document.getElementById('app'));

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