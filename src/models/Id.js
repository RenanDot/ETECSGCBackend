const mongoose = require('mongoose');

const IdSchema =  new mongoose.Schema({
  Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: '_id'
  }
}, {
  toJSON: {
    virtuals: true,
  },
});

module.exports = mongoose.model('Id', IdSchema);