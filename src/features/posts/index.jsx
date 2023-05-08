import React from "react";

import { useAppDispatch, useAppSelector } from "@src/app/store";
import { selectPosts, selectPostLoading, fetchPosts } from "./postSlice";

export default function Post() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);
  const loading = useAppSelector(selectPostLoading);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) return <div data-testid="loading">Loading...</div>;

  return (
    <div style={{ marginTop: "60px" }}>
      {posts.map((post) => (
        <h4 key={post.id}>{post.title}</h4>
      ))}
    </div>
  );
}
