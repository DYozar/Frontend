import React from 'react';
import styles from '../../styles/Footer.module.css';
import ButtomBar from './ButtomBar';
import Social from '../Sections/SocialMedia/index';
import Link from 'next/link';
const Footer = () => {
  return (
   
<footer className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
   {/* <div className="mx-auto max-w-md">
      <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
        Want us to email you with the latest blockbuster news?
      </strong>

      <form className="mt-6">
        <div className="relative max-w-lg">
          <label className="sr-only" htmlFor="email"> Email </label>
          <input
            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
            id="email"
            type="email"
            placeholder="Contact@Insightmedium.Blog"
          />
          <button
            type="submit"
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Subscribe
          </button>
        </div>
      </form>
  </div>*/}

    <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
      <div className="mx-auto max-w-sm lg:max-w-none">
        <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
        Dive into a world of financial insights with Insight Medium. Empowering decisions through curated articles on business, finance, and markets. Join us, stay informed, and let knowledge guide your success. Welcome to Insight Medium — where understanding meets opportunity.
        </p>

        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
          <Social/>
        </div>








      </div>

      <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
        <div>
          <strong className="font-medium text-gray-900"> Legal </strong>

          <ul className="mt-6 space-y-1">
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="https://insightmedium.blog/legal/privacy"> Privacy & Policy </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="https://insightmedium.blog/legal/termsofservice">
                term of condition
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="https://insightmedium.blog/legal/Disclaimer">
                Disclaimer
              </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="https://insightmedium.blog/legal/cookiespolicy">
                Cookies Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <strong className="font-medium text-gray-900"> About </strong>

          <ul className="mt-6 space-y-1">
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="https://insightmedium.blog/about/aboutus"> About Us </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="https://insightmedium.blog/about/contentguidline"> Content Guidelines </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="https://insightmedium.blog/about/resources"> Resources </a>
            </li>

           

          </ul>
        </div>

        <div>
          <strong className="font-medium text-gray-900"> Support </strong>

          <ul className="mt-6 space-y-1">
            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="https://insightmedium.blog/support/faqs"> FAQs </a>
            </li>

            <li>
              <a className="text-gray-700 transition hover:text-gray-700/75" href="https://insightmedium.blog/support/contact"> Contact </a>
            </li> 
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-100 pt-8">
      <p className="text-center text-xs/relaxed text-gray-500">
        © Company 2022. All rights reserved.

        <br />

        Created with
        <Link href={'/'} className="text-gray-700 underline transition hover:text-gray-700/75"> InsightMedium </Link >       
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
