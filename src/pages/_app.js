import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '@/component/Layout/layout';
import '../styles/Tailwind.css'
import Head from 'next/head';
import Script from 'next/script'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <meta name="description" content="they told you money its important for your life i told you they are wrong information equal wealthy"/>
        <title> A brief, clear, informative, and unique Content</title>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6994792846221170"crossorigin="anonymous"></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
