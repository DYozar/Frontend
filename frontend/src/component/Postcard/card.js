import Image from 'next/image';
import Link from 'next/link';

export default function Card({ post }) {
  
    return (
      <div className=' w-full  h-full shadow-md  rounded-xl overflow-hidden' >
        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 '>
          {post.Media.data.map((media, index) => (
            <div key={index} className='cursor-pointer'>
              <Link href={`/Education/Content/[Slug]`} as={`/Education/Content/${post.Slug}`} className='group'>
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
        <div className=''>
          <h2 className='my-4 ml-3 text-[24px] text-gray-800 hover:underline underline-offset-4'>
          <Link href={`/Education/Content/[Slug]`} as={`/Education/Content/${post.Slug}`} className='group'>
              {post.Title}
            </Link>
          </h2>
          <p className='mt-1 text-lg font-medium text-gray-800 '>{post.Highlight}</p>
        </div>
        
      </div>

    );
  }

