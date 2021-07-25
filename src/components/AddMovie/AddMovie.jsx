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
    const [movieGenre, setMovieGenre]= useState('');




    const handleTitle= (event) =>{
        event.preventDefault();
        setMovietitle(event.target.value);
    };

    const handleDescription= (event) =>{
        event.preventDefault();
        setMovieDescription(event.target.value);
    };

    const handlePoster= (event) =>{
        event.preventDefault();
        setMoviePoster(event.target.value);
    };

    const handleGenre= (event) =>{
        event.preventDefault();
        setMovieGenre(event.target.value);
    };
    
    // const getMovies = () => {
    //     console.log('in get movies');
    //     dispatch ({ type: 'FETCH_MOVIES'});
    // };

    return(
        <>
        <form>
            <input
            name= 'addTitle'
            type= 'text'
            value= {movieTitle}
            placeholder= 'Enter Movie Title'
            onChange={handleTitle}>
                
            </input>

            <input
            name= 'addPoster'
            type= 'text'
            value= {moviePoster}
            placeholder= 'Enter Movie Poster URL'
            onChange={handlePoster}>
                
            </input>

            <input
            name= 'addDescription'
            type= 'text'
            value= {movieDescription}
            placeholder= 'Enter Movie Description'
            onChange={handleDescription}>
                
            </input>

            <select
            id= 'addGenre'
            type= 'text'
            value= {movieGenre}
            onChange={handleGenre}
            name='Genres'>
                <option> Adventure </option>
                <option> Animated </option>
                <option> Biographical </option>
                <option> Comedy </option>
                <option> Disaster </option>
                <option>  Drama </option>
                <option> Epic </option>
                <option> Fantasy </option>
                <option> Musical </option>
                <option> Romantic </option>
                <option> Science Fiction </option>
                <option> Space-Opera </option>
                <option>  Superhero </option>
                
            </select>

        </form>

        </>

    )
}



export default AddMovie;