//we can't have only one end-point in our app, we have several (clients, orders etc.)
//in order to manage all end-points we use router.

require("../data/database"); //instead of copying the database to every file, the require loads it by itself

const express = require("express");
const router = express.Router();
const blogModel = require("../Models/blog");

router.get("/", (req, res) => {
  blogModel.find({}, (err, documents) => {
    err ? res.status(500).send("error") : res.status(200).send(documents);
  });
});

router.get("/blog/:id", (req, res) => {
  blogModel.find({ id }, (err, documents) => {
    err ? res.status(500).send("error") : res.status(200).send(documents);
  });
});

router.get("/blog/:preview", (req, res) => {
  blogModel.find({ price }, (err, documents) => {
    err ? res.status(500).send("error") : res.status(200).send(documents);
  });
});

    
router.post("/addNew", (req, res) => {
  //TODO: validations
  const blog = blogModel(req.body);
  //the obgect created by the model:
  blog.save().then(() => res.send("success"));
});

router.put("/update", (req, res) => {
  blogModel.findOneAndUpdate(
    { id: req.body.id },
    { $set: req.body },
    (err, doc) => {
      err ? res.status(500).send("error") : res.status(200).send("Updated");
    }
  );
});

router.delete("/", (req, res) => {
  blogModel.findOneAndDelete({ id: req.body.id }, (err) => {
    err ? res.status(500).send(err) : res.status(200).send("deleted");
  });
});

module.exports = router;
