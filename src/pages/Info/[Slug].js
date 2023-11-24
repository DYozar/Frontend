import ReactMarkdown from 'react-markdown'
import {
  AboutUs,
  CategoryDirectory,
  ContactUs,
  ContentGuide,
  FeedBack,
  Resources,
  Sitemap,
  TermsOfService,
  PrivacyPolicy
} from '@/GraphQL/StaticQueries';
import Link from 'next/link';

export default function index({matchedPage}) {

  
  
  const privacyPolicyContent = matchedPage?.attributes.content;



  return (
    <div className=" my-6 w-11/12 mx-auto min-h-screen">
      <h1>{matchedPage.attributes.Title}</h1>
      <ReactMarkdown className="markdown">{privacyPolicyContent}</ReactMarkdown>
    </div>
  )
}
export async function getServerSideProps({ params }) {
  const {Slug} = params
  const staticPages = [
   // AboutUs,
    //CategoryDirectory,
    ContactUs,
    //ContentGuide,
    //FeedBack,
    //Resources,
   // Sitemap,
    TermsOfService,
    PrivacyPolicy
  ];

  const staticPageData = await Promise.all(staticPages.map(page => page()));
  const matchedPage = staticPageData.find(page => page?.attributes?.Slug === Slug);

  return {
    props: {
      matchedPage,
    },
  };
}

export async function getServerSidePaths() {
  const staticSlugs = [
    AboutUs,
    CategoryDirectory,
    ContactUs,
    ContentGuide,
    FeedBack,
    Resources,
    Sitemap,
    TermsOfService,
    PrivacyPolicy
  ];
  const staticPageData = await Promise.all(staticSlugs.map(page => page()));

  const paths = staticPageData
    .filter((category) => category.attributes?.Slug) // Filter out categories with no Slug
    .map((category) => ({
      params: { Slug: category.attributes.Slug },
    }));

  return {
    paths,
    fallback: false,
  };
}
