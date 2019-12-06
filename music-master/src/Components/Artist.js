import React from 'react';
import { DEFAULT_ENCODING } from 'crypto';

const Artist = ({ artist }) =>
{ 
    if(!artist) return null;

    const { images, name, followers, genres} = artist;

    return(
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>Genres: {genres.join(',')}</p>
            <img 
                src={images[0] && images[0].url} 
                alt="artist-profile"
                style={{
                    width: 200,
                    height: 200, 
                    borderRadius: 100, 
                    objectFit: 'cover'
                }}>
            </img>
        </div>
    )
}

export default Artist;