import React from "react";
import { Post as PostType } from "../../../../shared/types";
import tw from "tailwind.macro";
import styled from "styled-components/macro";

const StyledPost = styled.div`
  ${tw`w-48 h-48 bg-white rounded-xl shadow-md 
  overflow-hidden flex p-4 flex flex-col`};
  img {
    ${tw`w-1/2 h-1/2`}
  }
`;

export default function Post({
  likeCount,
  creator,
  createdAt,
  message,
  tags,
  title,
  image,
}: PostType) {
  return (
    <StyledPost>
      {image && <img src={image.base64} alt={image.name} />}
      <h2>{title}</h2>
      <p>{message}</p>
      <pre>{creator}</pre>
      <pre>{likeCount}</pre>
    </StyledPost>
  );
}
