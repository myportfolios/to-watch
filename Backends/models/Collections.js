const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

//create Schema

const CollectionsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

const Collections = mongoose.model("collections", CollectionsSchema);

module.exports = Collections;
