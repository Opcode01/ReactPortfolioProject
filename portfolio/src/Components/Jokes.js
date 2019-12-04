import React, { Component } from 'react';

const Joke = (props) => {
    const { setup, punchline } = props.joke;
    return <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>;
}


// Display a fetched joke from the api
class Jokes extends Component{
    state = { joke: {}, jokes: []};

    componentDidMount(){
        // Fetch the joke asynchronously
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then((response) => response.json())
        .then(json => this.setState({joke: json}));
    }

    fetchJokes = () => {
         // Fetch the joke asynchronously
         fetch('https://official-joke-api.appspot.com/random_ten')
         .then((response) => response.json())
         .then(json => this.setState({jokes: json}));
    }

    render(){
        return (
            <div style={{marginBottom: 200}}>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke}/>
                <button onClick={this.fetchJokes}>See more jokes</button>
                { this.state.jokes.map(joke => <Joke key={joke.id} joke={joke}/>) } 
            <hr></hr>
            </div>
        )
    }
}

export default Jokes;