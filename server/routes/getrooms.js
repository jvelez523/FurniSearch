const express = require('express');
const Room = require('../models/Room')
const router = express.Router();


router.get('/rooms', (req, res, next) => {
  // let { roomname, roomdesc, imgurl, tags, roomtype, furniture, uid } = req.body
  Room.find().sort({"created_at": -1})
    .then(data => {
      res.json({
        success: true,
        data
      });
      console.log(data)
    })
    .catch(err => next(err))
  // console.log(req.body, "===================", req.params)
});

router.get('/roomshome', (req, res, next) => {
  // let { roomname, roomdesc, imgurl, tags, roomtype, furniture, uid } = req.body
  Room.find().sort({"created_at": -1}).limit(3)
    .then(data => {
      res.json({
        success: true,
        data
      });
      console.log(data)
    })
    .catch(err => next(err))
  // console.log(req.body, "===================", req.params)
});

router.post('/myrooms', (req, res, next) => {
  let { uid } = req.body
  console.log(req.body, "===================", req.params)
  Room.find({uid: uid})
    .then(data => {
      
      res.json({
        success: true,
        data
      });
      console.log(data)
    })
    .catch(err => next(err))

});

module.exports = router;