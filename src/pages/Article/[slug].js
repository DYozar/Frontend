import { getPostsDetail, getPosts, getRelatedPosts } from '../../GraphQL/queries';
import{updateArticleViews} from '../../GraphQL/mutation';
import PostCard from '../../component/Postcard/postcard';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ArticleDetails from '../../component/Article Detail';
import { GetModulePosts } from '../../GraphQL/eduData';
import Head from 'next/head';

export default function Slug({ posts, relatedPosts , params }) {
  
const relatedPostswithout = relatedPosts.filter(post => !post.Media || post.Media.data.length === 0 )
const relatedPostswit  = relatedPosts.filter(post => post.Media && post.Media.data.length > 0 )

const router = useRouter();
useEffect(() => {
  if (router.isReady && posts && posts.length > 0) {
    const post = posts[0];
    if (post && post.id && post.Views !== undefined) {
      updateArticleViews(post.id, post.Views + 1);
    }
  }
}, [router.isReady, posts]);

console.log('router' ,router.query.slug)
const currentUrl = `https://insightmedium.blog/Article/${router.query.slug}`;

  return (
    <div className=''>
      
      <Head>
        <title>{posts[0].Title}</title>
        <meta charset="UTF-8"/>
        <meta name="keywords" content="Financial Markets, Stock Trading, Investment Strategies, Market Trends, Business Insights, ,Economic Forecast, Financial Analysis, Stock Market News, Entrepreneurship, Startup Success, Market Mastery, Trading Tips, Global Economy, Economic Trends, Market Dynamics, Financial News, Business Brilliance, Financial Growth, Wealth Management, Investment Portfolio, Financial Planning, Market Research, Business Development, Investment Opportunities, Economic Outlook, Market Intelligence, Financial Strategies, Business Innovation, Market Leadership, Investment Insights, Economic Impact, Market Expansion, Financial Wellness, Business Success, Market Analysis, Trading Trends, Economic Growth, Financial Literacy, Startup Growth, Market Performance, Investment Risks, Business Excellence, Financial Advice, Wealth Building, Market Opportunities, Economic Stability, Financial Markets Today, Business Trends, Investment Mastery, Market Volatility, Financial Management, Startup Tips, Economic Strategies, Market Challenges, Business Innovation, Financial Freedom, Wealth Creation, Investment Planning, Market Intelligence, Economic Insights, Financial Success, Business Leadership, Market Trends Today, Trading Insights, Economic News, Financial Wellness, Startup Strategies, Market Growth, Investment Advice, Economic Impact, Business Opportunities, Financial Growth Tips, Wealth Strategies, Market Analysis, Business Planning, Investment Trends, Economic Outlook, Financial Strategies, Business Development, Market Leadership, Investment Insights, Economic Impact, Market Expansion, Financial Wellness, Business Success, Market Analysis, Trading Trends, Economic Growth, Financial Literacy, Startup Growth, Market Performance, Investment Risks, Business Excellence, Financial Advice, Wealth Building, Market Opportunities, Economic Stability, Financial Markets Today, Business Trends, Investment Mastery , Business, Marketing, Startup, Finance, Technology, Money, Investment, Entrepreneurship, Digital Marketing, E-commerce, Small Business, Branding, Social Media, SEO, Market Research, Analytics, Leadership, Innovation, Management, Consulting, Sales, Customer Service, Productivity, Networking, Collaboration, Strategy, Growth, Budgeting, Risk Management, Startups, Funding, Angel Investors, Venture Capital, Crowdfunding, Business Plan, Mobile Marketing, Content Marketing, Email Marketing, Lead Generation,Business to Business, Business to Consumer " />
        <meta name="author" content="InsightMedium"/>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={posts[0].Title} />
        {/**<meta property="og:description" content={posts[0].Content} />*/}
        <meta property="og:image" content={posts[0].Media[0].url} />
        <meta property="og:image:secure_url" content={posts[0].Media[0].url} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="2240"/>
        <meta property="og:image:height" content="1260"/>
        <meta property="og:type" content="article" />
        
      </Head>


      
      {posts.map((post, index) => (
        <div key={index} className=''>

          <ArticleDetails post={post } url={currentUrl}/>
        </div>
      ))}

      
      {relatedPosts.length > 0 ? <h1 className=' text-4xl'>What Next !</h1 >: null}
      <div className=' mx-5 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'>
        {relatedPosts.map((post) => (
          <div key={post.id} >
            <PostCard  post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const slug = params.slug;
  const posts = await getPostsDetail(slug);

  let categorySlugs = []; // Initialize categorySlugs array

  if (posts.length > 0 && posts[0].categories) {
    const { categories } = posts[0];
    categorySlugs = categories.map((category) => category.CategorySlug);
  }

  const relatedPosts = await getRelatedPosts(categorySlugs, slug);

  return {
    props: {
      posts,
      relatedPosts,
    },
  };
}

export async function getServerSidePaths() {
  const posts = await GetModulePosts(); // Assuming this is the correct function to retrieve the posts

  const paths = posts.map((post) => ({
    params: { Slug: post.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

