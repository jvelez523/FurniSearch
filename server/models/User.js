const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  displayName: String,
  email: String,
  photourl: String,
  favorites: [],
  likes: [],
  uid: String,
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

const User = mongoose.model('User', userSchema);
module.exports = User;
