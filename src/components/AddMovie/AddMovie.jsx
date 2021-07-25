import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';

function AddMovie() {
    const dispatch = useDispatch();
    const history= useHistory();
    const [movieTitle, setMovietitle]= useState('');
    const [movieDescription, setMovieDescription]= useState('');
    const [moviePoster, setMoviePoster]= useState('');
    const [movieGenre, setMovieGenre]= useState('');

    const handleCancel= (event) =>{
        event.preventDefault();
        history.push('/');

    }

    const handleSave= (event) => {
        event.preventDefault();
        console.log('successfully saved movie');
        dispatch({type: 'ADD_MOVIE', payload:  movieTitle, moviePoster, movieDescription, movieGenre})

    }

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
            onChange= {handleGenre}
            name='Genres'>
                <option value= '' defaultValue> Choose a Genre here </option>
                <option onClick={handleGenre} value='Adventure' > Adventure </option>
                <option onClick={handleGenre} value= 'Animated'> Animated </option>
                <option onClick={handleGenre} value= 'Biographical'> Biographical </option>
                <option onClick={handleGenre} value= 'Comedy'> Comedy </option>
                <option onClick={handleGenre} value='Disaster'> Disaster </option>
                <option onClick={handleGenre} value='Drama'>  Drama </option>
                <option onClick={handleGenre} value= 'Epic'> Epic </option>
                <option onClick={handleGenre} value='Fantasy'> Fantasy </option>
                <option onClick={handleGenre} value='Musical'> Musical </option>
                <option onClick={handleGenre} value='Romantic'> Romantic </option>
                <option onClick={handleGenre} value='Science Fiction'> Science Fiction </option>
                <option onClick={handleGenre} value='Space-Opera'> Space-Opera </option>
                <option onClick={handleGenre} value= 'Superhero'>  Superhero </option>
                
            </select>

            <button type='submit' onClick={handleSave}> Save </button>
            <button onClick={handleCancel}> Cancel </button>
            
        </form>

        </>

    )
}



export default AddMovie;