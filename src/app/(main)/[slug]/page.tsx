import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Blog } from "src/blog/Blog";
import BlogPreview from "src/blog/BlogPreview";
import Compensations from "src/compensations/Compensations";
import { getDraftModeInfo } from "src/utils/draftmode";
import SectionRenderer from "src/utils/renderSection";
import { fetchSeoData, generateMetadataFromSeo } from "src/utils/seo";
import { BlogPage, PageBuilder, Post } from "studio/lib/payloads/pages";
import { CompensationsPage } from "studio/lib/payloads/compensations";
import {
  BLOG_PAGE_QUERY,
  POSTS_QUERY,
  COMPENSATIONS_PAGE_QUERY,
  SEO_SLUG_QUERY,
  SLUG_QUERY,
} from "studio/lib/queries/pages";
import { loadQuery } from "studio/lib/store";
import CompensationsPreview from "src/compensations/CompensationsPreview";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seo = await fetchSeoData(SEO_SLUG_QUERY, { slug: params.slug });

  return generateMetadataFromSeo(seo);
}

async function Page({ params }: Props) {
  const { slug } = params;
  const { perspective, isDraftMode } = getDraftModeInfo();

  const [initialPage, initialBlogPage, initialCompensationsPage] =
    await Promise.all([
      loadQuery<PageBuilder>(SLUG_QUERY, { slug }, { perspective }),
      loadQuery<BlogPage>(BLOG_PAGE_QUERY, { slug }, { perspective }),
      loadQuery<CompensationsPage>(
        COMPENSATIONS_PAGE_QUERY,
        { slug },
        { perspective },
      ),
    ]);

  if (
    !initialPage.data &&
    !initialBlogPage.data &&
    !initialCompensationsPage.data
  ) {
    console.log(`Page ${slug} not found`);
    // TODO: add error snackbar
    redirect("/");
  }

  // TODO: fix error for when initialBlogPage.data is empty (say slug doesn't exists)
  if (!initialPage.data && initialBlogPage.data) {
    const initialPosts = await loadQuery<Post[]>(
      POSTS_QUERY,
      { slug },
      { perspective },
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

  if (initialBlogPage.data && !initialBlogPage.data) {
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

  if (initialCompensationsPage.data) {
    return isDraftMode ? (
      <CompensationsPreview initialCompensations={initialCompensationsPage} />
    ) : (
      <Compensations compensations={initialCompensationsPage.data} />
    );
  }

  return null;
}

export default Page;
