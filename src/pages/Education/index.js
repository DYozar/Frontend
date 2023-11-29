import { GetModulePosts } from '../../GraphQL/eduData';
import React, { useRef, useState } from 'react';
import { FaCaretRight } from "@react-icons/all-files/fa/FaCaretRight";
// Import Swiper React components

import Image from 'next/image';
import Link from 'next/link';
import useCarousel from '@/component/Hooks/useCarousel';

const index = ({posts}) => {
  
  if(!posts || posts.Length ===0){
    // Subcategory not found, you can render a "Not Found" page here
  return (<h1>Not Found </h1>)
}


  return (
    <div >
      {posts.map((post , index)=>(
        <div key={index} className='w-[95%]  mx-auto space-y-3 my-6  ' >
          
          <Link  href={`Education/${post.MoSlug}`} className='flex  space-x-[3px]' >
            <h1 className='hover:underline underline-offset-4'>{post.Title}</h1>
            <FaCaretRight className='text-[18px] font my-auto'/>
          </Link>

          <div key={index} className='grid grid-cols-4 gap-4 select-none overflow-auto barscroll  '  >
            {post.contents.map((content , index)=>(
              <div key={index}  className="lg:min-w-[25%]  rounded-lg md:min-w-[50%] max-sm:min-w-[75%]  h-[200px] shadow-md my-6 " >
                <div>
                  {content.Media.map((media ,index)=>(
                    <Image key={index} src={`${media.attributes.url}`} width={500} height={500} className='rounded-t-lg'/>
                  ))}
                </div>             
                <h1 className='ml-[15px] mt-[12px] hover:underline underline-offset-4'>
                  <Link href={`/Education/Content/[Slug]`} as={`/Education/Content/${content.Slug}`}>{content.Title}</Link>
                </h1>
              </div>
            ))}
          </div>

        </div>
      ))
      }
    </div>
  )
}

export default index
export async function getServerSideProps() {

    
    try {
      // Fetch subcategory posts by CategorySlug and sSlug
      const posts = await GetModulePosts();
  
      if (!posts || posts.length === 0) {
        return {
          props: {
            error: { message: ' doesn\'t have any post' },
          },
        };
      }
  
      return {
        props: { posts }
      };
    } catch (error) {
      console.error('Error fetching  posts:', error.message); // Log the error message
      return {
        props: {
          error: { message: 'An error occurred while fetching data.' },
        },
      };
    }
  }