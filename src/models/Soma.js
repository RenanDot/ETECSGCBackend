const mongoose = require('mongoose');

const SomaSchema =  new mongoose.Schema({
  soma: Number,
  dia: String,
  rm: String,  
});

module.exports = mongoose.model('soma', SomaSchema);