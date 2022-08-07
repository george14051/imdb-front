import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import SearchBar from './SearchBar'
import ModalMovie from './Modal';


function Movies(props) {

    const [popmovies, setpopmovies] = useState([]);
    const [movie, setmovie] = useState({});

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    useEffect(() => {
      async function getPopMovies() {
        const result = await axios("/popular");
        const popularMoviesObj = result.data;
        console.log(popularMoviesObj);
        const gotmovies = popularMoviesObj.popularMovies;
        setpopmovies(gotmovies);
        console.log(popmovies);
      }
  
      getPopMovies()

    },[])

  
    return (
        <div id="screen">
            <SearchBar movie = {movie} setmovie={setmovie} handleopen = {handleOpen}></SearchBar>
            <div id="movies">
                {popmovies.length > 0 &&
                popmovies.map(movie =>
                <button key={movie.imdbID} color="white" onClick={(e) => {
                  setmovie(movie);
                  handleOpen();                  
                }}
                  screen="true" 
                  >  
                  <Card 
                    movie = {movie} key={movie.imdbID}>{movie.Title}
                  </Card>
                </button>  )
                }
            </div>
            <ModalMovie movie = {movie} open={open} close={handleClose}></ModalMovie>
        </div>
    )
  
  }



  export default Movies;