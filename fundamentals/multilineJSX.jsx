import React from 'react';
import ReactDOM from 'react-dom';

class Quote extends React.Component {
  render() {
    return (
    	<blockquote>
        <p>
          The world is full of objects...
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
	<Quote />,
	document.getElementById('app')
);