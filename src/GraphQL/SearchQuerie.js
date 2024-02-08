import { request, gql } from 'graphql-request';

const GRAPHQL_ENDPOINT = 'https://localhost/graphql'

export const PostsLength = async () => {
  const LENGTH = gql`
   query {
      articles{
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
    const result = await request(GRAPHQL_ENDPOINT, LENGTH);
    return result.articles.meta.pagination.total;
  } catch (error) {
    console.error('Error fetching post length:', error);
    return 0; // Return a default value, adjust as needed
  }
};

export const searchingPosts = async () => {
  const totalArticles = await PostsLength();

  const SEARCHING = gql`
    query {
      articles(pagination: { pageSize: ${totalArticles} }) {
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
    const result = await request(GRAPHQL_ENDPOINT, SEARCHING);
    return result.articles.data ;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
