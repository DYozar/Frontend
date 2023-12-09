// pages/resources.js

import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>

      <p className="text-gray-700">
        Welcome to the Insight Medium Resources page. Here, you'll find a curated list of valuable resources related to business, finance, startups, marketing, and more. Explore these links to enhance your knowledge and stay informed.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">1. Business Insights:</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li><a href="https://hbr.org/" className="text-blue-500 hover:underline">Harvard Business Review</a></li>
        <li><a href="https://www.forbes.com/business/" className="text-blue-500 hover:underline">Forbes Business</a></li>
        {/* Add more links as needed */}
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">2. Finance Resources:</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li><a href="https://www.investopedia.com/" className="text-blue-500 hover:underline">Investopedia</a></li>
        <li><a href="https://www.fool.com/" className="text-blue-500 hover:underline">The Motley Fool</a></li>
        {/* Add more links as needed */}
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">3. Startups and Entrepreneurship:</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li><a href="https://techcrunch.com/startups/" className="text-blue-500 hover:underline">TechCrunch Startups</a></li>
        <li><a href="https://www.entrepreneur.com/" className="text-blue-500 hover:underline">Entrepreneur.com</a></li>
        {/* Add more links as needed */}
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">4. Marketing and Strategy:</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li><a href="https://www.marketingprofs.com/" className="text-blue-500 hover:underline">MarketingProfs</a></li>
        <li><a href="https://blog.hubspot.com/marketing" className="text-blue-500 hover:underline">HubSpot Blog</a></li>
        {/* Add more links as needed */}
      </ul>

      <p className="text-gray-700 mt-8">
        This list is continually updated to provide you with the best and latest resources. If you have suggestions for additional resources, feel free to <a href="mailto:contact@insightmedium.blog" className="text-blue-500 hover:underline">contact us</a>.
      </p>

      <p className="text-gray-700 mt-4">
        Thank you for using Insight Medium as your source for valuable insights and resources.
      </p>
    </div>
  );
};

export default ResourcesPage;
