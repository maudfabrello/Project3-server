const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  
  CreatedArtForSale: {
    type: Schema.Types.ObjectId,
    ref: "Art",
  },
},
{
  PurchasedArt: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

});

const User = mongoose.model("User", userSchema);

module.exports = User;
