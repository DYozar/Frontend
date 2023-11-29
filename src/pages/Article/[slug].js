import { getPostsDetail, getPosts, getRelatedPosts } from '@/GraphQL/queries';
import{updateArticleViews} from '@/GraphQL/mutation';
import PostCard from '@/component/Postcard/postcard';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ArticleDetails from '@/component/Article Detail';
import { GetModulePosts } from '@/GraphQL/eduData';

export default function Slug({ posts, relatedPosts  }) {
  
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
    
  return (
    <div className=''>
      
      <Head>
          <title>{posts.Title}</title>
          <meta property="og:title" content={posts.Title} />
          {posts.Media.map((media, index) => (
            <meta property="og:image" content={media.url} key={index} />
          ))}
      </Head>
      
      {posts.map((post, index) => (
        <div key={index} className='  '>
          
          <ArticleDetails post={post}/>
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

