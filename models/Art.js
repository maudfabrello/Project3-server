const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema(
    {
      
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    artistName:String,
    pictureUrl: String,
    title: String,
    description: String,
    dimensions: [Number],
    price: Number,
  },
  { timestamps: true }
);

const Art = mongoose.model("Art", artSchema);

module.exports = Art;

