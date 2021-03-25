const express = require("express");
const router = express.Router();
const Art = require("../models/Art");

router.get("/", (req, res, next) => {
    console.log("from react");
  
    Art.find()
      .then((ADocuments) => {
        res.json(ADocuments);
      })
      .catch((error) => {
        console.log(error);
      });
  });


// PREFIX FROM APP.JS
// app.use("/api/artworks", artRouter);

router.get("/:id", (req, res, next) => {
  console.log(req.params)
  Art.findByID(req.params.id)
    .then((ArtDocument) => {
      res.status(200).json(ArtDocument)
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;