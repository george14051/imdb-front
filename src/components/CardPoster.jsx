import React from 'react';

function CardPoster(props) {
 
    return (
      <div className="cardposter">
        <img className="imgcard" src={props.movimg}></img>
      </div>
    )
  
  }

  export default CardPoster;