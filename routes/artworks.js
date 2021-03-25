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


module.exports = router;