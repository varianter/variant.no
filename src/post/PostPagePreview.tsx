"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { BlogPage, Post } from "studio/lib/payloads/pages";
import { POST_SLUG_QUERY } from "studio/lib/queries/pages";
import { Suspense } from "react";
import PostPage from "./PostPage";

interface PostPagePreviewProps {
  initialPost: QueryResponseInitial<Post>;
  id: string;
  slug: string;
  posts: Post[];
  blog: BlogPage;
}

export default function PostPagePreview({
  initialPost,
  id,
  slug,
  posts,
  blog,
}: PostPagePreviewProps) {
  const { data: newData } = useQuery<Post | null>(
    POST_SLUG_QUERY,
    { id },
    { initial: initialPost }
  );

  const post = newData || initialPost.data;

  return (
    <Suspense>
      <PostPage post={post} slug={slug} posts={posts} blog={blog} />
    </Suspense>
  );
}
