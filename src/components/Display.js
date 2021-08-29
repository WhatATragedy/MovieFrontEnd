import { ListItemAvatar } from '@material-ui/core';
import React from 'react'
import InfoBox from './InfoBox';
import './Display.css'

function Display( { genreData }) {
    console.log(typeof genreData);
    return (
        <div className="app__display">
            {genreData.map(movie =>
                <InfoBox className="display__infobox"
                    title={movie.movie_title + " (" + movie.original_release_date + ")"}
                    genres={movie.genres}
                    tomatometer_rating={movie.tomatometer_rating}
                    audience_rating={movie.audience_rating}
                    directors={movie.directors}
                    runtime={movie.runtime + " Minutes"}
                    metascore={movie.metascore}
                    imdb_score={movie.imdb}
                    poster={movie.url}
                />
            )}
        </div>
    )
}

export default Display
