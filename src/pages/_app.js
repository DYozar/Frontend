import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../component/Layout/layout';
import '../styles/Tailwind.css'
import Head from 'next/head';
import Script from 'next/script'
import SiteLogo from '../asset/sitelogo.png'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  console.log(SiteLogo)
  return (
    <> 
      {/* Insert the Google Tag Manager code here */}
      {/* Google Tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-L8H31NEQ94"/>
      
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L8H31NEQ94');
          `,
        }}
      /> 
      {/* End Google Tag Manager code */}
      
      <Head>
        <meta name="p:domain_verify" content="71defa7e69311be4efaec119b7778f92"/>
        <meta name="p:domain_verify" content="71defa7e69311be4efaec119b7778f92"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <meta name="description" content="Unlock the world of financial wisdom and business brilliance. Dive into market mastery, global economic stories, and insider insights. Stay empowered with our daily dose of savvy tips and curated stories. Explore the intersection of knowledge and success with our comprehensive media platform."/>
        <title> Navigate Success: Your Gateway to Market Mastery, Business Brilliance, and Global Economic Insights</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6994792846221170"crossorigin="anonymous"></script>
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" Navigate Success: Your Gateway to Market Mastery, Business Brilliance, and Global Economic Insights" />
        <meta property="og:description" content="Unlock the world of financial wisdom and business brilliance. Dive into market mastery, global economic stories, and insider insights. Stay empowered with our daily dose of savvy tips and curated stories. Explore the intersection of knowledge and success with our comprehensive media platform." />
        <meta property="og:image" content="src/asset/sitelogo.png" />
        <meta property="og:image:secure_url" content={SiteLogo} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="500"/>
        <meta property="og:image:height" content="500"/>
        <meta property="og:type" content="article" />
        <meta http-equiv="refresh" content="30"></meta>
        <meta name="keywords" content="financial markets, business strategies, global economy, market mastery, business brilliance, financial tips"/>
        <link rel="icon" type="image/x-icon" href="public/favicon.ico"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  )
}
