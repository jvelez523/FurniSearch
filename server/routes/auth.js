const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");

router.post("/signup", (req, res, next) => {
  let { displayName, email, uid } = req.body;
  User.findOne({ uid }).then(user => {
    if (user !== null) {
      console.log("User Exists");
    } else {
      User.create({ displayName, email, uid })
        .then(user => {
          res.json({
            success: true,
            user
          });
        })
        .catch(err => next(err));
      console.log(req.body, "===================", req.params);
    }
  });
});

module.exports = router;
