const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const historySchema = new Schema(

{
purchasedArt: [{ type: Schema.Types.ObjectId, ref: "Art" }],
buyer: { type: Schema.Types.ObjectId, ref: "User" },
quantity: Number,
date: Date
}
);

const History = mongoose.model("History", historySchema);

module.exports = History;
