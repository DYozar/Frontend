// pages/contact.js

import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="text-gray-700">
        We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello, feel free to reach out to us.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Email:</h2>
      <p className="text-gray-700">
        General inquiries: <a href="mailto:info@insightmedium.blog" className="text-blue-500 hover:underline">info@insightmedium.blog</a>
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Social Media:</h2>
      <p className="text-gray-700">
        Connect with us on social media for the latest updates and discussions:
      </p>
      <ul className="list-disc ml-6 text-gray-700">
        <li><a href="https://twitter.com/InsightMediumX" className="text-blue-500 hover:underline">X</a></li>
        <li><a href="https://www.pinterest.it/InsightMediumblog/" className="text-blue-500 hover:underline">Pinterest</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=61553557612666" className="text-blue-500 hover:underline">Facebook</a></li>
        <li><a href="https://www.instagram.com/insightmediumofficial/" className="text-blue-500 hover:underline">Instagram</a></li>
        <li><a href="https://insightmedium.quora.com/" className="text-blue-500 hover:underline">Quora</a></li>
        <li><a href="https://www.reddit.com/user/InsiightMedium/" className="text-blue-500 hover:underline">Reddit</a></li>
        {/* Add more links as needed */}
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">Write to Us On:</h2>
      <p className="text-gray-700">
        Insight Medium<br />
        
      </p>
      <ul>
      <li><a href="https://www.facebook.com/profile.php?id=61553557612666" className="text-blue-500 hover:underline">Facebook</a></li>
        <li><a href="https://www.instagram.com/insightmediumofficial/" className="text-blue-500 hover:underline">Instagram</a></li>
        <a href="mailto:contact@insightmedium.blog" className="text-blue-500 hover:underline">contact@insightmedium.blog</a>
      </ul>
      <p className="text-gray-700 mt-8">
        We appreciate your feedback and engagement. Our team will do their best to respond to your inquiries as soon as possible.
      </p>

      <p className="text-gray-700 mt-4">
        Thank you for being a valued member of the Insight Medium community.
      </p>
    </div>
  );
};

export default ContactPage;
