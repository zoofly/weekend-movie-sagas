import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>    
        <nav>  
        <Link to='/'> Home </Link>
        <br></br>
        <Link to='/addmovie'> Add a Movie </Link>
        </nav>  
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path='/details' component= {Details}/>
        {/* Add Movie page */}
        <Route path= '/addmovie' component= {AddMovie}/>
        
      </Router>
    </div>
  );
}


export default App;
