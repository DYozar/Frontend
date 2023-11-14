import { getLatestPosts, GetCategoriesPost, GetCategories, getTrendingPosts, getFeaturedPosts, GetFeaturedPosts, GetfuturedPost } from "@/GraphQL/queries";
import CategorySection from "@/component/Sections/Categorie'sSection";
import Latest from "@/component/Sections/latest/index";
import Featured from "@/component/Sections/Featured";
import TrendingPosts from "@/component/Sections/TrendStories";
import Knowledge from "@/component/Sections/Courses";
import { GetModulePosts } from "@/GraphQL/eduData";

export default function Home({ categories, trending, limitedPosts ,featured ,fetchCourses }) {
  // Use useMemo to memoize the component rendering logic
    return (
      <div className="">
        <main className="">
          
          <section className=" xl:flex space-x-10  w-[95%] mx-auto ">
            <div className="order-1 xl:w-10/12 mx-auto ">
              <div >
                <Latest latestData={limitedPosts} /> {/***/}
              </div>
            </div>
            <div className=" sm:py-24 order-2 xl:w-2/12">
              <div className=" mx-auto">
                <TrendingPosts posts={trending} /> {/** */}
              </div>
              <div className="  mx-auto ">
                <div className="sticky top-6">
                <Featured fPosts={featured} />{/** */}
                </div>
              </div>
            </div>
            
          </section>
          <section>
          <Knowledge Posts ={fetchCourses}/>
          
          </section>
          <section className="">
            <CategorySection categoryPosts={categories} /> {/***/}
          </section>
        </main>
      </div>
    );
  
}

export async function  getServerSideProps({res ,req}) {
  // Set Cache-Control headers
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=10'
  )
  // Fetch data from your GraphQL or API endpoints
  const limitedPosts = await getLatestPosts();
  const trending = await getTrendingPosts();

  const fetchedCategories = await GetCategories();

  const categories = await Promise.all(
    fetchedCategories.map(async (category) => {
      const categorySlug = category.attributes.CategorySlug;
      const categoryPosts = await GetCategoriesPost(categorySlug);

      return {
        attributes: category.attributes,
        posts: categoryPosts,
      };
    })
  );

  const fetchedfeatured = await getFeaturedPosts();

  const featured = fetchedfeatured.map( (category) => {
      const fSlug = category.attributes.fSlug;
      const Title = category.attributes.Title;
      const articles = category.attributes.articles.data.map((article)=>(
        {
          Title:article.attributes.Title,
          slug:article.attributes.slug,
        
        }
      ))

      return {
        attributes: category.attributes,
        posts: {fSlug , Title ,articles},
      };
    }
  );
  const fetchCourses = await GetModulePosts()

  
  return {
    props: {
      limitedPosts,
      categories,
      trending,
      featured,
      fetchCourses
    },
  };
}
