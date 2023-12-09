
// pages/cookies.js

import React from 'react';

const CookiesPolicy = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>

      <p className="text-gray-700">
        Thank you for visiting insightmedium.blog. This Cookies Policy explains how we use cookies on our website.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">1. What Are Cookies:</h2>
      <p className="text-gray-700">
        Cookies are small text files that are stored on your device (computer or mobile device) when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">2. How We Use Cookies:</h2>
      <p className="text-gray-700">
        We use cookies for various purposes, including but not limited to analyzing website traffic, improving your browsing experience, and understanding how you interact with our website.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">3. Types of Cookies We Use:</h2>
      <p className="text-gray-700">
        <strong>Session Cookies:</strong> These are temporary cookies that are erased when you close your browser. They are used to ensure proper functionality during your visit.
      </p>
      <p className="text-gray-700">
        <strong>Persistent Cookies:</strong> These cookies remain on your device for a set period and are used for purposes such as recognizing you when you return to our website.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">4. Controlling Cookies:</h2>
      <p className="text-gray-700">
        You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer, and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site, and some services and functionalities may not work.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">5. Contact Us:</h2>
      <p className="text-gray-700">
        If you have any questions or concerns about our Cookies Policy, please contact us at <a href="mailto:contact@insightmedium.blog" className="text-blue-500">contact@insightmedium.blog</a>.
      </p>

      <p className="text-gray-700 mt-8">
        By using insightmedium.blog, you signify your understanding and acceptance of this Cookies Policy. If you do not agree to this policy, please do not use our website.
      </p>

      <p className="text-gray-700 mt-4">
        Thank you for your understanding.
      </p>
    </div>
  );
};

export default CookiesPolicy;
