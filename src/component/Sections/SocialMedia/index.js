import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaXTwitter, FaInstagram, FaMeta, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa6';
import { Social } from '../../../GraphQL/socialQuery';

const Index = () => {
  const [SocialMedia, setSocial] = useState([]); // Initialize to an empty array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const social = await Social();
        setSocial(social);
      } catch (error) {
        console.error('Error fetching social media data:', error);
      }
    };

    fetchData();
  }, []);

  const socialMediaPlatforms = [
    //{/** { title: 'Linkedin', icon: <FaLinkedinIn className='hover:text-slate-300' /> },*/},
   //{/** { title: 'Youtube', icon: <FaYoutube className='hover:text-slate-300' /> },*/},
    { title: 'Pinterest', icon: <FaPinterestP className='hover:text-slate-300' /> },
   
    { title: 'X', icon: <FaXTwitter className='hover:text-slate-300' /> },
    { title: 'Instagram', icon: <FaInstagram className='hover:text-slate-300' /> },
    { title: 'Facebook', icon: <FaMeta className='hover:text-slate-300' /> },
  ];

  const getSocialMediaUrl = (title) => {
    const socialMedia = SocialMedia.find((page) => page.Title === title);
    return socialMedia ? socialMedia.Url : '';
  };

  return (
    <div className='flex justify-center my-2 space-x-3'>
      <div className='flex justify-center mt-1 space-x-3  text-2xl'>
        {  socialMediaPlatforms.map((platform) => (
          <Link key={platform.title} href={getSocialMediaUrl(platform.title)}>
            {platform.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
