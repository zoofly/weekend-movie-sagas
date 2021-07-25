import {useDispatch, useSelector} from 'react-redux';

function Details() {

    const genres = useSelector(store => store.genres);


    return(
        <div className='movieDetails'>
        {genres.map((genre) => {
            return(
                <div key={genre.id}>
                    <h1> {genre.title} </h1>
                    <img src={genre.poster} alt= {genre.title}/>
                    <p> {genre.description} </p>
                    <h2> Genres </h2>
                    <p> {genre.genres} </p>

                </div>

            )
        })}



        </div>

    )
}


export default Details;