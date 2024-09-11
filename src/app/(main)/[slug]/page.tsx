import { Metadata } from "next";
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
import { homeLink } from "../../../blog/components/utils/linkTypes";
import CustomErrorMessage from "../../../blog/components/customErrorMessage/CustomErrorMessage";
import { CompanyLocation } from "studio/lib/payloads/companyDetails";
import { COMPANY_LOCATIONS_QUERY } from "studio/lib/queries/companyDetails";

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

const Page404 = (
  <CustomErrorMessage
    title="404 — Something went wrong"
    body="The page you are looking for does not exist. There may be an error in the URL, or the page may have been moved or deleted."
    link={homeLink}
  />
);

async function Page({ params }: Props) {
  const { slug } = params;
  const { perspective, isDraftMode } = getDraftModeInfo();

  const [
    initialPage,
    initialBlogPage,
    initialCompensationsPage,
    initialLocationsData,
  ] = await Promise.all([
    loadQuery<PageBuilder>(SLUG_QUERY, { slug }, { perspective }),
    loadQuery<BlogPage>(BLOG_PAGE_QUERY, { slug }, { perspective }),
    loadQuery<CompensationsPage>(
      COMPENSATIONS_PAGE_QUERY,
      { slug },
      { perspective },
    ),
    loadQuery<CompanyLocation[]>(COMPANY_LOCATIONS_QUERY, {}, { perspective }),
  ]);

  if (initialPage.data) {
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

  if (initialBlogPage.data) {
    const initialPosts = await loadQuery<Post[]>(
      POSTS_QUERY,
      { slug },
      { perspective },
    );

    if (!initialPosts) {
      return Page404;
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

  if (initialCompensationsPage.data && initialLocationsData.data) {
    return isDraftMode ? (
      <CompensationsPreview
        initialCompensations={initialCompensationsPage}
        initialLocation={initialLocationsData}
      />
    ) : (
      <Compensations
        compensations={initialCompensationsPage.data}
        locations={initialLocationsData.data}
      />
    );
  }

  return Page404;
}

export default Page;
