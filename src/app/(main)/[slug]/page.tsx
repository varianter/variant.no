import { Metadata } from "next";

import { Blog } from "src/blog/Blog";
import BlogPreview from "src/blog/BlogPreview";
import CustomErrorMessage from "src/blog/components/customErrorMessage/CustomErrorMessage";
import { homeLink } from "src/blog/components/utils/linkTypes";
import Compensations from "src/compensations/Compensations";
import CompensationsPreview from "src/compensations/CompensationsPreview";
import CustomerCases from "src/customerCases/CustomerCases";
import CustomerCasesPreview from "src/customerCases/CustomerCasesPreview";
import { getDraftModeInfo } from "src/utils/draftmode";
import SectionRenderer from "src/utils/renderSection";
import { fetchSeoData, generateMetadataFromSeo } from "src/utils/seo";
import { CompanyLocation } from "studio/lib/interfaces/companyDetails";
import { CompensationsPage } from "studio/lib/interfaces/compensations";
import { BlogPage, PageBuilder, Post } from "studio/lib/interfaces/pages";
import { CustomerCasePage } from "studio/lib/interfaces/specialPages";
import { COMPANY_LOCATIONS_QUERY } from "studio/lib/queries/companyDetails";
import {
  BLOG_PAGE_QUERY,
  POSTS_QUERY,
  SEO_SLUG_QUERY,
  SLUG_QUERY,
} from "studio/lib/queries/page";
import {
  COMPENSATIONS_PAGE_QUERY,
  CUSTOMER_CASES_PAGE_QUERY,
} from "studio/lib/queries/specialPages";
import { loadQuery } from "studio/lib/store";
import { CustomerCase } from "studioShared/lib/interfaces/customerCases";
import { CUSTOMER_CASES_QUERY } from "studioShared/lib/queries/customerCases";
import { loadSharedQuery } from "studioShared/lib/store";

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
    initialCustomerCases,
    initialSharedCustomerCases,
  ] = await Promise.all([
    loadQuery<PageBuilder>(SLUG_QUERY, { slug }, { perspective }),
    loadQuery<BlogPage>(BLOG_PAGE_QUERY, { slug }, { perspective }),
    loadQuery<CompensationsPage>(
      COMPENSATIONS_PAGE_QUERY,
      { slug },
      { perspective },
    ),
    loadQuery<CompanyLocation[]>(COMPANY_LOCATIONS_QUERY, {}, { perspective }),
    loadQuery<CustomerCasePage>(
      CUSTOMER_CASES_PAGE_QUERY,
      { slug },
      { perspective },
    ),
    loadSharedQuery<CustomerCase>(CUSTOMER_CASES_QUERY, {}, { perspective }),
  ]);

  // const [initialSharedCustomerCases] = await Promise.all([
  //   loadSharedQuery<CustomerCase>(CUSTOMER_CASES_QUERY, {}, { perspective }),
  // ]);

  console.log("shared:", initialSharedCustomerCases);
  console.log("customer case", initialCustomerCases);
  console.log("locations", initialLocationsData);

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
        initialLocations={initialLocationsData}
      />
    ) : (
      <Compensations
        compensations={initialCompensationsPage.data}
        locations={initialLocationsData.data}
      />
    );
  }

  if (initialCustomerCases.data && initialSharedCustomerCases.data) {
    console.log("this is in page", initialSharedCustomerCases);
    return isDraftMode ? (
      <CustomerCasesPreview
        initialCustomerCases={initialCustomerCases}
        initialSharedCustomerCases={initialSharedCustomerCases}
      />
    ) : (
      <CustomerCases
        customerCases={initialCustomerCases.data}
        sharedCustomerCases={initialSharedCustomerCases.data}
      />
    );
  }

  return Page404;
}

export default Page;
