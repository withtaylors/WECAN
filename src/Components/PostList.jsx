import Post from "./Post";
import styles from "./Styled/PostList.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../Api/api";

function PostList() {
  const { data: postsData } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 60 * 1000,
    gcTime: 60 * 1000 * 10,
  });

  const posts = postsData?.results ?? [];

  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
