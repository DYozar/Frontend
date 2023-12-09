// pages/disclaimer.js

import React from 'react';

const Disclaimer = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

      <p className="text-gray-700">
        Thank you for visiting insightmedium.blog. The information contained on this website is for general informational purposes only. The information is provided by insight Medium and while we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
      </p>

      <p className="text-gray-700 mt-4">
        Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
      </p>

      <p className="text-gray-700 mt-4">
        Through this website, you can link to other websites that are not under the control of insight Medium. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
      </p>

      <p className="text-gray-700 mt-4">
        Every effort is made to keep the website up and running smoothly. However, insight Medium takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Contact Us:</h2>
      <p className="text-gray-700">
        If you have any questions or concerns about our Disclaimer, please contact us at <a href="mailto:contact@insightmedium.blog" className="text-blue-500">contact@insightmedium.blog</a>.
      </p>

      <p className="text-gray-700 mt-8">
        By using insightmedium.blog, you signify your understanding and acceptance of this Disclaimer. If you do not agree to this disclaimer, please do not use our website.
      </p>

      <p className="text-gray-700 mt-4">
        Thank you for your understanding.
      </p>
    </div>
  );
};

export default Disclaimer;
