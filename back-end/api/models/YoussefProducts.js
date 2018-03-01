var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: false
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date
});

mongoose.model('YoussefProduct', productSchema);
