const {ObjectId} = require('mongodb');
const mongodb = require('../db/connect');

const getActors = async function (req, res) {
  try {
    const contacts = await mongodb.getDb().db('movies').collection('actors').find({});
    contacts.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty!' });
    return;
  }
  /* Error Validation was done different it was done inside the arrow functions */
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
  try {
    const actorId = new ObjectId(req.params.id);
    const data = req.body;
    const result = await mongodb
      .getDb()
      .db('movies')
      .collection('actors')
      .updateOne({ _id: actorId }, { $set: data });
    if (result) res.status(204).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
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
