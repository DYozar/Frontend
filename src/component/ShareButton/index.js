// SocialShareButtons.js
import React from 'react';
import { FaXTwitter, FaInstagram, FaMeta, FaLinkedinIn, FaPinterestP, FaWhatsapp, FaFlipboard ,  FaShare, faclose} from 'react-icons/fa6';
import { CgShare , CgClose } from 'react-icons/cg';

import { useState, useEffect, useRef } from "react";

const SocialShareButtons = ({ url }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
   
  }, []);

  const ShareButton = () => {
    setOpen(!open);

  };

  const shareText = 'Check out this awesome content!';

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareOnInstagram = () => {
    window.open(`https://www.instagram.com/insightmediumofficial/`, '_blank');
  };

  const shareOnPinterest = () => {
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(shareText)}`, '_blank');
  };

  const shareOnWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${url}`)}`, '_blank');
  };
const shareOnFlipboard = () => {
    // Open Flipboard website or app where users can manually add your URL to their magazine
    window.open(`https://flipboard.com/edit?url=${encodeURIComponent(url)}`, '_blank');
  };
  return (
    <div  className='text-[30px] flex items-center my-2 '>
      {open ? <button  className=' border-magenta-shade/90 text-magenta-shade/90 border-spacing-3 border-[1px] p-[1px] rounded-full ' onClick={ShareButton}><CgClose /></button> : <button  className='text-magenta-shade/90  border-magenta-shade/90 border-spacing-3 border-[1px] p-[1px]  rounded-full '  onClick={ShareButton}><CgShare/></button>}

      {open ? 
        (
          <div className='text-[26px]  flex justify-start mx-5 space-x-3 w-[50%] '>
            <button onClick={shareOnFacebook}>
              <FaMeta   className=' text-metaColor  hover:transition duration-700 ease-in-out'/> 
            </button>
            <button onClick={shareOnTwitter}>
              <FaXTwitter  className='  hover:transition duration-700 ease-in-out'/> 
            </button>
            <button onClick={shareOnPinterest}>
              <FaPinterestP  className='bg-pincolor  text-white  rounded-full   p-[2px]  hover:transition duration-700 ease-in-out'/>
            </button>
            <button onClick={shareOnLinkedIn}>
              <FaLinkedinIn  className=' bg-blue-600  text-white rounded-sm p-[1px]   hover:transition duration-700 ease-in-out'/>
            </button>
            <button onClick={shareOnWhatsapp}>
              <FaWhatsapp  className='text-WhatsColor    hover:transition duration-700 ease-in-out'/>
            </button>
          </div>
        ) :null
      }


      
    </div>
  );
};

export default SocialShareButtons;
 
 
   
 
   {/**<button onClick={shareOnFlipboard}>
      <FaFlipboard  className='text-pincolor'/> 
      </button>*/}
      {/**<button onClick={shareOnInstagram}>
      <FaInstagram  className='instagram text-white rounded-lg'/> 
      </button>*/}