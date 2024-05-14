const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema({
  title: String,
  info: String,
  importance: Boolean,
});

const Lists = mongoose.model("List", listSchema);

module.exports = Lists;
