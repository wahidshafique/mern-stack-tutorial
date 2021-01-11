import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "tut-redux/reducers";

export default function Posts() {
  const posts = useSelector((state: RootState) => state.posts);
  console.log("loaded posts", posts);
  return <div>All our posts</div>;
}
