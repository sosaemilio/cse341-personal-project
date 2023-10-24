const {ObjectId} = require('mongodb');
const mongodb = require('../db/connect');

const getActors = async function (req, res) {
  const contacts = await mongodb.getDb().db('movies').collection('actors').find({});
  contacts.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const addActors = async function (req, res) {
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
            "nationality": { 
              "type": "string", 
            },
            "birthday": {
              "type": "string",
            },
          }
      } 
  } */
  const newActors = req.body;
  const result = await mongodb
    .getDb()
    .db('movies')
    .collection('actors')
    .insertOne(newActors, (err) => {
      if (err) res.status(500).send(err);
    });

  if (result) res.status(201).json(result);
};

const updateActor = async function (req, res) {
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
            "nationality": { 
              "type": "string", 
            },
            "birthday": {
              "type": "string",
            },
          }
      } 
  } */
  const actorId = new ObjectId(req.params.id);
  const data = req.body;
  const result = await mongodb
    .getDb()
    .db('movies')
    .collection('actors')
    .updateOne({ _id: actorId }, { $set: data });
  if (result) res.status(204).json(result);
};

const deleteActor = async function (req, res) {
  const actorId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db('movies')
    .collection('actors')
    .deleteOne({ _id: actorId });
  if (result) res.status(200).json(result);
};

module.exports = {
  getActors,
  addActors,
  updateActor,
  deleteActor
};
