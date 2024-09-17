import { loadQuery } from "@sanity/react-loader";
import { Metadata } from "next";
import PostPage from "src/post/PostPage";
import PostPagePreview from "src/post/PostPagePreview";
import { getDraftModeInfo } from "src/utils/draftmode";
import { fetchPostSeoData, generateMetadataFromSeo } from "src/utils/seo";
import { BlogPage, Post } from "studio/lib/interfaces/pages";
import {
  BLOG_PAGE_QUERY,
  MORE_POST_PREVIEW,
  POST_SLUG_QUERY,
  SEO_POST_SLUG_QUERY,
} from "studio/lib/queries/pages";

type Props = {
  params: {
    id: string;
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seo = await fetchPostSeoData(SEO_POST_SLUG_QUERY, { id: params.id });
  return generateMetadataFromSeo(seo);
}

const NestedSlugPage = async ({ params }: Props) => {
  const { id, slug } = params;
  const { perspective, isDraftMode } = getDraftModeInfo();

  const [initialPost, initialBlogPage, initialPosts] = await Promise.all([
    loadQuery<Post>(POST_SLUG_QUERY, { id }, { perspective }),
    loadQuery<BlogPage>(BLOG_PAGE_QUERY, { slug }, { perspective }),
    loadQuery<Post[]>(MORE_POST_PREVIEW, {}, { perspective }),
  ]);

  if (isDraftMode) {
    return (
      <PostPagePreview
        initialPost={initialPost}
        id={id}
        slug={slug}
        posts={initialPosts.data}
        blog={initialBlogPage.data}
      />
    );
  }
  return (
    <PostPage
      post={initialPost.data}
      slug={slug}
      posts={initialPosts.data}
      blog={initialBlogPage.data}
    />
  );
};

export default NestedSlugPage;
