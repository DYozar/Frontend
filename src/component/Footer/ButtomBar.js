import React, { useEffect, useState } from 'react';
import {
  AboutUs,
  CategoryDirectory,
  ContactUs,
  ContentGuide,
  FeedBack,
  Resources,
  Sitemap,
  TermsOfService,
  PrivacyPolicy
} from '@/GraphQL/StaticQueries';
import Link from 'next/link';
import Social from '../Sections/SocialMedia';

const BottomBar = (props) => {
  // Define categories as a state variable
  const [categories, setCategories] = useState([]); // Initialize to an empty array
  const staticPages = [
    AboutUs,
    CategoryDirectory,
    ContactUs,
    ContentGuide,
    FeedBack,
    Resources,
    Sitemap,
    TermsOfService,
    PrivacyPolicy
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const staticPageData = await Promise.all(staticPages.map(page => page()));
        setCategories(staticPageData);
      } catch (error) {
        console.error('Error fetching categories nav:', error);
      }
    };
    fetchData();
  }, []);
  const handleLinkClick = (closeMobileMenu) => {
    try {
      if (closeMobileMenu && typeof closeMobileMenu === 'function') {
        closeMobileMenu();
      }
    } catch (error) {
      // Handle the error (e.g., log it, show an error message, etc.)
      console.error('Error while closing mobile menu:', error);
      // Optionally, you can provide fallback behavior here
    }
  };
  

  // Render categories, checking if attributes exist
  return (
    <>
      <div className=' text-[12px] grid  grid-cols-1 sm:grid-cols-3 justify-items-start  lg:flex mx-4  mt-3 justify-center '>
        {categories.map((category, index) => (
          <div key={index}>
            {category.attributes && category.attributes.Title ? (
              <Link href="/Info/[Slug]" as={`/Info/${category.attributes.Slug}`} onClick={ () => handleLinkClick(props.closeMobileMenu)}><h1 className='hover:text-gray-700 hover:underline mx-2 underline-offset-2 '>{category.attributes.Title}</h1> </Link>
            ) : (
              <h1>No Title Available</h1>
            )}
          </div>
        ))}
      </div>    
      <Social/>
    </>
    
  );
};

export default BottomBar;
