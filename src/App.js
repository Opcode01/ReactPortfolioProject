import React, { Component } from 'react';

// A React component is a combination of react elements
class App extends Component {
    constructor(){
        super();
        this.state = { displayBio: false };
        console.log('component this', this);

        // Binding is needed to give this context to the helper method because JS is weird
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    // Helper method for onClick event
    toggleDisplayBio(){
        this.setState({displayBio: !this.state.displayBio});
    }

    //Render method from component
    render(){
        // Local var holding JSX that is determined conditionally on this.state.displayBio
        let bio = this.state.displayBio ? (
            <div>
                <p>I live in Hunstville</p>
                <p>I program daily and professionally</p>
                <p>My favorite language is C#</p>
                <p>I also love music and hiking</p>
                <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>

        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
        )

        return(
            // Normal JSX element - looks exactly like HTML
            <div>
                <h1>Hello!</h1>
                <p>My name is Austin. I'm a software engineer</p>
                <p>I'm always looking forward to working on meaningful projects</p>
                {bio}
            </div>
        );
    }
}

// Allows other files to import this file with the same mechanism that we imported react
export default App;
