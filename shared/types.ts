export interface Post {
  title: string;
  message: string;
  creator: string;
  tags: string[];
  selectedFile: string;
  likeCount: {
    type: number;
  };
}
