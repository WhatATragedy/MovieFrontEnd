import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core";
import './InfoBox.css'

function InfoBox( { title, genres, tomatometer_rating, audience_rating, directors, runtime, metascore, imdb_score, poster }) {
    return (
        <div className="display__infobox">
            <Card className="display__card" raised={true}>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom>
                    {title}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Genres: {genres}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Tomato Rating: {tomatometer_rating}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Tomato Audience Rating: {audience_rating}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        Metascore: {metascore}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        IMDB: {imdb_score}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom variant="subtitle2">
                        Directors: {directors}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom variant="subtitle2">
                        Runtime: {runtime}
                    </Typography>
                </CardContent>
                <img className="infobox__img" alt="Oh No, Cannot Be Loaded" src={poster}/>
            </Card>
        </div>
      );
}

export default InfoBox
