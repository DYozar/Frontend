import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import SocialShareButtons from "../../component/ShareButton/index"

export default function ArticleDetails({ post  , url}) {
  const firstCategory = post.categories[0]; // Display only the first category
  const firstSubCategory = post.sub_categories[0]; // Display only the first sub-category

  return (
    <div className='h-full w-full md:flex relative'>
       
      <div className="rounded-lg p-8 text-left mx-auto md:w-3/5">
        {/* Categories */}
        <div className=' text-[14px] flex my-2  text-magenta-shade/90 '>
          {firstCategory && (
            <div>
              <h2 className=''>
                <Link href={`/${firstCategory?.CategorySlug}`} className=" hover:underline">
                  {firstCategory.Title}
                </Link>
              </h2>
            </div>
          )}
          {firstSubCategory ? <span className="text-l mx-4"> /</span> : !firstCategory ? <Link href={"/"} className='mx-2'>Go back</Link>:null}
          {/* Sub Categories */}
          {firstSubCategory && (
            <div>
              <h2 className=''>
                <Link  href={`/[CategorySlug]/[sSlug]`} as={`/${firstCategory?.CategorySlug}/${firstSubCategory.sSlug}`} className=" hover:underline">
                  {firstSubCategory.Title}
                </Link>
              </h2>
            </div>
          )}
        </div>
        {/* Title */}
        <h1 className="text-[17px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[30px] text-gray-700 font-bold mt-3">{post.Title}</h1>

        {/* Media */}
        <div className="my-10">
        <SocialShareButtons url={url} />
          {post.Media.map((media , index) => (
            <div key={index}>
              <Image
                src={`${media.url}`}
                width={1000} /* Set a width that ensures full width */
                height={500} /* Set a proportional height (you can adjust this) */
                alt="Picture of the author"
                className="rounded-lg w-full" /* Add w-full to make it full width */
                priority= {true}
              />
              <h6 className='text-[12px] font-thin text-gray-800 m-2 text-center'>{media.caption}</h6>
              
            </div>
          ))}
          
        </div>

        {/* Highlight */}
        <div className='text-gray-800 w-fit space-y-6 my-14'>
          {post.Highlight && post.Highlight.split('\n').map((highlight, index) => {
                const trimmedHighlight = highlight.trim(); // Remove leading and trailing whitespaces
                if (trimmedHighlight) {
                  return (
                    <div className='inline-flex' key={index}>
                      <span className="bullet" />
                      <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-bold">
                        {trimmedHighlight}
                      </p>
                    </div>
                  );
                }
                return null; // Don't render if only whitespace
          })}
        </div>


        {/* Content */}
        <div className="mb-8">
          <ReactMarkdown className="text-gray-700 text-[13px] md:text-[16px]  markdown text-left  capitalize leading-8 ">
            {post.Content}
          </ReactMarkdown>
        </div>
      </div>

      {/** 
      <div className='md:h-screen md:w-3/12 mx-10 my-16 py-10 sticky top-10 '>
        <p className='m-4  text-justify'>
          Introducing the future of convenience and style! Our cutting-edge products are designed with you in mind, seamlessly blending innovation and elegance to enhance your everyday life. Whether you're looking to upgrade your home, streamline your daily routine, or simply indulge in a touch of luxury, our range has something for everyone. Experience the perfect fusion of form and function as our products elevate your lifestyle. Join the countless satisfied customers who have already discovered the difference. Don't miss out on the opportunity to revolutionize the way you live. Embrace the future – choose us for unparalleled quality and sophistication. Your life, upgraded.
        </p>
      </div>*/}
      <script type="text/javascript"> var infolinks_pid = 3410828; var infolinks_wsid = 0; </script> <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
    </div>
  );
}
