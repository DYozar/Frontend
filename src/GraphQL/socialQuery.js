import { request, gql } from 'graphql-request';
const GRAPHQL_ENDPOINT =  'https://dashboard.insightmedium.blog/graphql';

export const Social = async () => {

  const Social = gql`
  query {
    socials {
      data {
        attributes {
          Title
          Url
        }
      }
    }
  }
  
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, Social);
    const posts = result.socials.data.map((social) => ({
       
        Title: social.attributes.Title,
        Url: social.attributes.Url,
       
      }));



    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};