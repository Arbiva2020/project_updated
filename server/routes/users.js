//we can't have only one end-point in our app, we have several (clients, orders etc.)
//in order to manage all end-points we use router.

require("../data/database"); //instead of copying the database to every file, the require loads it by itself

const express = require("express");
const router = express.Router();
const usersModel = require("../Models/user");


router.post("/", (req, res) => {
  const user = new userModel(req.body);
  user.save().then(() => res.send("success"));
});

router.delete("/", (req, res) => {
  userModel.findOneAndDelete({ id: req.body.id }, (err) => {
    err ? res.status(500).send(err) : res.status(200).send("deleted");
  });
});

module.exports = router;
