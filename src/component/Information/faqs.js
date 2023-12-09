// pages/faq.js

import React from 'react';

const FAQPage = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions (FAQs)</h1>

      <div className="space-y-4">
        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">What is Insight Medium?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Insight Medium is an online platform dedicated to business, finance, startups, marketing, and related topics. We provide a space for insightful content, expert perspectives, and community engagement.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">How can I contribute content?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            To contribute, simply register an account, and you can start submitting your articles. Make sure to follow our content guidelines for the best experience.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Is registration required to access content?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            No, registration is not mandatory. However, registered users can engage in discussions, receive newsletters, and access additional features.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Are there any fees for using Insight Medium?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            No, Insight Medium is a free platform for users. There are no subscription fees or charges for accessing content.
          </p>
        </details>

        {/* Add more FAQ items similarly */}
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">How is content moderated</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
          Our content goes through a moderation process to ensure it adheres to our guidelines. We aim to maintain a positive and informative environment.

          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Can I promote my business on Insight Medium?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
          While we encourage expertise sharing, overtly promotional content is discouraged. Any promotional material should be relevant and add value.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">What topics are covered on Insight Medium?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
          We cover a wide range of topics including financial markets, personal finance, business news, investment, startups, real estate, banking, cryptocurrency, and more.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Can I share articles on social media?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
          Absolutely! We encourage sharing insights. Each article has social media sharing options to spread valuable content.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Can I suggest topics for contributors?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
          Yes, we welcome topic suggestions. Feel free to reach out through our contact 
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Are there any fees for using Insight Medium?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            No, Insight Medium is a free platform for users. There are no subscription fees or charges for accessing content.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">What distinguishes Insight Medium from other platforms?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
          Insight Medium focuses on providing high-quality, insightful content within the realms of business, finance, and related industries.

          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Do you offer advertising opportunities?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
          For inquiries about advertising, partnerships, or collaborations, please contact our business development team  <a href="mailto:info@insightmedium.blog" className="text-blue-500 hover:underline">info@insightmedium.blog</a>
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">Are there community guidelines?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
          Yes, we have content guidelines to ensure a positive and respectful community. Please review them before contributing.
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">How can I contact customer support?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
          Reach out to our support team through the contact on our website for assistance <a href="mailto:contact@insightmedium.blog" className="text-blue-500 hover:underline">contact@insightmedium.blog</a> .
          </p>
        </details>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 className="font-medium">What's the future vision of Insight Medium?</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <p className="mt-4 px-4 leading-relaxed text-gray-700">
          We aim to become a go-to platform for insightful content, foster a vibrant community, and continually expand our coverage in the business and finance landscape.</p>
        </details>

      </div>
    </div>
  );
};

export default FAQPage;
