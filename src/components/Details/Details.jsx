import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Details() {
  const details = useSelector((store) => store.details);
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };

  return (
    <>
      <div className="BackBtn">
        <button onClick={handleBack}> Return to List </button>
      </div>

      <div className="movieDetails">
        {details.map((movie) => {
          return (
            <div key={movie.id}>
              <h1> {movie.title} </h1>
              <img src={movie.poster} alt={movie.title} />
              <p> {movie.description} </p>
              <h2> Genres </h2>
              <p> {movie.name} </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Details;
