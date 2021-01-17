import React from "react";
import { Post as PostType } from "../../../../shared/types";

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
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
      <pre>{creator}</pre>
      <pre>{likeCount}</pre>
    </div>
  );
}
