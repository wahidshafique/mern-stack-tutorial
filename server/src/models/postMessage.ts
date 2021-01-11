import mongoose, { Schema } from "mongoose";
import { Post as _Post } from "../../../shared/types";

export interface Post extends mongoose.Document, _Post {}

const postSchema: Schema = new mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model<Post>("PostMessage", postSchema);
