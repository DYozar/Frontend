//queries

import { request, gql } from 'graphql-request';

const GRAPHQL_ENDPOINT = 'http://34.171.35.102/graphql';

export const getPosts = async () => {
  const GET_ALL_SLUGS = gql`
    query {
      articles {
        data {
          attributes {
            Title
            slug
            Content
            Views
          }
        }
      }
    }
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, GET_ALL_SLUGS);
    return result.articles.data;
    
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const GetCategories = async () => {
  const GET_ALL_CATEGORIES = gql`
    query{
      categories(pagination: { pageSize:200}){
        data {
          id
          attributes {
            Title
            CategorySlug
            sub_categories  (pagination: { pageSize:20}){
              data {
                attributes {
                  Title
                  sSlug
                }
              }
            }
            articles {
              data {
                id
                attributes {
                  Title
                  slug
                  Views
                  Media {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
        meta{
          pagination{
            page
            pageSize
            pageCount
            total
          }
        }
      }
    }
  
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, GET_ALL_CATEGORIES);
    return result.categories.data;
  } catch (error) {
    console.error('Error fetching categories cat:', error);
    return [];
  }
  
};

export const GetSubCategories = async () => {
  const GET_ALL_CATEGORIES = gql`
  query {
    subCategories {
      data {
        attributes {
          Title
          sSlug
          category {
            data {
              attributes {
                Title
                CategorySlug
              }
            }
          }
        }
      }
    }
  }
  
  
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, GET_ALL_CATEGORIES);
    const posts = result.subCategories.data.map((subCategory) => {
      const category = subCategory.attributes.category?.data[0]?.attributes || {};
      return {
        Title: subCategory.attributes.Title,
        sSlug: subCategory.attributes.sSlug,
        category: {
          Title: category.Title,
          CategorySlug: category.CategorySlug,
        },
      };
    });
    return posts;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const GetCategoriesPosts = async (categorySlug , pageSize) => {
  const GET_ALL_CATEGORIES_POSTS = gql`
    query GetCategoriesPosts($CategorySlug: String! , $pageSize: Int!) {
      articles(filters: { categories: { CategorySlug: { eq: $CategorySlug } } } , pagination: { pageSize: $pageSize } sort: ["createdAt:desc"]
      ) {
        data {
          attributes {
            Title
            slug
            Highlight
            Media {
              data {
                id
                attributes {
                  url
                  name
                }
              }
            }
            categories {
              data {
                attributes {
                  Title
                  CategorySlug
                }
              }
            }
            sub_categories {
              data {
                attributes {
                  Title
                  sSlug
                }
              }
            }
          }
        }
        meta{
          pagination{
            page
            pageSize
            pageCount
            total
          }
        }
      }
    }
  `;

  try {
    const result = await request(GRAPHQL_ENDPOINT, GET_ALL_CATEGORIES_POSTS, { CategorySlug :categorySlug  ,pageSize :pageSize});
    
    
    const page = result.articles.meta.pagination;
      

    const posts = result.articles.data.map((article) => ({
      pageSize: page.pageSize,
      page: page.page,
      pageCount : page.pageCount,
      total : page.total,
      Title: article.attributes.Title,
      slug: article.attributes.slug,
      Media: article.attributes.Media,
      Highlight :article.attributes.Highlight,
      sub_categories :article.attributes.sub_categories.data,
      
      categories: article.attributes.categories.data.map((category) => ({
        Title: category.attributes.Title,
        CategorySlug: category.attributes.CategorySlug,
      })),
    }));
    console.log(posts.length)
    return posts;

  } catch (error) {
    console.error('Error fetching category posts:', error);
    return [];
  }
};


// Modify the GraphQL query
export const GetSubCategoriesPosts = async (sSlug, CategorySlug , pageSize) => {
  const GET_ALL_SUBCATEGORIES_POSTS = gql`
    query GetSubCategoriesPosts($sSlug: String!, $CategorySlug: String! , $pageSize: Int!) {
      articles(
        filters: {
          sub_categories: { sSlug: { eq: $sSlug } }
          categories: { CategorySlug: { eq: $CategorySlug } }
          
        }
        sort: ["createdAt:desc"]
        pagination: { pageSize: $pageSize }
      ) {
        data {
          id
          attributes {
            Title
            slug
            Highlight
            Media {
              data {
                id
                attributes {
                  url
                  name
                }
              }
            }
            categories {
              data {
                attributes {
                  Title
                  CategorySlug
                }
              }
            }
            sub_categories {
              data {
                attributes {
                  Title
                  sSlug
                }
              }
            }
          }
        }
        meta{
          pagination{
            page
            pageSize
            pageCount
            total
          }
        }
      }
    }
  `;

  try {
    const result = await request(GRAPHQL_ENDPOINT, GET_ALL_SUBCATEGORIES_POSTS, {
      sSlug: sSlug,
      CategorySlug: CategorySlug,
      pageSize:pageSize
    });

    const page = result.articles.meta.pagination;

    const posts = result.articles.data.map((article) => ({
      id:article.id,
      pageSize: page.pageSize,
      page: page.page,
      pageCount : page.pageCount,
      total : page.total,

      Title: article.attributes.Title,
      slug: article.attributes.slug,
      Media: article.attributes.Media,
      Highlight: article.attributes.Highlight,

      sub_categories: article.attributes.sub_categories.data.map((category) => ({
        Title: category.attributes.Title,
        sSlug: category.attributes.sSlug,
      })),

      categories: article.attributes.categories.data.map((category) => ({
        Title: category.attributes.Title,
        CategorySlug: category.attributes.CategorySlug,
      })),
    }));
    return posts;
  } catch (error) {
    console.error('Error fetching subcategory posts:', error);
    return [];
  }
};


export const GetCategoriesPost = async (categorySlug) => {
  const GET_ALL_CATEGORIES_POSTS = gql`
    query GetCategoriesPosts($CategorySlug: String!) {
      articles(filters: { categories: { CategorySlug: { eq: $CategorySlug } } } ) {
        data {
          id
          attributes {
            Title
            slug
            Highlight

            Media {
              data {
                id
                attributes {
                  url
                  name
                }
              }
            }
            categories {
              data {
                attributes {
                  Title
                  CategorySlug
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(GRAPHQL_ENDPOINT, GET_ALL_CATEGORIES_POSTS, {
      CategorySlug :categorySlug,
    });

    const posts = result.articles.data
      .map((article) => ({
        id: article.id ,
        Title: article.attributes.Title,
        slug: article.attributes.slug,
        Media : article.attributes.Media,
        Highlight :article.attributes.Highlight,

        categories: article.attributes.categories.data.map((category) => ({
          Title: category.attributes.Title,
          CategorySlug: category.attributes.CategorySlug,
        })),
      }))
      .slice(0, 10); // Limit to 5 posts

    return posts;
  } catch (error) {
    console.error('Error fetching category posts:', error);
    return [];
  }
};

export const getLatestPosts = async () => {
  const Lastest = gql`
  query {
    articles(sort: ["createdAt:desc"] pagination: { pageSize: 20 } ) {
      data{
        id
        attributes{
          Title
          slug
          Content
          createdAt
          Highlight
          Views
          Media {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
  `;

  try {
    const response = await request(GRAPHQL_ENDPOINT, Lastest);
    const articles = response.articles.data;
    const limitedPosts = articles.slice(0,11);

    return limitedPosts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getPostsDetail = async (slug) => {
  const GET_ALL_POSTS_DETAILS = gql`
  query GetCategoriesPosts($slug: String!) {
    articles(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          Title
          slug
          Content
          Highlight
          Views
          Media {
            data {
              id
              attributes {
                url
                name
              }
            }
          }
          categories {
            data {
              attributes {
                Title
                CategorySlug
              }
            }
          }
          sub_categories {
            data {
              attributes {
                Title
                sSlug
              }
            }
          }
        }
      }
    }
  }
`;


  try {
    const result = await request(GRAPHQL_ENDPOINT, GET_ALL_POSTS_DETAILS, { slug: slug });

    const posts = result.articles.data.map((article) => ({
      id : article.id,
      Title: article.attributes.Title,
      slug: article.attributes.slug,
      Content: article.attributes.Content,
      Highlight :article.attributes.Highlight,
      Views: article.attributes.Views,
      Media : article.attributes.Media.data.map((media)=>({
        url: media.attributes.url,
        name: media.attributes.name,
      })),
      categories: article.attributes.categories.data.map((category) => ({
        Title: category.attributes.Title,
        CategorySlug: category.attributes.CategorySlug,
      })),
      sub_categories: article.attributes.sub_categories.data.map((scategory) => ({
        Title: scategory.attributes.Title,
        sSlug: scategory.attributes.sSlug,
      })),
    }));

    return posts;
  } catch (error) {
    console.error('Error fetching category posts:', error);
    return [];
  }
};

export const getRelatedPosts = async (categorySlugs, currentPostSlug) => {
  const GET_RELATED_POSTS = gql`
    query GetRelatedPosts($categorySlugs: [String!]!, $currentPostSlug: String!) {
      articles(
        filters: {
          categories: { CategorySlug: { in: $categorySlugs } } 
          slug: { not: { eq: $currentPostSlug } }
        }
      ) {
        data {
          id
          attributes {
            Title
            slug
            Highlight
            Media {
              data {
                id
                attributes {
                  url
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const relatedResult = await request(GRAPHQL_ENDPOINT, GET_RELATED_POSTS, {
      categorySlugs,
      currentPostSlug,
    });

    const posts = relatedResult.articles.data.map((article) => ({
      id: article.id,
      Title: article.attributes.Title,
      Media:article.attributes.Media ,
      slug: article.attributes.slug,
    }));
    const relatedPosts = posts.slice(0 , 8)
    return relatedPosts;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
};

export const getTrendingPosts = async () => {
  const Trending = gql`
  query {
    articles(sort: ["Views:desc"]) {
      data{
        id
        attributes{
          Title
          slug
          Content
          Views
          Highlight
          Media {
            data {
              id
              attributes {
                url
                name
              }
            }
          }
        }
      }
    }
  }
  `;

  try {
    const response = await request(GRAPHQL_ENDPOINT, Trending);
    const articles = response.articles.data;
    const limitedPosts = articles.slice(0, 10);
    return limitedPosts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

export const getFeaturedPosts = async ()=>{
const Featured = gql`
query{
  featuredcategories(sort: ["createdAt:desc"]){
    data{
      attributes{
        Title
        fSlug
        articles{
          data{
            attributes{
              Title
              slug
            }
          }
        }
      }
    }
  }
}

`;
try{
  const response = await request (GRAPHQL_ENDPOINT, Featured )
  const categories = response.featuredcategories.data
  return categories

}catch(error){
  console.error('Error fetching posts:', error);
  return [];
}

};
export const GetFeaturedPosts = async (FSlug , maxLength) => {
  const GET_ALL_CATEGORIES_POSTS = gql`
  query GetCategoriesPosts($fSlug: String!, $pageSize: Int!) {
    articles(
      filters: { featured_categories: { fSlug: { eq: $fSlug } } }
      pagination: { pageSize: $pageSize }
      sort: ["createdAt:desc"]
    ) {
      data {
        attributes {
          Title
          slug
          Highlight
          Media {
            data {
              id
              attributes {
                url
                name
              }
            }
          }
          featured_categories {
            data {
              attributes {
                Title
                fSlug
              }
            }
          }
        }
      }
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
  
  `;

  try {
    const result = await request(GRAPHQL_ENDPOINT, GET_ALL_CATEGORIES_POSTS, {
      fSlug:FSlug,
      pageSize:maxLength
    });
        
    
    const page = result.articles.meta.pagination;
      

    const posts = result.articles.data.map((article) => ({
      pageSize: page.pageSize,
      page: page.page,
      pageCount : page.pageCount,
      total : page.total,
      Title: article.attributes.Title,
      slug: article.attributes.slug,
      Media : article.attributes.Media,
      Highlight :article.attributes.Highlight,

      featured_categories: article.attributes.featured_categories.data.map((category) => ({
        Title: category.attributes.Title,
        fSlug: category.attributes.fSlug,
      })),
    }));
    console.log(posts.length)
    return posts;

  } catch (error) {
    console.error('Error fetching category posts:', error);
    return [];
  }
};

export const GetfuturedPost = async (fSlug) => {
  const GET_ALL_CATEGORIES_POSTS = gql`
    query GetCategoriesPosts($fSlug: String!) {
      articles(filters: { featured_categories: { fSlug: { eq: $fSlug } } } ) {
        data {
          id
          attributes {
            Title
            slug
            Highlight

            Media {
              data {
                id
                attributes {
                  url
                  name
                }
              }
            }
            featured_categories {
              data {
                attributes {
                  Title
                  fSlug
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const result = await request(GRAPHQL_ENDPOINT, GET_ALL_CATEGORIES_POSTS, {
      fSlug: fSlug,
    });
    
    const posts = result.articles.data
      .map((article) => ({
        id: article.id ,
        Title: article.attributes.Title,
        slug: article.attributes.slug,
        Media : article.attributes.Media,
        Highlight :article.attributes.Highlight,
        featured_categories: article.attributes.featured_categories.data.map((category) => ({
          Title: category.attributes.Title,
          fSlug: category.attributes.fSlug,
        })),
      }))
      .slice(0, 10); // Limit to 5 posts

    return posts;
  } catch (error) {
    console.error('Error fetching category posts:', error);
    return [];
  }
};