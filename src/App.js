import React, { Component } from 'react';

// A React component is a combination of react elements
class App extends Component {

    //Render method from component
    render(){
        return(
            // JSX element - looks exactly like HTML
            <div>
                <h1>Hello!</h1>
                <p>My name is Austin. I'm a software engineer</p>
                <p>I'm always looking forward to working on meaningful projects</p>
            </div>
        )
    }
}

// Allows other files to import this file with the same mechanism that we imported react
export default App;


