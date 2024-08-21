"use client";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { BlogPage, Post } from "studio/lib/payloads/pages";
import { BLOG_PAGE_QUERY } from "studio/lib/queries/pages";
import { Suspense } from "react";
import { Blog } from "./Blog";
import { checkDraftDataIfDevelopment } from '../utils/draftmode';

interface BlogPreviewProps {
  initialBlog: QueryResponseInitial<BlogPage>;
  initialPosts: Post[];
  slug: string;
}

export default function BlogPreview({
  initialBlog,
  initialPosts,
  slug,
}: BlogPreviewProps) {
  const { data: newData } = useQuery<BlogPage | null>(
    BLOG_PAGE_QUERY,
    { slug: slug, id: initialBlog.data._id },
    { initial: initialBlog }
  );

  checkDraftDataIfDevelopment(newData);
  const overview = newData || initialBlog.data;

  return (
    <Suspense>
      <Blog blog={overview} initialPosts={initialPosts} slug={slug} />
    </Suspense>
  );
}
