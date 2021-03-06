const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`;

  // FIRST QUERY MAKES MOVIE
  pool
    .query(insertMovieQuery, [
      req.body.title,
      req.body.poster,
      req.body.description,
    ])
    .then((result) => {
      console.log("New Movie Id:", result.rows[0].id); //ID IS HERE!

      const createdMovieId = result.rows[0].id;

      // Now handle the genre reference
      const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `;
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool
        .query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id])
        .then((result) => {
          //Now that both are done, send back success!
          res.sendStatus(201);
        })
        .catch((err) => {
          // catch for second query
          console.log(err);
          res.sendStatus(500);
        });

      // Catch for first query
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

//GET REQUEST for movie details
router.get("/:id", (req, res) => {
  const detailsId = req.params.id;
  console.log("detailsId is:", detailsId);
  const queryText = `SELECT title, description, poster, string_agg(DISTINCT genres.name, ',') as genres
  from movies
  JOIN movies_genres on movies_genres.movie_id = movies.id
  JOIN genres on genres.id= movies_genres.genre_id
  where movies.id= $1
  group by movies.title, movies.description, movies.poster;`;
  pool
    .query(queryText, [detailsId])
    .then((result) => {
      console.log("details GET response:", result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("DETAILS GET RES ERROR", err);
      res.sendStatus(500);
    });
});

module.exports = router;
