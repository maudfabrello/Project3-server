const express = require("express");
const router = express.Router();
const Art = require("../models/Art");
const uploadToCloudinaryMiddleware = require("../config/cloudinaryConfig");
const isLoggedIn = require("./../middlewares/isLoggedIn");

router.get("/", (req, res, next) => {
  console.log("from react");

  Art.find()
    .then((ADocuments) => {
      res.json(ADocuments);
    })
    .catch((error) => {
      next(error);
    });
});

// PREFIX FROM APP.JS
// app.use("/api/artworks", artRouter);

router.get("/:id", isLoggedIn, (req, res, next) => {
  // console.log(req.params)
  Art.findById(req.params.id)
    .then((ArtDocument) => {
      res.status(200).json(ArtDocument);
    })
    .catch((error) => {
      next(error);
      //ERROR HANDLING THROUGH MIDDLEWARE IN APP.JS
    });
});

//SEND DATA FROM THE CREATE FORM TO THE DATABASE /DESTRUCTURING REQ.BODY TO INSERT IT IN THE DATABASE
router.post(
  "/",
  uploadToCloudinaryMiddleware.single("pictureUrl"),
  isLoggedIn,
  (req, res, next) => {
    let { artistName, price, description, title, lng, larg } = req.body;
    let creator = req.session.currentUser;
    console.log(creator);

    const newArt = {
      dimensions: [lng, larg],
      creator: creator,
      price,
      description,
      title,
      artistName,
    };

    if (req.file) {
      newArt.pictureUrl = req.file.path;
    }
    Art.create(newArt)
      .then((createdArt) => {
        console.log(createdArt);
        res.status(201).json({ message: "Art created" });
      })
      .catch((error) => {
        next(error);
      });
  }
);

//SEND DATA FROM THE UPDATE FORM TO THE DATABASE /DESTRUCTURING REQ.BODY TO INSERT IT IN THE DATABASE
router.patch(
  "/edit/:id",
  uploadToCloudinaryMiddleware.single("pictureUrl"),
  isLoggedIn,
  (req, res, next) => {
    console.log("REQPARAMAS", req.params);
    console.log("REQBODY", req.body);
    let { artistName, price, description, title, lng, larg } = req.body;

    const updatedArt = {
      artistName,
      dimensions: [lng, larg],
      title,
      description,
      price,
    };
    if (req.file) {
      updatedArt.pictureUrl = req.file.path;
    }
    // if (req.body.name === "" || req.body.brand === "") {
    //   res.status(400).json({ message: "Name or Brand should not be empty" });
    // } else {
    Art.findByIdAndUpdate(req.params.id, updatedArt, { new: true })
      .then((updatedDocument) => {
        res.status(200).json(updatedDocument);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
    //}
  }
);

router.delete("/:id", isLoggedIn, (req, res, next) => {
  // let user = req.session.currentUser;
  //  if (req.params.id._user === user) {
  console.log("BIBI FROM DELETE ARTWORKS ROUTE :", req.params.id);
  Art.findByIdAndDelete(req.params.id)
    .then((createdArt) => {
      res.status(204).json({ message: "Art deleted" });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
