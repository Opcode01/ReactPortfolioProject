import React, { Component } from 'react';

// Display a fetched joke from the api
class Jokes extends Component{
    state = { joke: {}};

    componentDidMount(){
        // Fetch the joke asynchronously
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then((response) => response.json())
            .then(json => this.setState({joke: json}));
    }

    render(){
        const { setup, punchline } = this.state.joke;

        return (
            <div style={{marginBottom: 200}}>
                <h2>Highlighted Joke</h2>
                <p>{setup} <em>{punchline}</em></p>
            </div>
        )
    }
}

export default Jokes;