//we can't have only one end-point in our app, we have several (clients, orders etc.)
//in order to manage all end-points we use router.

require("../data/database"); //instead of copying the database to every file, the require loads it by itself

const express = require("express");
const router = express.Router();
const itemModel = require("../Models/item");

router.get("/", (req, res) => {
  itemModel.find({}, (err, documents) => {
    err ? res.status(500).send("error") : res.status(200).send(documents);
  });
});

router.get("/item/:id", (req, res) => {
  console.log(typeof req.params.id);
  itemModel.find({ _id: req.params.id }, (err, documents) => {
    err ? res.status(500).send("error") : res.status(200).send(documents);
  });
});

router.get("/items/price/:price", (req, res) => {
  itemModel.find({ price }, (err, documents) => {
    err ? res.status(500).send("error") : res.status(200).send(documents);
  });
});

router.get("/:category", (req, res) => {
  console.log(req.params);
  if (req.params.category) {
    itemModel.find(
      {
        $or: [
          { category: req.params.category },
          { categoryB: req.params.category },
        ],
      },
      (err, documents) => {
        err ? res.status(500).send("error") : res.status(200).send(documents);
      }
    );
  } else {
    console.log("in else");
  }
});

router.post("/addNew", (req, res) => {
  //TODO: validations
  const item = itemModel(req.body);
  //the obgect created by the model:
  item.save().then(() => res.send("success"));
});

router.put("/update", (req, res) => {
  itemModel.findOneAndUpdate(
    { id: req.body.id },
    { $set: req.body },
    (err, doc) => {
      err ? res.status(500).send("error") : res.status(200).send("Updated");
    }
  );
});

router.delete("/", (req, res) => {
  itemModel.findOneAndDelete({ id: req.body.id }, (err) => {
    err ? res.status(500).send(err) : res.status(200).send("deleted");
  });
});

module.exports = router;
