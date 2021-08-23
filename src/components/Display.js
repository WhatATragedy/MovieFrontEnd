import { ListItemAvatar } from '@material-ui/core';
import React from 'react'
import InfoBox from './InfoBox';
// import './Display.css'

function Display( { genreData }) {
    console.log(typeof genreData);
    return (
        <div className="app__display">
            {genreData.map(movie =>
             <InfoBox 
                title={movie.movie_title}
                genres={movie.genres}
                tomatometer_rating={movie.tomatometer_rating}
                audience_rating={movie.audience_rating}
             />
            )}
        </div>
    )
}

export default Display
