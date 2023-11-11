import { request, gql } from 'graphql-request';
const GRAPHQL_ENDPOINT =  'https://dashboard.insightmedium.blog/graphql';

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

export const AboutUs = async (Slug) => {

  const Policy = gql`
  query {
    aboutUs{
      data{
        attributes{
          Title
          content
          Slug
        }
      }
    }
  }
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, Policy);
    return result.aboutUs.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


export const CategoryDirectory = async (Slug) => {

  const Policy = gql`
  query {
    categoryDirectory{
      data{
        attributes{
          Title
          content
          Slug
        }
      }
    }
  }
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, Policy);
    return result.categoryDirectory.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


export const ContactUs = async (Slug) => {

  const Policy = gql`
  query {
    contactUs{
      data{
        attributes{
          Title
          content
          Slug
        }
      }
    }
  }
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, Policy);
    return result.contactUs.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


export const ContentGuide = async (Slug) => {

  const Policy = gql`
  query {
    contentGuideline{
      data{
        attributes{
          Title
          content
          Slug
        }
      }
    }
  }
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, Policy);
    return result.contentGuideline.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


export const FeedBack = async (Slug) => {

  const Policy = gql`
  query {
    feedbackAndSuggestion{
      data{
        attributes{
          Title
          content
          Slug
        }
      }
    }
  }
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, Policy);
    return result.feedbackAndSuggestion.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


export const Resources = async (Slug) => {

  const Policy = gql`
  query {
    resource{
      data{
        attributes{
          Title
          content
          Slug
        }
      }
    }
  }
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, Policy);
    return result.resource.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


export const Sitemap = async (Slug) => {

  const Policy = gql`
  query {
    sitemap{
      data{
        attributes{
          Title
          content
          Slug
        }
      }
    }
  }
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, Policy);
    return result.sitemap.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


export const TermsOfService = async (Slug) => {

  const Policy = gql`
  query {
    termsOfService {
      data {
        attributes {
          Title
          content
          Slug
        }
      }
    }
  }
  
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, Policy);
    return result.termsOfService.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


export const PrivacyPolicy = async (Slug) => {

  const Policy = gql`
  query {
    privacyPolicy{
      data{
        attributes{
          Title
          content
          Slug
        }
      }
    }
  }
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, Policy);
    return result.privacyPolicy.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


