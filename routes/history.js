const express = require("express");
const router = express.Router();
const History = require("../models/History");

router.patch("/api/history/:id", (req, res, next) => {
    console.log(req.params);
    console.log(req.body);
  
    //date getdate()
        //buyer patch.user
        //artwork req parmas id
        //let user = req.session.currentUser._id;
    
   
        History.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedDocument) => {
          res.status(200).json(updatedDocument);
        })
        .catch((error) => {
          res.status(500).json(error);
        });
    
  });

module.exports = router;