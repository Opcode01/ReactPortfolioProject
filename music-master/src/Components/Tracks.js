import React, { Component } from 'react';

class Tracks extends Component {

    state = { isPlaying: false, audio: null, playingPreviewUrl: null };

    playAudio = (previewUrl) => () => {
        const audio = new Audio(previewUrl);
        audio.volume = 0.2;

        //If nothing is currently playing
        if(!this.state.isPlaying){
            audio.play();
            this.setState({isPlaying: true, audio, playingPreviewUrl: previewUrl});
        }
        //If something is playing, pause it
        else{
            this.state.audio.pause();

            //If the new url is the same as the old one, stop the music
            if(this.state.playingPreviewUrl === previewUrl){
                this.setState({isPlaying: false});
            } 
            //If the new url is different, play the new track
            else{
                audio.play();
                this.setState({audio, playingPreviewUrl: previewUrl});
            }
        }
    }

    trackIcon = (track) => {
        // Displays if no track preview available
        if(!track.preview_url) {
            return <span>N/A</span>
        }
        // Displays if this track is already playing
        if(this.state.isPlaying && this.state.playingPreviewUrl === track.preview_url){
            return <span>| |</span>
        }
        // Displays if this track is not playing, but can be played next
        return <span>&#9654;</span>
    }

    render() {
        const { tracks } = this.props;

        return(
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;

                        return(
                            <div key={id} className='track' onClick={this.playAudio(preview_url)}>
                                <img src={album.images[0].url} alt='track-image' className='track-image'/>
                                <p className='track-text'>{name}</p>
                                <p className='track-icon'>{this.trackIcon(track)}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;