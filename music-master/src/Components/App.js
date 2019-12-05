import React, { Component } from 'react';
import { resolve } from 'dns';

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

// A React component is a combination of react elements
class App extends Component {

    state = { artistQuery: '', artist: null, topTracks: [] };

    updateArtistQuery = (event) => {
        this.setState({artistQuery: event.target.value});
    }

    searchArtist = () => {
        fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
        .then((response) => response.json())
        .then((json) => {
            if(json.artists.total > 0){
                this.setState({artist: json.artists.items[0]});
                this.getTopTracks(json.artists.items[0].id)
            }
        })        
        .catch(error => alert(error.message));
    }

    getTopTracks = (artistID) => {
        fetch(`${API_ADDRESS}/artist/${artistID}/top-tracks`)
        .then((response) => response.json())
        .then((json) => this.setState({topTracks: json.tracks}))
        .catch(error => alert(error.message));
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter'){
            this.searchArtist();
        }
    }

    //Render method from component
    render() {
        console.log(this.state);
        return(
            // Normal JSX element - looks exactly like HTML
            <div>
                <h2>Music Master</h2>    
                <input 
                    onChange={this.updateArtistQuery} 
                    onKeyPress={this.handleKeyPress}
                    placeholder="Search for an artist"/>
                <button onClick={this.searchArtist}>Search</button>
                <hr></hr>
                
            </div>
        );
    }
}

// Allows other files to import this file with the same mechanism that we imported react
export default App;
