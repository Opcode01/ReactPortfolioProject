import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import '../index.css'
import profile from '../assets/myprofile2.jpg';
import Title from './title.js';
import Header from './Header';

// A React component is a combination of react elements
class App extends Component {
    //Class properties
    state = { displayBio: false };

    // Helper method for onClick event
    toggleDisplayBio = () => {
        // Never directly modify state in React - always use setstate
        // SetState triggers the render() method, meaning SetState will automatically update the webpage and modifying state directly will not
        this.setState({displayBio: !this.state.displayBio});
    }

    //Render method from component
    render() {
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
                <Header></Header>
                <img src={profile} alt='profile' className="profile"/>
                <h1>Hello!</h1>
                <p>My name is Austin</p>
                <Title />
                <p>I'm always looking forward to working on meaningful projects</p>
                {bio}

                { /*React Component*/ }
                <hr/>
                <Projects/> 
                                
                <footer style={
                    {
                        position: 'fixed',
                        left: 0,
                        bottom: 0,
                        width: '100%',
                        backgroundColor: '#ededed',
                        color: 'black',
                    }
                }>

                { /*React Component*/ }
                <SocialProfiles/>
                </footer>
            </div>

        );
    }
}

// Allows other files to import this file with the same mechanism that we imported react
export default App;
