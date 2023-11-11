import { GetContent, GetModulePosts } from '@/GraphQL/eduData';
import ArticleDetails from '@/component/Article Detail';
import Image from 'next/image';
import React from 'react'

const Slug = ({posts}) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className=' rounded-lg p-8 text-left mx-auto w-3/5 '>
          <div className="my-14">
            {post.Media.map((media) => (
              <div key={media.id}>
                <Image
                  src={`${media.attributes.url}`}
                  width={1000} /* Set a width that ensures full width */
                  height={500} /* Set a proportional height (you can adjust this) */
                  alt="Picture of the author"
                  className="rounded-lg w-full" /* Add w-full to make it full width */
                />
              </div>
            ))}
          </div>
          <h1>{post.Title}</h1>
          <p>{post.text}</p>
        </div>
      ))}    
    </div>
  )
}

export default Slug

export async function getServerSideProps({ params }) {
  const Slug = params.Slug;
  const posts = await GetContent(Slug);


  return {
    props: {
      posts,
    },
  };
}

export async function getServerSidePaths() {
  const posts = await GetModulePosts(); // Assuming this is the correct function to retrieve the posts
 
  const paths = posts.map((post) => ({
    params: { Slug: post.contents.Slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
  