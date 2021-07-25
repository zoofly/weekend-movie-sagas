import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';

function AddMovie() {
    const dispatch = useDispatch();
    const moviesReducer = useSelector(store => store.movies);

    useEffect(() => {
        getMovies;
    }, []);

    const [movieTitle, setMovietitle]= useState('');
    const [movieDescription, setMovieDescription]= useState('');
    const [moviePoster, setMoviePoster]= useState('');
    // const [movieGenre, setMovieGenre]= useState('');

    const getMovies = () => {
        console.log('in get movies');
        dispatch ({ type: 'FETCH_MOVIES'});
    };

    return(
        <>
        <form>
            <input
            name= 'addTitle'
            type= 'text'
            value= {movieTitle}
            placeholder= 'Enter Movie Title'>
                
            </input>

            <input
            name= 'addPoster'
            type= 'text'
            value= {moviePoster}
            placeholder= 'Enter Movie Poster URL'>
                
            </input>

            <input
            name= 'addDescription'
            type= 'text'
            value= {movieDescription}
            placeholder= 'Enter Movie Title'>
                
            </input>

            {/* <input
            name= 'addTitle'
            type= 'text'
            value= {movieGenre}
            placeholder= 'Enter Movie Title'>
                
            </input> */}

        </form>

        </>

    )
}



export default AddMovie;