import mongoose, { Schema } from "mongoose";

export interface Post extends mongoose.Document {
  title: string;
  message: string;
  creator: string;
  tags: string[];
  selectedFile: string;
  likeCount: {
    type: number;
  };
}

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
