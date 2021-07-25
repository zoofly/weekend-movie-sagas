const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText= `select * from genres`
  pool.query(queryText)
  .then (res =>{
    res.send(res.rows)
  })
  .catch(err => {
    console.log(`GENRE GET REQUEST ERROR: ${err}`)
    res.sendStatus(500)
  })
  
});

module.exports = router;