import React from 'react';
import Link from 'next/link';
import PostCard from '@/component/Postcard/postcard';
import { FaCaretRight } from '@react-icons/all-files/fa/FaCaretRight';

const DynamicSection = ({ categorySlug, categoryTitle, categoryPosts }) => {
  const postsWithImages = categoryPosts.filter(
    (post) => post.Media && post.Media.data.length > 0
  );

  const postsWithoutImages = categoryPosts.filter(
    (post) => !post.Media || post.Media.data.length === 0
  );

  // Check if there are no posts, and if so, do not render the category title
  if (categoryPosts.length === 0) {
    return null;
  }

  return (
    <div className="border-0 border-t-[1px] border-gray-400 py-[15px]">
      <h2 className="text-[26px] text-gray-900 font-bold hover:underline underline-offset-4">
        <Link href={`/${categorySlug}`} className="flex justify-between my-auto">
            {categoryTitle}
            <FaCaretRight className="text-[22px] font my-auto ml-[5px]" />
        </Link>
      </h2>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
          {categoryPosts.map((post, index) => {
            let content;
            if (index === 3) {
              content = <div className="bg-red-300 h-full w-full">Premium advertising</div>;
            } else {
              content = <PostCard post={post} />;
            }
            return (
              <div key={index} className={` ${index === 0 ? 'xl:col-span-3' : index === 1 ? 'xl:col-span-2' : index === 2 ? 'xl:col-span-2' : index === 4 ? 'xl:col-span-2' : 'xl:col-span-1'}  `}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ categoryPosts }) => {
  if (!categoryPosts || categoryPosts.length === 0) {
    return null; // Handle the case when categoryPosts is undefined or empty
  }

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1">
      {categoryPosts.map(({ attributes, posts }) => (
        <DynamicSection
          key={`${attributes.CategorySlug}`}
          categorySlug={attributes.CategorySlug}
          categoryTitle={attributes.Title}
          categoryPosts={posts}
        />
      ))}
    </div>
  );
};

export default CategorySection;
