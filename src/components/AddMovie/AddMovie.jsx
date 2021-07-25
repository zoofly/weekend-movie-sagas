import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';

function AddMovie() {
    const dispatch = useDispatch();
    const moviesReducer = useSelector(store => store.movies);

    useEffect(() => {
        getMovies;
    }, []);

    const [newMovie, setNewMovie]= useState('');
    const getMovies = () => {
        console.log('in get movies');
        dispatch ({ type: 'FETCH_MOVIES'});
    };

    return(
        <>
        <form>
            <input>
            
            </input>

            <input>
            
                </input>


        </form>

        </>

    )
}



export default AddMovie;