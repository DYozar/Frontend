import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({ post }) {
  
    return (
      <div className=' w-full  h-full shadow-md   overflow-hidden' >
          
          
          
          <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 '>
            {post.Media.data.map((media, index) => (
              <div key={index} className='cursor-pointer'>
                <Link href={`/Article/${post.slug}`} className='group '>
                  <Image
                    src={`${media.attributes.url}`}
                    width={1000}
                    height={1000}
                    alt='Picture of the author'
                    className='h-full w-full object-cover object-center group-hover:opacity-75'
                    priority= {true}
                    as="image"
                  />
                </Link>
              </div>
            ))}
          </div>
        <div className='p-4'>
          <h2 className='text-[15px] md:text-[18px] font-semibold  text-gray-800 hover:underline underline-offset-8'>
            <Link href={`/Article/${post.slug}`}>
              {post.Title}
            </Link>
          </h2>
          <p className='text-[10px] md:text-[13px] text-gray-600 font-light mt-2 '>{post.Highlight}</p>
        </div>
      </div>
    );
  }

