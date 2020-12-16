const { user } = require('./model')

exports.getAllTag = user.findAll();