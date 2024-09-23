"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { Suspense } from "react";

import { BlogPage, Post } from "studio/lib/interfaces/pages";
import { POST_SLUG_QUERY } from "studio/lib/queries/page";

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
  const { data } = useQuery<Post>(
    POST_SLUG_QUERY,
    { id },
    { initial: initialPost },
  );

  return (
    <Suspense>
      <PostPage post={data} slug={slug} posts={posts} blog={blog} />
    </Suspense>
  );
}
