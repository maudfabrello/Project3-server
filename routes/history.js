const express = require("express");
const router = express.Router();
const History = require("../models/History");

//onclick function axios to this route
router.post("/onepiece/:id", /*middleware*/(req, res, next) => {
  //email - 
  //database va chercher les artworks avec l'id du creator = user on line
  //et les history avec l'id buyer
  //qd il appuie sur buy artwork buyer ça ajoute son ID au champs buyer ou crée un history
  //display sur la gallery à modifier on enlève les trucs achetés? ou bien on réduit la quantité d'un
  // let date = getDate();
  let buyer = req.session.currentUser ;
  
  console.log("BIBIENLIGNE",buyer);
  console.log(req.params)
  let purchasedArt= req.params.id
  let newDate = new Date();
  // let quantity=1;
 
 const newHistory = {
    purchasedArt:purchasedArt,
    buyer: buyer,
    // quantity:quantity,
    date: newDate
  }
//WHEN THEY CLICK BUY? WHEN THEY CLICK CREATE? TWO ROUTES? COMPONENT TO DISPLAY CREATED ARTWORK?
//HOW TO MAKE A DELETE ON A SINGLE PAGE? DISPLAY COMPONENT WHEN WRITING THE ROUTE?
  // created: 
 // type: Date,
  //default: Date.now
console.log(newHistory);
  History.create(newHistory)
  .then((HDocument) => {
    res.status(200).json(HDocument);
  })
  .catch((error) => {
    res.status(500).json(error);
  })

});

//router get if user === buyer 

module.exports = router;