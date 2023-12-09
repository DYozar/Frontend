// pages/terms.js

import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="text-gray-700">
        Thank you for using insightmedium.blog. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">1. Acceptance of Terms:</h2>
      <p className="text-gray-700">
        By accessing or using insightmedium.blog, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">2. Use of the Service:</h2>
      <p className="text-gray-700">
        You agree to use the services provided by insightmedium.blog only for lawful purposes and in accordance with these Terms of Service.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">3. User Contributions:</h2>
      <p className="text-gray-700">
        Users may contribute content to insightmedium.blog. By contributing content, you grant us the right to use, reproduce, modify, and distribute that content.
      </p>

      {/* Add more sections based on your specific Terms of Service. */}

      <h2 className="text-2xl font-bold mt-6 mb-4">4. Changes to the Terms:</h2>
      <p className="text-gray-700">
        We reserve the right to update or modify these Terms of Service at any time without prior notice. Changes are effective when posted, and your continued use of the service after any modifications indicate acceptance of the updated terms.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">5. Termination:</h2>
      <p className="text-gray-700">
        We may terminate or suspend your access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">6. Contact Us:</h2>
      <p className="text-gray-700">
        If you have any questions or concerns about our Terms of Service, please contact us at <a href="mailto:contact@insightmedium.blog" className="text-blue-500">contact@insightmedium.blog</a>.
      </p>

      <p className="text-gray-700 mt-8">
        By using insightmedium.blog, you signify your acceptance of these Terms of Service. If you do not agree to these terms, please do not use our services.
      </p>

      <p className="text-gray-700 mt-4">
        Thank you for your understanding.
      </p>
    </div>
  );
};

export default TermsOfService;
