const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArtSchema = new Schema(
    {
    _user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    pictureUrl: String,
    artist: String,
    title: String,
    description: String,
    dimensions: [Number],
    price: Number,
  },
  { timestamps: true }
);

const Art = mongoose.model("Art", artSchema);

module.exports = Art;

