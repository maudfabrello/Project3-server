const express = require("express");
const router = express.Router();
const History = require("../models/History");

//onclick function axios to this route
router.post("/", (req, res, next) => {
  
  let date = getDate();
  let quantity=1;
 
 const newHistory = {
    purchasedArt:req.params.id,
    buyer: req.session.currentUser,
    quantity:quantity,
    date: date
  }

  // created: {
 // type: Date,
  //default: Date.now

  History.create(newHistory)
  .then((HDocument) => {
    res.status(200).json(HDocument);
  })
  .catch((error) => {
    res.status(500).json(error);
  })

});

module.exports = router;