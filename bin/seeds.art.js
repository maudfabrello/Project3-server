require("dotenv").config();
const mongoose = require('mongoose');
require("../config/dbConnection");

const ArtModel = require("../models/Art");



const artworks = [
    { creator: "605cb15631c7202af115dfe1", pictureUrl: "https://www.boredart.com/wp-content/uploads/2014/08/Stunning-Ballerina-drawings-and-sketches-10.jpg",
      title: "Essai",
      description: "blablabla",
      dimensions: [465467,4536546],
      price: 654765465,
    },
  
    { creator: "605cb15631c7202af115dfe2", pictureUrl: "https://www.creativityfuse.com/wp-content/uploads/2010/11/Picture-10.png",
      title: "Essai2",
      description: "blablablabli",
      dimensions: [4654,4536],
      price: 6547,
    },
    
  ];


  ArtModel.insertMany(artworks)
  .then(insertArt => console.log(insertArt))
  .catch(err => console.log(err))