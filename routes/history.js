const express = require("express");
const router = express.Router();
const History = require("../models/History");
const Art = require("../models/Art");
const isLoggedIn = require("./../middlewares/isLoggedIn");

router.get("/myhistory/purchasedArt", isLoggedIn, (req, res, next) => {
  History.find({ buyer: req.session.currentUser })
    .populate("purchasedArt")
    .then((historyDocuments) => {
      res.status(200).json(historyDocuments);
    })
    .catch(next);
});

router.get("/myhistory/createdArt", isLoggedIn, (req, res, next) => {
  let creator = req.session.currentUser;
  console.log("BIBI", creator);
  Art.find({ creator: creator.toString() })
    .then((artworkDocuments) => {
      res.status(200).json(artworkDocuments);
    })
    .catch(next);
});

router.post("/onepiece/:id", isLoggedIn, (req, res, next) => {
  let buyer = req.session.currentUser;

  console.log("BIBIENLIGNE", buyer);
  console.log(req.params);
  let purchasedArt = req.params.id;
  let newDate = new Date();

  const newHistory = {
    purchasedArt: purchasedArt,
    buyer: buyer,
    date: newDate,
  };

  console.log(newHistory);
  History.create(newHistory)
    .then((HDocument) => {
      res.status(200).json(HDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
