const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  title: String,
  link: String,
  difficulty: String,
  status: { type: Boolean, default: false }
});

module.exports = mongoose.model('Problem', problemSchema);