import React, { Component } from 'react';

// A React component is a combination of react elements
class App extends Component {

    state = { artistQuery: '' };

    updateArtistQuery = (event) => {
        console.log('event.target.value:', event.target.value);
        this.setState({artistQuery: event.target.value});
    }

    searchArtist = () => {
        console.log('this.state:', this.state);
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter'){
            this.searchArtist();
        }
    }

    //Render method from component
    render() {
        return(
            // Normal JSX element - looks exactly like HTML
            <div>
                <h2>Music Master</h2>    
                <input 
                    onChange={this.updateArtistQuery} 
                    onKeyPress={this.handleKeyPress}
                    placeholder="Search for an artist"/>
                <button onClick={this.searchArtist}>Search</button>
            </div>
        );
    }
}

// Allows other files to import this file with the same mechanism that we imported react
export default App;
