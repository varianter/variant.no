import { Metadata, ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import { Blog } from "src/blog/Blog";
import BlogPreview from "src/blog/BlogPreview";
import { getDraftModeInfo } from "src/utils/draftmode";
import SectionRenderer from "src/utils/renderSection";
import { fetchSeoData, generateMetadataFromSeo } from "src/utils/seo";
import { BlogPage, PageBuilder, Post, SEO } from "studio/lib/payloads/pages";
import {
  BLOG_PAGE_QUERY,
  POSTS_QUERY,
  SEO_SLUG_QUERY,
  SLUG_QUERY,
} from "studio/lib/queries/pages";
import { loadQuery } from "studio/lib/store";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const seo = await fetchSeoData(SEO_SLUG_QUERY, { slug: params.slug });

  return generateMetadataFromSeo(seo);
}

async function Page({ params }: Props) {
  const { slug } = params;
  const { perspective, isDraftMode } = getDraftModeInfo();

  const [initialPage, initialBlogPage] = await Promise.all([
    loadQuery<PageBuilder>(SLUG_QUERY, { slug }, { perspective }),
    loadQuery<BlogPage>(BLOG_PAGE_QUERY, { slug }, { perspective }),
  ]);

  if (!initialPage && !initialBlogPage.data) {
    console.log(`Page ${slug} not found`);
    // TODO: add error snackbar
    redirect("/");
  }

  // TODO: fix error for when initialBlogPage.data is empty (say slug doesn't exists)
  if (!initialPage.data && initialBlogPage.data) {
    const initialPosts = await loadQuery<Post[]>(
      POSTS_QUERY,
      { slug },
      { perspective }
    );

    if (!initialPosts) {
      console.log(`Posts for page: ${slug} not found`);
      // TODO: ADD ERROR PAGE
    }

    return isDraftMode ? (
      <BlogPreview
        initialBlog={initialBlogPage}
        initialPosts={initialPosts.data}
        slug={slug}
      />
    ) : (
      <Blog
        blog={initialBlogPage.data}
        initialPosts={initialPosts.data}
        slug={slug}
      />
    );
  }

  if (initialBlogPage && !initialBlogPage.data) {
    return (
      <>
        {initialPage.data?.sections?.map((section, index) => (
          <SectionRenderer
            key={section._key}
            section={section}
            isDraftMode={isDraftMode}
            initialData={initialPage}
            isLandingPage={false}
            sectionIndex={index}
          />
        ))}
      </>
    );
  }

  return null;
}

export default Page;
