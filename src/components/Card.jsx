import React from 'react';
import CardPoster from './CardPoster';

function Card(props) {
  
    return (
        <div className="card">
            <h3 className="movieTitle">{props.movie.Title}</h3>
            <CardPoster movimg = {props.movie.Poster}></CardPoster>
            <p><b>description:  </b>{props.movie.Plot} <br></br><br></br> <b>rating: </b> {props.movie.imdbRating}</p>
        </div>

    )
  
  }

  export default Card;