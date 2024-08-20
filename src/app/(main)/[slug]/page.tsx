import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Blog } from "src/blog/Blog";
import BlogPreview from "src/blog/BlogPreview";
import SalaryAndBenefits from 'src/salaryAndBenefits/SalaryAndBenefits';
import { getDraftModeInfo } from "src/utils/draftmode";
import SectionRenderer from "src/utils/renderSection";
import { fetchSeoData, generateMetadataFromSeo } from "src/utils/seo";
import { BlogPage, PageBuilder, Post } from "studio/lib/payloads/pages";
import { SalaryAndBenefits as SalaryAndBenefitsPayload } from 'studio/lib/payloads/salaryAndBenefits';
import {
  BLOG_PAGE_QUERY,
  POSTS_QUERY,
  SALARY_AND_BENEFITS_PAGE_QUERY,
  SEO_SLUG_QUERY,
  SLUG_QUERY,
} from "studio/lib/queries/pages";
import { loadQuery } from "studio/lib/store";
import SalaryAndBenefitsPreview from "src/salaryAndBenefits/SalaryAndBenefitsPreview";

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

  const [initialPage, initialBlogPage, initialSalaryAndBenefitsPage] = await Promise.all([
    loadQuery<PageBuilder>(SLUG_QUERY, { slug }, { perspective }),
    loadQuery<BlogPage>(BLOG_PAGE_QUERY, { slug }, { perspective }),
    loadQuery<SalaryAndBenefitsPayload>(SALARY_AND_BENEFITS_PAGE_QUERY, { slug }, { perspective }),
  ]);

  if (!initialPage.data && !initialBlogPage.data && !initialSalaryAndBenefitsPage.data) {
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

  if (initialSalaryAndBenefitsPage.data) {
    return isDraftMode ? (
      <SalaryAndBenefitsPreview initialSalaryAndBenefits={initialSalaryAndBenefitsPage} />
    ) : (
      <SalaryAndBenefits salaryAndBenefits={initialSalaryAndBenefitsPage.data} />
    );
  }

  return null;
}

export default Page;
