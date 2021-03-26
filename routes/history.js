const express = require("express");
const router = express.Router();
const History = require("../models/History");

//onclick function axios to this route
router.post("/:id", (req, res, next) => {
  
  let date = getDate();
 
 const newStreetArt = {
    purchasedArt:req.params.id,
    buyer: req.session.currentUser.username,
    quantity:1,
    date: date
  }

  // created: {
 // type: Date,
  //default: Date.now

  History.create(newStreetArt)
  .then((HDocument) => {
    res.status(200).json(HDocument);
  })
  .catch((error) => {
    res.status(500).json(error);
  })

});

module.exports = router;