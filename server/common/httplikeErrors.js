'use strict'

const httplikeErrors = {}

httplikeErrors.fromMongo = function (err) {
  const error = {code: 500}

  // Mongoose
  if (err.name) {
    switch (err.name) {
      case 'BadRequestError':
        error.code = 400
        error.message = err.message
        break
      case 'ValidationError':
        error.code = 400
        error.message = err.errors
        error.type = 'MongooseValidation'
        break
      case 'MissingPasswordError':
        error.code = 400
        error.message = error.errors
        error.type = 'MongooseValidation'
        break
      case 'MissingUsernameError':
        error.code = 400
        error.message = error.errors
        error.type = 'MongooseValidation'
    }
  }

  return error
}

module.exports = httplikeErrors
