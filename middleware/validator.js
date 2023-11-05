const { check } = require('express-validator');
const {ObjectId} = require('mongodb');

const actorValidator = [
  check('firstName', 'First Name is required').notEmpty().isString(),
  check('lastName', 'Last Name is required').notEmpty().isString(),
  check('birthday', 'Birthday date is missing').notEmpty(),
  check('nationality', 'Nationality is missing').notEmpty().isString(),
];

module.exports = {
  actorValidator
}