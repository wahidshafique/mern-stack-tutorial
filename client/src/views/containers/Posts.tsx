import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "tut-redux/reducers";
import Post from "../components/Post";
import tw from "tailwind.macro";
import styled from "styled-components/macro";

const Header = styled.header`
  ${tw`bg-black min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

export default function Posts() {
  const posts = useSelector((state: RootState) => state.posts);

  if (posts.loading === "pending") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header>yuo</Header>
      {posts.data.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
