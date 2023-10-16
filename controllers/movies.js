const mongodb = require('../db/connect');

const getMovies = async function (req, res) {
    const contacts = await mongodb.getDb().db('byui').collection('contacts').find({});
    contacts.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
}

const addMovie = async function (req, res) {
    const newContact = req.body;
    const result = await mongodb
      .getDb()
      .db('byui')
      .collection('contacts')
      .insertOne(newContact, (err) => {
        if (err) res.status(500).send(err);
      });
  
    if (result) res.status(201).json(result);
}

module.exports = {
    addMovie,
    getMovies
}