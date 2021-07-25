import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery ('GET_MOVIE_DETAILS', getDetails);
    yield takeEvery ('ADD_MOVIE', addMovie);
}

//--------GENERATOR FUNCTIONS---------
function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

//TODO 
// function* getDetails(action) {
//     //get all details about a certain movie
//     try{
//         console.log('in getDetails', action.payload);
//         const response = yield axios.get(`/api/genre/${action.payload}`);
//         console.log('getDetails response:', response.data);
//         yield put({ type: 'SET_GENRE', payload: response.data})


//     }

// }

function* addMovie(action) {
    try{
        console.log(`in addMovie`, action.payload);
        yield call(axios.post, `/api/movie`, action.payload);
        yield put ({ type: 'FETCH_MOVIES'});
    } catch(error){
        console.log('in addMovie; failed to add movie', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//-----------------REDUCERS----------------

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}


//----------------------STORE-------------------

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
