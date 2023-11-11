
import { GetChapterContent } from '@/GraphQL/eduData';
import Link from 'next/link';
import Error from '@/pages/404';

const SubcategoryPage = ({posts , error}) => {

  if (error) { // Handle errors, e.g., show an error message or redirect to an error page
    return <h1>{error.message}</h1>;
  }

  if (!posts) {// Check if 'posts' is defined before filtering
    return <Error/>; // Subcategory not found or doesn't belong to the parent category
  }

console.log(posts , "content")

  return (
    <div > 
      <h2 className='text-6xl'> CHAPTER contents</h2>
      {posts.map((post) => (
        <div>
          <Link href="/Education/Content/[Slug]" as={`/Education/Content/${post.Slug}`}>
            {post.Title}
          </Link>
        </div>
      ))}
    
        

    </div>
  );
};

export default SubcategoryPage;

// Fetch data at server-side runtime
export async function getServerSideProps({ params }) {
  console.log('getServerSideProps called with params:', params);

  const { MoSlug, CSlug } = params;

  try {
    // Fetch subcategory posts by CategorySlug and sSlug
    const posts = await GetChapterContent(CSlug, MoSlug);
    console.log('Fetched posts:', posts);

    if (!posts || posts.length === 0 ) {
      return {
        props: {
          error: { message: 'No posts found' },
        },
      };
    } 

    return {
      props: { posts },
    };
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return {
      props: {
        error: { message: 'An error occurred while fetching data.' },
      },
    };
  }
}
