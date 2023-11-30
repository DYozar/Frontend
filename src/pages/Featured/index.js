import React from 'react';
import PostCard from '../../component/Postcard/postcard';
import Link from 'next/link';
import { GetfuturedPost, getFeaturedPosts } from '../../GraphQL/queries';
import Error from '../../pages/404';

 function DynamicSection({ Slug, Title, Posts }) {
  if(!Posts){
    return <Error/>
  }
  return (
    <div className=''>
      <h2 className=" text-3xl ">
        <Link href={`/Featured/${Slug}`}>
          {Title}
        </Link>
      </h2>


      <div className="">
        <div className=' grid xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-3  gap-4'>
          {Posts.map((post ,index) => {
            let content;
            if (index === 3) {
              content = <div className='bg-red-300 h-full w-full'>Premium advertising</div>;
            } else {
              content = 
              
                <PostCard  post={post} />
            }
            return (
              <div key={index} className={` `}>
                {content}
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}

const featured = ({ featured }) => {

    const fPosts = featured
 if (!fPosts || fPosts.length === 0) {
    return null; // Handle the case when categoryPosts is undefined or empty
  }

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1">
      <h1 className="text-3xl font-bold mb-4"> Section</h1>
      {fPosts.map(({ attributes, posts }) => (
        <DynamicSection
          key={`${attributes.fSlug}`}
          Slug={attributes.fSlug}
          Title={attributes.Title}
          Posts={posts}
        />
      ))}
    </div>
  );
};

export default featured;
export async function getStaticProps() {
    
  
    const fetchedfeatured = await getFeaturedPosts();
  
    const featured = await Promise.all(
      fetchedfeatured.map(async (category) => {
        const fSlug = category.attributes.fSlug;
        const fPosts = await GetfuturedPost(fSlug);
  
        return {
          attributes: category.attributes,
          posts: fPosts,
        };
      })
    );
    
  
  
    
    return {
      props: {
        featured,
      },
      revalidate:100
    };
  }
  