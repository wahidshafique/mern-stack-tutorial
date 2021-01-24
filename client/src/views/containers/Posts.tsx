import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "tut-redux/reducers";
import Post from "../components/Post";
import tw from "tailwind.macro";
import styled from "styled-components/macro";

const PostsList = styled.div`
  ${tw`flex flex-wrap mx-auto`};
`;

export default function Posts() {
  const posts = useSelector((state: RootState) => state.posts);

  if (posts.loading === "pending") {
    return <div>Loading...</div>;
  }

  return (
    <PostsList>
      {posts.data.map((post) => (
        <Post key={post?._id} {...post} />
      ))}
    </PostsList>
  );
}
