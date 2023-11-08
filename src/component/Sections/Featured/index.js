import React from 'react';
import PostCard from '@/component/Postcard/postcard';
import Link from 'next/link';

function DynamicSection({ fSlug, Title, articles }) {
  return (
    <div>
      <h2 className="text-[22px]  text-gray-800 font-bold">
        <Link href={`/Featured/${fSlug}`}>{Title}</Link>
      </h2>
      <div className="grid xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4">
        {articles.map((post, index) => {
          let content;
          if (index === 3) {
            content = <div className="bg-red-300 h-full w-full">Premium advertising</div>;
          } else {
            content = <Link  href={`/Article/${post.slug}`}  className='hover:underline underline-offset-4 '><h>{post.Title}</h></Link>;
          }
          return <div key={index} className=' text-gray-700  '>{content}</div>;
        }).slice(0,2)
        }
      </div>
    </div>
  );
}

function Featured({ fPosts }) {
  if (!fPosts || fPosts.length === 0) {
    return null; // Handle the case when fPosts is undefined or empty
  }

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1">
      <h1 className="text-[26px]  font-bold mb-4">Featured</h1>
      {fPosts.map(({ attributes, posts }) => (
        <DynamicSection
          key={attributes.fSlug}
          fSlug={attributes.fSlug}
          Title={attributes.Title}
          articles={posts.articles}
        />
      ))}
    </div>
  );
}

export default Featured;
