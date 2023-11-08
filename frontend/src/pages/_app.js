import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '@/component/Layout/layout';
import '../styles/Tailwind.css'
import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Insert the Google Tag Manager code here */}
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L8H31NEQ94"></script>
        <script
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
        <meta name="p:domain_verify" content="71defa7e69311be4efaec119b7778f92"/>
        
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
