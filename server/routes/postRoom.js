const express = require('express');
const Room = require('../models/Room')
const router = express.Router();
const parser = require('../configs/cloudinary')

// Route to add a Room
router.post('/addroom', (req, res, next) => {
  let { roomname, roomdesc, imgurl, tags, roomtype, furniture, uid } = req.body
  Room.create({ roomname, roomdesc, imgurl, tags, roomtype, furniture, uid })
    .then(room => {
      res.json({
        success: true,
        room
      });
    })
    .catch(err => next(err))
  console.log(req.body, "===================", req.params)
});


router.post('/picture', parser.single('imageURL'), (req, res, next) => {
    console.log("file is", req.file)
    res.json({saved:req.file.secure_url})
});

module.exports = router;
