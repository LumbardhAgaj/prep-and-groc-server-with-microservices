const {
  UserLoginSchema
} = require('@bit/agajlumbardh.prep-and-groc-validators.user');
const ValidationError = require('../errors/ValidationError');

module.exports = (req, res, next) => {
  UserLoginSchema.validate(req.body, { abortEarly: false })
    .then(() => next())
    .catch(error => next(new ValidationError(error)));
};
