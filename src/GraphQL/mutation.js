import { request, gql } from 'graphql-request';

export const updateArticleViews = async (id, Views) => {
  const UPDATE_Views = gql`
  mutation updateArticle($id: ID!, $Views: Int!) {
    updateArticle(id: $id, data: { Views: $Views }) {
      data {
        id
        attributes {
          Title
          Views
        }
      }
    }
  }
`
;

  const GRAPHQL_ENDPOINT = 'https://dashboard.insightmedium.blog/graphql';

  try {
    const response = await request(GRAPHQL_ENDPOINT, UPDATE_Views, {
      id,
      Views,
    });
  
  
    const updatedViews = {
      id: response.updateArticle.data.id,
      Views: response.updateArticle.data.attributes.Views,
    };
  
    return updatedViews;
  } catch (error) {
    console.error('Error updating Views:', error);
    return null;
  }
  
};

