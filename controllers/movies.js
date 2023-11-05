const mongodb = require('../db/connect');

const getMovies = async function (req, res) {
  try {
    const contacts = await mongodb.getDb().db('movies').collection('movies').find({});
    contacts.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json(err);
  }

};

const addMovies = async function (req, res) {
      /* #swagger.parameters['body'] = { 
      in: 'body', 
      '@schema': { 
          "required": ["Title"], 
          "properties": { 
            "Title": { 
              "type": "string", 
            },
            "Year": {
              "type": "string",
            },
            "Released": { 
              "type": "string", 
            },
            "Runtime": {
              "type": "string",
            },
            "Genre": {
              "type": "string",
            },
            "Director": {
              "type": "string",
            },
            "Writer": {
              "type": "string",
            },
            "Actor": {
              "type": "string",
            },
            "Plot": {
              "type": "string",
            },
            "Language": {
              "type": "string",
            },
            "Country": {
              "type": "string",
            },
            "Awards": {
              "type": "string",
            },
            "Poster": {
              "type": "string",
            },
            "Metascore": {
              "type": "string",
            },
            "imdbRating": {
              "type": "string",
            },
            "imdbVotes": {
              "type": "number",
            },
            "imdbID": {
              "type": "string",
            },
            "Type": {
              "type": "string",
            },
            "Response": {
              "type": "boolean",
            },
            "Images": {
              type: "array",
            }
          }
      } 
  } */
  /* ERROR VALIDATION WAS ADDED INSIDE THE FUNCTIONS*/
  const newMovies = req.body;
  const result = await mongodb
    .getDb()
    .db('movies')
    .collection('movies')
    .insertOne(newMovies, (err) => {
      if (err) res.status(500).send(err);
    });

  if (result) res.status(201).json(result);
};

const updateMovie = async function (req, res) {
      /* #swagger.parameters['body'] = { 
      in: 'body', 
      '@schema': { 
          "required": ["Title"], 
          "properties": { 
            "Title": { 
              "type": "string", 
            },
            "Year": {
              "type": "string",
            },
            "Released": { 
              "type": "string", 
            },
            "Runtime": {
              "type": "string",
            },
            "Genre": {
              "type": "string",
            },
            "Director": {
              "type": "string",
            },
            "Writer": {
              "type": "string",
            },
            "Actor": {
              "type": "string",
            },
            "Plot": {
              "type": "string",
            },
            "Language": {
              "type": "string",
            },
            "Country": {
              "type": "string",
            },
            "Awards": {
              "type": "string",
            },
            "Poster": {
              "type": "string",
            },
            "Metascore": {
              "type": "string",
            },
            "imdbRating": {
              "type": "string",
            },
            "imdbVotes": {
              "type": "number",
            },
            "imdbID": {
              "type": "string",
            },
            "Type": {
              "type": "string",
            },
            "Response": {
              "type": "boolean",
            },
            "Images": {
              type: "array",
            }
          }
      } 
  } */
  try {
    const movieId = new ObjectId(req.params.id);
    const data = req.body;
    const result = await mongodb
      .getDb()
      .db('movies')
      .collection('movies')
      .updateOne({ _id: movieId }, { $set: data });
    if (result) res.status(204).json(result);
  } catch (err) {
    res.status(500).json(err);
  }

}

const deleteMovie = async function (req, res) {
  try {
    const movieId = movieId;
    const result = await mongodb
      .getDb()
      .db('movies')
      .collection('movies')
      .deleteOne({ _id: movieId });
    if (result) res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  addMovies,
  getMovies,
  updateMovie,
  deleteMovie
};
