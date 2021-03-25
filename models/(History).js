const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const historySchema = new Schema(

// buyer is the one who is connected
// seller is the one who created the art

// add description
// add quantity
// add third model: with buyer, seller, and art

// history of what user bought

// create and read automatically

);

const History = mongoose.model("History", historySchema);

module.exports = History;