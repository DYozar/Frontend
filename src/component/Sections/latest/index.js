import React from 'react';
import PostCard from '@/component/Postcard/postcard';
import Link from 'next/link';

export default function LatestPosts({ latestData }) {
  const postsWithImages = latestData.filter(
    (post) => post.attributes.Media.data.length > 0
  );

  const postsWithoutImages = latestData.filter(
    (post) => post.attributes.Media.data.length === 0
  );
    ////<PostCard key={post.id} post={post.attributes} />
  return (
    <div className="mx-auto py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      
        <ul className='grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-4 xl:grid-cols-6 xl:gap-x-8'>
          
          {latestData.map((post ,index) => {
            let content;
            if (index === 3) {
              content = <div className='bg-red-300 h-full w-full'>Premium advertising</div>;
            } else {
              content = 
              
                <PostCard  post={post.attributes} />
            }
            return (
              <div key={index} className={`  ${index === 0 ? 'xl:col-span-4 lg:col-span-4 md:col-span-3' : index === 1 ? 'xl:col-span-2  lg:col-span-2'  : index === 2 ? 'xl:col-span-2 lg:col-span-2': index > 4 ? 'xl:col-span-2 lg:col-span-2' : 'xl:col-span-2 lg:col-span-2'}`}>
                {content}
              </div>
            )
          })}
        </ul>
        
      
    </div>
  );
}
