const { check } = require('express-validator');

const actorValidator = [
  check('firstName', 'First Name is required').not().isEmpty(),
  check('lastName', 'Last Name is required').not().isEmpty(),
  check('birthday', 'Birthday date is missing').not().isEmpty(),
  check('nationality', 'Nationality is missing').not().isEmpty()
];

module.exports = {
  actorValidator
}