import React, { useEffect } from "react";
import Posts from "../containers/Posts";
import Form from "../containers/Form";
import { useDispatch } from "react-redux";
import { fetchPosts } from "tut-redux/slices/postsSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      home page hello
      <Posts />
      <Form />
    </div>
  );
}
