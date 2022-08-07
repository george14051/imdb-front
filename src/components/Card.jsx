import React from 'react';
import CardPoster from './CardPoster';

function Card(props) {
  
    return (
        <div className="popcard">
            <h3 className="movieTitle">{props.movie.Title}</h3>
            <CardPoster movimg = {props.movie.Poster}></CardPoster>
            <p id="description"><b>description:  </b>{props.movie.Plot} <br></br>
            <span className="br"></span>
            <b>rating: </b> {props.movie.imdbRating}</p>
        </div>

    )
  
  }

  export default Card;