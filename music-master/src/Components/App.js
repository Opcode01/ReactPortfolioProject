import React, { Component } from 'react';

// A React component is a combination of react elements
class App extends Component {

    //Render method from component
    render() {
        return(
            // Normal JSX element - looks exactly like HTML
            <div>Hello React App</div>
        );
    }
}

// Allows other files to import this file with the same mechanism that we imported react
export default App;
