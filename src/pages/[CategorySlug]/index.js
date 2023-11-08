import React, { useState } from 'react';
import { GetCategoriesPosts, GetCategories } from '@/GraphQL/queries';
import PostCard from '@/component/Postcard/postcard';


const CategoryPost = ({ posts, length, maxLength }) => {
  if (!posts) {
    return <h1>Not Found</h1>;
  }
  const [pageSize, setPageSize] = useState(20);


  const loadMore = () => {
    setPageSize(prevPageSize => prevPageSize + 10);
  }

  const postsWithImages = posts.filter((post) => post.Media && post.Media.data.length > 0);
  const postsWithoutImages = posts.filter((post) => !post.Media || post.Media.data.length === 0);

  const visiblePostsWithImages = postsWithImages.slice(0, pageSize);
  const visiblePostsWithoutImages = postsWithoutImages.slice(0, pageSize);
  const mixedVisiblePosts = [...visiblePostsWithImages, ...visiblePostsWithoutImages];

  const mixedVisiblePostsLimited = mixedVisiblePosts.slice(0, pageSize);
  const post = posts.slice(0, pageSize);

  return (
    <div className="parent relative mt-4 h-full">
      <div className="relative lg:flex space-x-8 lg:w-11/12 h-full mx-auto px-4 py-16 sm:px:6 sm:py:24 lg:max-w-7xl lg:px:8">
        <div className="subparent relative md:grid-cols-2 lg:w-10/12 h-full grid max-sm:grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 gap-x-6 gap-y-10 grid-flow-row-dense p-2">
          {post.map((post, index) => {
            const hasMediaWithData = post.Media && post.Media.data.length > 0;
            let content;

            if (index === 4) {
              content = <div>Premium advertising</div>;
            } else {
              content = <PostCard key={post.id} post={post} className="" />;
            }

            const colSpanClass = (index) => {
              if (index === 0 && hasMediaWithData) return "lg:col-span-6 md:col-span-2";
              if (index === 1 && hasMediaWithData) return "lg:col-span-2";
              if (index === 2 && hasMediaWithData) return "lg:col-span-2";
              if (index === 3 && hasMediaWithData) return "lg:col-span-4";
              if (index === 4) return "lg:col-span-2";
              if (index > 4) {
                if (index % 5 === 0 && hasMediaWithData) return "lg:col-span-2";
                if (index % 5 === 1 || index % 5 === 4 && hasMediaWithData) return "lg:col-span-2";
                if (index % 5 === 2 && hasMediaWithData) return "lg:col-span-2";
                if (index % 5 === 3 && hasMediaWithData) return "lg:col-span-4";
                if (!hasMediaWithData) return "lg:col-span-6";
              }
              return "lg:col-span-2";
            };

            return (
              <div key={index} className={`sub sub break-words break-inside-avoid ${colSpanClass(index)}`}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="relative  w-2/12 p-2">
          <div className="bg-white w-full h-full">
            <h1>content</h1>
          </div>
        </div>
      </div>

      <div>
        
        {pageSize < length && maxLength && (<button onClick={loadMore}>Load More</button>)}
      </div>
    </div>
  );
};

export default CategoryPost;



// Fetch data at server-side runtime
export async function getStaticProps({ params }) {
  const categorySlug = params.CategorySlug;
  const maxLength = 2100000000 
  // Fetch the posts data
  const posts = await GetCategoriesPosts(categorySlug, maxLength); // You can provide a default pageSize here
  // Calculate the pageSize based on the length of the posts
  const length = posts.length;
  
  if (!posts || posts.length === 0) {
    return {
      props: {
        error: { message: 'This posts  doesn\'t Exist' },
      },
    };
  }
  return {
    props: { posts, length , maxLength},
  };
}




// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await GetCategories();

  const paths = categories.map((category) => ({
    params: { CategorySlug: category.attributes.CategorySlug }, // Use optional chaining to handle undefined category objects
  }));

  return {
    paths,
    fallback:false,
  };
}
