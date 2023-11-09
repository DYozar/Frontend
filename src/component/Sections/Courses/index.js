import React from 'react';
import useCarousel from '@/component/Hooks/useCarousel';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowLeft , BsArrowRight} from 'react-icons/bs';
const Knowledge = ({ Posts }) => {
 

  const {
    mainDevRef,
    childDivRef,
    RightRef,
    LeftRef,
    isScrollable,
  } = useCarousel();

  return (
    <div className="mx-[5px]">

      {Posts.length === 0 ?null :<Link href={'/Education'} className='text-[32px] text-gray-800 font-bold'>Education</Link>}
      <div>
        
      </div>
      <div
        className="flex flex-nowrap gap-4 select-none overflow-auto  barscroll  "
        ref={mainDevRef}
      >
        {Posts.map((item) => (
          <div key={item} ref={childDivRef} className="lg:min-w-[26%] md:min-w-[55%]  min-w-[75%]  snap-center w-full   shadow-md my-10  rounded-xl   ">
            
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 '> 
              {
                item.Media.map(media=>(
                  <Image draggable={false} width={500} height={500} src={`${media.attributes.url}`} className='h-full w-full object-cover object-center group-hover:opacity-75' />
                ))
              }
            </div>
            <div className='py-4 ml-3'>
              <h1 className='text-[26px] font-semibold text-gray-800 hover:underline underline-offset-4'><Link href={'/Education/[MoSlug]'} as={`/Education/${item.MoSlug}`} className='mt-4 text-sm text-gray-700'>{item.Title}</Link></h1> 
            </div>

          </div>
        ))}
      </div>
      {
        Posts.length < 3 ? null :
        <div className="space-x-3 text-center text-3xl text-gray-50">
          <button ref={LeftRef}  className='bg-gray-900 p-3 rounded-3xl hover:animate-pulse    cursor-pointer transition duration-300  '>
            <BsArrowLeft className=' '/>
          </button>
          <button ref={RightRef} className='bg-gray-900 p-3 rounded-3xl hover:animate-pulse   cursor-pointer transition duration-300 '>
            <BsArrowRight className=''/>
          </button>
          
        </div>

      }
      
    </div>
  );
};

export default Knowledge;
