import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class Profile extends Component{
    render(){
        console.log('this.props:', this.props);

        const {title, image, description, link } = this.props.profile;

        return(
            <div style={{display: 'inline-grid', width: 50, margin: 10}}>
                <a href={link}>
                    <img src={image} alt='profile' style={{ width: 30, height: 30}}/>
                </a>
            </div>
        );
    }
}

class SocialProfiles extends Component{
    render(){
        return(
            <div>
                <h3 style={{margin:10}}>Find me on:</h3>
                <div>
                    {
                        SOCIAL_PROFILES.map((PROFILE) => {
                            return(
                                <Profile key={PROFILE.id} profile={PROFILE}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;