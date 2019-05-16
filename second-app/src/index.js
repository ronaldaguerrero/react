import React from 'react'; // import the React library
import ReactDOM from 'react-dom'; // import the ReactDOM library
// we can create a simple element to display on our HTML page
// const App = React.createElement("h1", null, "Hello World");
 
// import React, ReactDOM statements
const App = (props) => {
    return (
        <div>
            <h1>Hello Dojo</h1>
            <p>Now we are getting somewhere!</p>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById("root"));
// equivalent to:
// ReactDOM.render(App(), document.getElementById("root"));
