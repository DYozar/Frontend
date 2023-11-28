import { getServerSideSitemapLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import {getPosts,GetCategories,GetSubCategories} from '@/GraphQL/queries'

export  const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const posts = await getPosts()
  const Categories = await GetCategories()
  const subCategories = await GetSubCategories()
  const url ='https://insightmedium.blog'
  
  const post = posts.map( p  =>({
    loc: `${url}/Article/${p.attributes.slug}`, // Absolute url
    lastmod: new Date().toISOString(),
  }))
  const Category = Categories.map( c  =>({
    loc: `${url}/${c.attributes.CategorySlug}`, // Absolute url
    lastmod: new Date().toISOString(),
  }))
  const subCategory = subCategories.map( s  =>({
    loc: `${url}/${s.sSlug}`, // Absolute url
    lastmod: new Date().toISOString(),
  }))

  const fields = [
    
    {
      loc: `${url}`, // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    ...Category,
    ...subCategory,
    ...post
  ]

  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function Sitemap() {}