import PostMessage from "../models/postMessage";
import { Request, Response } from "express";
import mongoose, { Schema } from "mongoose";

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(404).json({ message: e?.message });
    }
  }
};

export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  const post = req?.body as unknown;
  const newPost = new PostMessage(post);
  console.log("new post server", req.body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(409).json({ message: e?.message });
    }
  }
};

export const updatePost = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(404).send("No post with that id");
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  res.json(updatedPost);
};
