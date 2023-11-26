import React from 'react';
import PostCard from '@/component/Postcard/postcard';
import Link from 'next/link';

export default function TrendingPosts({ posts }) {
  const postsWithImages = posts.filter(
    (post) => post.attributes.Media.data.length > 0
  );

  const postsWithoutImages = posts.filter(
    (post) => post.attributes.Media.data.length === 0
  );

  return (
    <div className="">
      <div className="">
        {posts.length === 0 ?null : <h2 className="text-[26px]  text-gray-800 font-bold">Trending Posts</h2>}
        <ul className='list-decimal   ml-4 min-w-[240px] '>
          {posts.map((post) => (
            <li className='text-gray-700 hover:underline underline-offset-4 border-0 border-dashed border-t-[1px] border-gray-400 py-[15px]' key={post.id}>
              <Link href={`/Article/${post.attributes.slug}`} className=''>
                <h1 className=' py-1 text-[16px] '>
                  {post.attributes.Title}
                </h1>
                
              </Link>
            </li>
          ))}
        </ul>
        
      </div>
      
    </div>
  );
}
