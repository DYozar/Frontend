// components/ShareButton.js
import React from 'react';

const ShareButton = ({ articleUrl, articleTitle }) => {
  const handleShare = (platform) => {
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(articleTitle)}&url=${encodeURIComponent(articleUrl)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`, '_blank');
        break;
      // Add more cases for other social media platforms as needed
      default:
        break;
    }
  };

  return (
    <div className="share-button-container">
      <button onClick={() => handleShare('twitter')} className="twitter-share-button">
        Share on Twitter
      </button>
      <button onClick={() => handleShare('facebook')} className="facebook-share-button">
        Share on Facebook
      </button>
      {/* Add more buttons for other social media platforms as needed */}
    </div>
  );
};

export default ShareButton;
