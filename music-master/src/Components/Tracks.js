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

    render() {
        const { tracks } = this.props;

        return(
            <div>
                {
                    tracks.map(track => {
                        const { id, name, album, preview_url } = track;

                        return(
                            <div key={id} onClick={this.playAudio(preview_url)}>
                                <img src={album.images[0].url} alt='track-image' />
                                <p>{name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tracks;