
// H1
const hello = React.createElement("h1", null, "Hello World");

ReactDOM.render(hello, document.getElementById('hello'));

// P
const pTag = React.createElement('p', null, 'Some paragraph text here!');

ReactDOM.render(pTag, document.getElementById('pTag'));


// Button
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

// DIV
const second = React.createElement('div', null, 
	React.createElement('h1', null, 'Hello World 2'),
	React.createElement('p', null, 'Some second paragraph text here!'),
	React.createElement('button', null, 'Click me 2!')
);
ReactDOM.render(second, document.getElementById('secondDiv'));