require("dotenv").config();
const mongoose = require('mongoose');
require("../config/dbConnection");

const ArtModel = require("../models/Art");

const artworks = [
    { creator: "605cb15631c7202af115dfe1", 
      pictureUrl: "https://www.boredart.com/wp-content/uploads/2014/08/Stunning-Ballerina-drawings-and-sketches-10.jpg",
      title: "Essai",
      artistName: "Joseph Blaza",
      description: "blablabla",
      dimensions: [465467,4536546],
      price: 80,
    },
  
    { creator: "605cb15631c7202af115dfe2", 
      pictureUrl: "https://www.creativityfuse.com/wp-content/uploads/2010/11/Picture-10.png",
      title: "Essai2",
      artistName: "Guillaume Degall",
      description: "blablablabli",
      dimensions: [4654,4536],
      price: 250,
    },

    { creator: "605cb15631c7202af115dfe3", 
      pictureUrl: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/500x659/products/649/6523/28Music08__11919__20870.1506573876.jpg?c=2",
      title: "Essai2",
      artistName: "Louis Zamaga",
      description: "blablablabli",
      dimensions: [4654,4536],
      price: 300,
    },

    { creator: "605cb15631c7202af115dfe4", 
      pictureUrl: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/500x659/products/23926/36343/1503655509059_image__07438.1506574752.jpg?c=2",
      title: "Essai2",
      artistName: "Lisa Monet",
      description: "blablablabli",
      dimensions: [4654,4536],
      price: 100,
    },

    { creator: "605cb15631c7202af115dfe5", 
      pictureUrl: "https://i.pinimg.com/originals/52/03/42/5203428f69f46de96b12526ecfff9103.jpg",
      title: "Essai2",
      artistName: "Amelie Eliana",
      description: "blablablabli",
      dimensions: [4654,4536],
      price: 60,
    },

    { creator: "605cb15631c7202af115dfe6", 
      pictureUrl: "https://images.saatchiart.com/saatchi/966944/art/7958372/7025872-YNMAYSUO-6.jpg",
      title: "Essai2",
      artistName: "Lisa Lina",
      description: "blablablabli",
      dimensions: [40,60],
      price: 120,
    },
    
  ];


  ArtModel.insertMany(artworks)
  .then(insertArt => console.log(insertArt))
  .catch(err => console.log(err))