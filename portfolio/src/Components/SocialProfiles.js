import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const Profile = (props) => {
    const {image, link } = props.profile;

    return(
        <span style={{display: 'inline-grid', width: 50, margin: 10}}>
            <a href={link}>
                <img src={image} alt='profile' style={{ width: 30, height: 30}}/>
            </a>
        </span>
    );
}

const SocialProfiles = () => (
    <div>
        <h3 style={{margin:10}}>Find me on:</h3>
        <div>
            {
                SOCIAL_PROFILES.map((PROFILE) => (
                    <Profile key={PROFILE.id} profile={PROFILE}/>
                ))
            }
        </div>
    </div>
)
    


export default SocialProfiles;