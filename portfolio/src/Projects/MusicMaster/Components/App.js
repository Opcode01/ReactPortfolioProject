import React, { Component } from 'react';
import Artist from './Artist';
import Search from './Search';
import Tracks from './Tracks';

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

// A React component is a combination of react elements
class App extends Component {

    state = { artist: null, topTracks: [] };

    searchArtist = (artistQuery) => {
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
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

    //Render method from component
    render() {
        return(
            // Normal JSX element - looks exactly like HTML
            <div>
                <h2>Music Master</h2>   
                <Search searchArtist={this.searchArtist}/>                 
                <hr></hr>
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.topTracks} />
            </div>
        );
    }
}

// Allows other files to import this file with the same mechanism that we imported react
export default App;
