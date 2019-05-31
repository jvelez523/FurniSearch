const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomname: String,
  roomtype: String,
  roomdesc: String,
  imgurl: String,
  likes: Number,
  uid: String, 
  tags: [],
  furniture: []
}, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

roomSchema.index({'$**': 'text'});
const Room = mongoose.model('Room', roomSchema);
module.exports = Room;