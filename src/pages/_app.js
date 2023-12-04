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
        <Image src={SiteLogo} width={500} height={500} alt="Insight" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  )
}
