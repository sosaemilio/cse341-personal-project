const mongodb = require('../db/connect');

const getMovies = async function (req, res) {
  const contacts = await mongodb.getDb().db('movies').collection('movies').find({});
  contacts.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const addMovies = async function (req, res) {
      /* #swagger.parameters['body'] = { 
      in: 'body', 
      '@schema': { 
          "required": ["firstName"], 
          "properties": { 
            "firstName": { 
              "type": "string", 
            },
            "lastName": {
              "type": "string",
            },
            "email": { 
              "type": "string", 
            },
            "birthday": {
              "type": "string",
            },
            "favoriteColor": {
              "type": "string",
            }
          }
      } 
  } */
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

module.exports = {
  addMovies,
  getMovies
};
