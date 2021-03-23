//we can't have only one end-point in our app, we have several (clients, orders etc.)
//in order to manage all end-points we use router.

require("../data/database"); //instead of copying the database to every file, the require loads it by itself

const express = require("express");
const router = express.Router();
const productModel = require("../Models/product");

router.get("/products/search/:keyword", async (req, res) => {
  console.log(req.params.keyword);
  const { keyword } = req.params;
  console.log(keyword);
  productModel.find({ keywords: req.params.keywords }, (err, documents) => {
    err ? res.status(500).send("error") : res.status(200).send(documents);
  });
});

router.get("/products/:id", (req, res) => {
  productModel.find({ id: req.params.id }, (err, documents) => {
    err ? res.status(500).send("error") : res.status(200).send(documents);
  });
});

router.get("/products", (req, res) => {
  console.log("heelooo");
  productModel.find({ price }, (err, documents) => {
    err ? res.status(500).send("error") : res.status(200).send(documents);
  });
});

// router.get("/:region", (req, res) => {
//   productModel.find({ region }, (err, documents) => {
//     err ? res.status(500).send("error") : res.status(200).send(documents);
//   });
// });

// router.get("/:rating", (req, res) => {
//   productModel.find({ rating }, (err, documents) => {
//     err ? res.status(500).send("error") : res.status(200).send(documents);
//   });
// });

router.post("/addNew", (req, res) => {
  //TODO: validations
  const item = productModel(req.body);
  //the obgect created by the model:
  product.save().then(() => res.send("success"));
});

router.put("/update", (req, res) => {
  productModel.findOneAndUpdate(
    { id: req.body.id },
    { $set: req.body },
    (err, doc) => {
      err ? res.status(500).send("error") : res.status(200).send("Updated");
    }
  );
});

router.delete("/", (req, res) => {
  productModel.findOneAndDelete({ id: req.body.id }, (err) => {
    err ? res.status(500).send(err) : res.status(200).send("deleted");
  });
});

router.get("/", (req, res) => {
  productModel.find({}, (err, documents) => {
    err ? res.status(500).send("error") : res.status(200).send(documents);
  });
});

module.exports = router;
