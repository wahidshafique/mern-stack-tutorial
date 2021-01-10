import PostMessage from "../models/postMessage";
import { Request, Response } from "express";

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
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(409).json({ message: e?.message });
    }
  }
};
