require("dotenv").config();
const mongoose = require("mongoose");
require("../config/dbConnection");

const ArtModel = require("../models/Art");

const artworks = [
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl:
      "https://i.etsystatic.com/8192403/r/il/f4b901/965185644/il_1588xN.965185644_bd5n.jpg",
    title: "Abandoned castle hallway, urban exploration, urbex",
    artistName: "Tim Vauhnik",
    description:
      "Abandoned castle hallway somewhere in Europe, urbex photography. Printed borderless on high quality matte paper.",
    dimensions: [29.7, 21],
    price: 30,
  },
  {
    creator: "605cb15631c7202af115dfe1",
    pictureUrl:
      "https://www.boredart.com/wp-content/uploads/2014/08/Stunning-Ballerina-drawings-and-sketches-10.jpg",
    title: "The Ballerina",
    artistName: "Josephine Blaza",
    description:
      "Abstract dancer on colorful background. Oil on canvas. Unframed",
    dimensions: [20, 25],
    price: 120,
  },

  {
    creator: "605cb15631c7202af115dfe2",
    pictureUrl:
      "https://www.creativityfuse.com/wp-content/uploads/2010/11/Picture-10.png",
    title: "Womanstrong",
    artistName: "David Walker",
    description: "Spray paint on plastic.",
    dimensions: [210, 250],
    price: 6547,
  },

  {
    creator: "605cb15631c7202af115dfe2",
    pictureUrl:
      "https://cdn11.bigcommerce.com/s-x49po/images/stencil/500x659/products/649/6523/28Music08__11919__20870.1506573876.jpg?c=2",
    title: "Determinism - Handpainted",
    artistName: "Community Artists Group",
    description:
      "This is an exquisite handmade painting - created by our experienced artist, and completed to perfection. Oil colors painting.",
    dimensions: [24, 36],
    price: 91,
  },

  {
    creator: "605cb15631c7202af115dff1",
    pictureUrl:
      "https://i.pinimg.com/originals/52/03/42/5203428f69f46de96b12526ecfff9103.jpg",
    title: "Edith, year 18",
    artistName: "Amelie Eliana",
    description:
      "This is a watercolor painting I made inspired my niece, who is now in the Chicaco city Ballet. I hope you like it!",
    dimensions: [13, 25],
    price: 6547,
  },
  {
    creator: "605cb15631c7202af115dff1",
    pictureUrl:
      "https://i.pinimg.com/originals/a1/53/97/a15397c539f1e70be84e0b4f13218a9d.jpg",
    title: "The gold of nature",
    artistName: "Leonid Afremov",
    description:
      "Hand painted by Afremov Studio. Materials Palette Knife, Oil Paint, Canvas. Shipped with certification COA signed by the artist.",
    dimensions: [20, 36],
    price: 200,
  },

  {
    creator: "605cb15631c7202af115dff1",
    pictureUrl: "https://afremov.com/var/images/product/500.560/image_240.jpeg",
    title: "Yellow Mood",
    artistName: "Leonid Afremov",
    description:
      "Hand painted by Afremov Studio. Materials Palette Knife, Oil Paint, Canvas. Shipped with certification COA signed by the artist.",
    dimensions: [20, 24],
    price: 174,
  },

  {
    creator: "605cb15631c7202af115dff1",
    pictureUrl: "https://afremov.com/var/images/product/250.280/image_312.jpeg",
    title: "Frozen Path",
    artistName: "Leonid Afremov",
    description:
      "Hand painted by Afremov Studio. Materials Palette Knife, Oil Paint, Canvas. Shipped with certification COA signed by the artist.",
    dimensions: [20, 24],
    price: 174,
  },
  {
    creator: "605cb15631c7202af115dff1",
    pictureUrl:
      "https://afremov.com/var/images/product/500.560/INSIDE_THE_DREAM.jpg",
    title: "Inside the Dream",
    artistName: "Leonid Afremov",
    description:
      "Hand painted by Afremov Studio. Materials Palette Knife, Oil Paint, Canvas. Shipped with certification COA signed by the artist.",
    dimensions: [20, 24],
    price: 174,
  },
  {
    creator: "605cb15631c7202af115dff1",
    pictureUrl: "https://afremov.com/var/images/product/500.560/image_673.jpeg",
    title: "Warm Winter Day",
    artistName: "Leonid Afremov",
    description:
      "Hand painted by Afremov Studio. Materials Palette Knife, Oil Paint, Canvas. Shipped with certification COA signed by the artist.",
    dimensions: [20, 24],
    price: 174,
  },
  {
    creator: "605cb15631c7202af115dff1",
    pictureUrl: "https://afremov.com/var/images/product/500.560/image_732.jpeg",
    title: "Orange Path",
    artistName: "Leonid Afremov",
    description:
      "Hand painted by Afremov Studio. Materials Palette Knife, Oil Paint, Canvas. Shipped with certification COA signed by the artist.",
    dimensions: [20, 24],
    price: 174,
  },
  {
    creator: "605cb15631c7202af115dff1",
    pictureUrl: "https://media.artsper.com/artwork/1048821_1_m.jpg",
    title: "Find Your Clitoris II, 2017",
    artistName: "Charlotte Abramow",
    description:
      "Artwork sold in perfect condition. Numbered and limited to 30 copies, signed by the artist.",
    dimensions: [21, 34],
    price: 410,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1053501_1_m.jpg",
    title: "Warrior Bloodline, 2018",
    artistName: "Delphine Diallo",
    description:
      "Photography on Hahnemuehle fine art paper, signed by the artist.",
    dimensions: [21, 34],
    price: 580,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1053696_1_m.jpg",
    title: "Mystification 1, 2016",
    artistName: "Delphine Diallo",
    description:
      "Photography on Hahnemuehle fine art paper, signed by the artist.",
    dimensions: [21, 34],
    price: 380,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1053660_1_m.jpg",
    title: "The One 2, 2017",
    artistName: "Delphine Diallo",
    description:
      "Photography on Hahnemuehle fine art paper, signed by the artist.",
    dimensions: [23, 34],
    price: 350,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1053507_1_m.jpg",
    title: "Afropunk, 2016",
    artistName: "Delphine Diallo",
    description:
      "Photography on Hahnemuehle fine art paper, signed by the artist.",
    dimensions: [23, 34],
    price: 350,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1053504_1_m.jpg",
    title: "Mother – Female Minotaure, 2016",
    artistName: "Delphine Diallo",
    description:
      "Photography on Hahnemuehle fine art paper, signed by the artist.",
    dimensions: [23, 34],
    price: 350,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1053495_1_m.jpg",
    title: "The One, 2013",
    artistName: "Delphine Diallo",
    description:
      "Photography on Hahnemuehle fine art paper, signed by the artist.",
    dimensions: [23, 34],
    price: 350,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1053696_1_m.jpg",
    title: "Mystification 1, 2016",
    artistName: "Delphine Diallo",
    description:
      "Photography on Hahnemuehle fine art paper, signed by the artist.",
    dimensions: [35, 24],
    price: 650,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1043820_1_m.jpg",
    title: "Hipster in Stone XXIII, Poséidon, 2013",
    artistName: "Léo Caillard",
    description:
      "Photography on Diasec and Dibond. Black wood floater frame. Work sold with an invoice from the gallery and a certificate of authenticity.",
    dimensions: [59, 39],
    price: 780,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1043748_1_m.jpg",
    title: "Hipster in Stone XXXVII, Discobolus, 2018",
    artistName: "Léo Caillard",
    description:
      "Photography on Diasec and Dibond. Black wood floater frame. Work sold with an invoice from the gallery and a certificate of authenticity.",
    dimensions: [59, 39],
    price: 780,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1043877_1_m.jpg",
    title: "Hipster in Stone XX, Cain, 2014",
    artistName: "Léo Caillard",
    description:
      "Photography on Diasec and Dibond. Black wood floater frame. Work sold with an invoice from the gallery and a certificate of authenticity.",
    dimensions: [55, 39],
    price: 750,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1043829_1_m.jpg",
    title: "Hipster in Stone I, Aristeus, 2013",
    artistName: "Léo Caillard",
    description:
      "Photography on Diasec and Dibond. Black wood floater frame. Work sold with an invoice from the gallery and a certificate of authenticity.",
    dimensions: [49, 35],
    price: 680,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1043730_1_m.jpg",
    title: "Hipster in Stone XVII, Philopoemen, 2018",
    artistName: "Léo Caillard",
    description:
      "Photography on Diasec and Dibond. Black wood floater frame. Work sold with an invoice from the gallery and a certificate of authenticity.",
    dimensions: [59, 39],
    price: 780,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1043835_1_m.jpg",
    title: "Hipster in Stone VIII, Diane au bain, 2013",
    artistName: "Léo Caillard",
    description:
      "Photography on Diasec and Dibond. Black wood floater frame. Work sold with an invoice from the gallery and a certificate of authenticity.",
    dimensions: [59, 39],
    price: 780,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1052844_1_m.jpg",
    title: "Racines",
    artistName: "Hom Nguyen",
    description:
      "Work sold with an invoice from the gallery and a certificate of authenticity.",
    dimensions: [79, 49],
    price: 1780,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1058853_1_m.jpg",
    title: "Anita et les autres 2021",
    artistName: "Sophie Manaches",
    description: "Painting on fine art paper, not framed.",
    dimensions: [79, 49],
    price: 1780,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/972888_1_m.jpg",
    title: "The New Old I",
    artistName: "Tiago Magro",
    description:
      "Collage and Acrylic on Wood. The New Old I features a Torn up screen print by Shepard Fairey 'Interpol Interpolation'. The pair arrived damaged, becoming a truly incredible collaboration. Our Personal Favorite from the series, highlights the constant struggle between Love and Power.",
    dimensions: [48, 27],
    price: 1780,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1051344_1_m.jpg",
    title: "236. Clint",
    artistName: "Bernard Pras",
    description:
      "Photography on Diasec and Dibond. Black aluminium flush chassis.",
    dimensions: [35, 35],
    price: 170,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/338968_1_m.jpg",
    title: "162. Vénus",
    artistName: "Bernard Pras",
    description:
      "Photography on Diasec and Dibond. Black aluminium flush chassis.",
    dimensions: [41, 31],
    price: 270,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/149398_1_m.jpg",
    title: "Inventaire 66 - Cat caddy",
    artistName: "Bernard Pras",
    description:
      "Photography on Diasec and Dibond. Black aluminium flush chassis.",
    dimensions: [41, 31],
    price: 270,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1057317_1_m.jpg",
    title: "Feel, Canyon Road ",
    artistName: "Jason Engelund",
    description:
      "Photography on Diasec and Dibond. Black aluminium flush chassis.",
    dimensions: [20, 16],
    price: 270,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1057383_1_m.jpg",
    title: "Field of the sun 49 (Abstract photography)",
    artistName: "Jason Engelund",
    description:
      "Photography : photo transfer. Jason Engelund obtained a licence in fine arts with distinction at the California College of Arts and Crafts and University of Californie in Davis.",
    dimensions: [29, 24],
    price: 370,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1057341_1_m.jpg",
    title: "Space Altamont (Abstract photography)",
    artistName: "Jason Engelund",
    description:
      "Photography : photo transfer. Jason Engelund obtained a licence in fine arts with distinction at the California College of Arts and Crafts and University of Californie in Davis.",
    dimensions: [29, 24],
    price: 370,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1057368_1_m.jpg",
    title: "Sun Mountain Wild Vision (Abstract photography)",
    artistName: "Jason Engelund",
    description:
      "Photography : photo transfer. Jason Engelund obtained a licence in fine arts with distinction at the California College of Arts and Crafts and University of Californie in Davis.",
    dimensions: [40, 29],
    price: 400,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1057371_1_m.jpg",
    title: "Shifting the frame 101 (Abstract photography)",
    artistName: "Jason Engelund",
    description:
      "Photography : photo transfer. Jason Engelund obtained a licence in fine arts with distinction at the California College of Arts and Crafts and University of Californie in Davis.",
    dimensions: [40, 29],
    price: 400,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1057323_1_m.jpg",
    title: "Huis Clos Exit Here (Abstract photography)",
    artistName: "Jason Engelund",
    description:
      "Photography : photo transfer. Jason Engelund obtained a licence in fine arts with distinction at the California College of Arts and Crafts and University of Californie in Davis.",
    dimensions: [40, 29],
    price: 400,
  },

  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1056405_1_m.jpg",
    title: "Ranji Bhagu",
    artistName: "John Kenny",
    description: "Photography : C-print on Diasec and Dibond. Not framed",
    dimensions: [35, 23],
    price: 359,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/1008768_1_m.jpg",
    title: "Lourdes, 2012",
    artistName: "John Kenny",
    description: "Photography : C-print on Diasec and Dibond. Not framed",
    dimensions: [35, 23],
    price: 359,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/57512_1_m.jpg",
    title: "Otjitando, 2009",
    artistName: "John Kenny",
    description: "Photography : C-print on Diasec and Dibond. Not framed",
    dimensions: [35, 23],
    price: 359,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/931044_1_m.jpg",
    title: "Assaita, 2009",
    artistName: "John Kenny",
    description: "Photography : C-print on Diasec and Dibond. Not framed",
    dimensions: [35, 23],
    price: 359,
  },
  {
    creator: "605cb15631c7201af115dfe1",
    pictureUrl: "https://media.artsper.com/artwork/731007_1_m.jpg",
    title: "Inchoy and child, 2019",
    artistName: "John Kenny",
    description: "Photography : C-print on Diasec and Dibond. Not framed",
    dimensions: [35, 23],
    price: 359,
  },
];

ArtModel.insertMany(artworks)
  .then((insertArt) => console.log(insertArt))
  .catch((err) => console.log(err));
