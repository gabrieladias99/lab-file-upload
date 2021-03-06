const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
  id: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
  picname: String,
  picpath: String,
}, {
  timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
});

let Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;