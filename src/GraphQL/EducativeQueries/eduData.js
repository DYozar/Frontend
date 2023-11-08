import { request, gql } from 'graphql-request';

const GRAPHQL_ENDPOINT =  'https://dashboard.insightmedium.blog/graphql';

export const GetChapterContent = async (CSlug ,MoSlug) => {
    const GET_ALL_CHAPTER_POSTS = gql`
    query($CSlug: String! , $MoSlug: String!) {
      contents(
        filters: { 
          chapter: { CSlug: { eq: $CSlug } }, 
          module: { MoSlug: { eq: $MoSlug } } 
        }
         
      ) {
        data {
          attributes {
            Title
            Slug
            chapter {
              data {
                attributes {
                  Title
                  CSlug
                }
              }
            }
            module {
              data {
                attributes {
                  Title
                  MoSlug
                }
              }
            }
          }
        }
      }
    }
    
    `;
    try {
      const result = await request(GRAPHQL_ENDPOINT, GET_ALL_CHAPTER_POSTS,{CSlug ,MoSlug});
      
      const posts = result.contents.data
        .map((contents) => ({
          Title: contents.attributes.Title,
          Slug: contents.attributes.Slug,
          chapter: {
            Title: contents.attributes.chapter.data.attributes.Title,
            CSlug:  contents.attributes.chapter.data.attributes.CSlug,
            
          },
          module: {
            MoSlug: contents.attributes.module.data.attributes.MoSlug,
          },
        }))


      return posts;
    } catch (error) {
      console.error('Error fetching category posts:', error);
      return [];
    }
}



export const GetModulePosts = async () => {
    const GET_ALL_Module_POSTS = gql`
    query {
      modules {
        data {
          id
          attributes {
            Title
            MoSlug
            Media{
              data{
                attributes{
                  url
                }
              }
            }
            chapters {
              data {
                attributes {
                  Title
                  CSlug
                  Media{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                }
              }
            }
            contents{
              data{
                attributes{
                  Title
                  Slug
                  Media{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    
    `;
    try {
        const result = await request(GRAPHQL_ENDPOINT, GET_ALL_Module_POSTS);
        
        const posts = result.modules.data
          .map((module) => ({
            id: module.id ,
            Title: module.attributes.Title,
            MoSlug: module.attributes.MoSlug,
            Media: module.attributes.Media.data,

            chapters: module.attributes.chapters.data.map((chapter) => ({
              Title: chapter.attributes.Title,
              CSlug: chapter.attributes.CSlug,
              Media: chapter.attributes.Media.data
            })),
            contents: module.attributes.contents.data.map((contents) => ({
              Slug: contents.attributes.Slug,
              Title: contents.attributes.Title,
              Media : contents.attributes.Media.data

            })),
          }))


        return posts;
      } catch (error) {
        console.error('Error fetching category posts:', error);
        return [];
      }
}



export const GetModulChapter = async (MoSlug) => {
    const GET_ALL_Module_POSTS = gql`
    query ($MoSlug:String!){
        chapters(
          filters: {
            module: { 
              MoSlug: { eq: $MoSlug } 
            } 
          }
        ){
          data{
            attributes{
              Title
              CSlug
              module{
                data{
                  attributes{
                    Title
                    MoSlug
                  }
                }
              }
            }
          }
        }
      }
    `;
    try {
      const result = await request(GRAPHQL_ENDPOINT, GET_ALL_Module_POSTS,{ MoSlug });
      
      const posts = result.chapters.data
        .map((chapter) => ({
          Title: chapter.attributes.Title,
          CSlug: chapter.attributes.CSlug,
          module: {
            Title: chapter.attributes.module.data.attributes.Title,
            MoSlug:  chapter.attributes.module.data.attributes.MoSlug
          },
          
        }))

      return posts;
    } catch (error) {
      console.error('Error fetching category posts:', error);
      return [];
    }
}

export const GetContent = async (Slug) => {
    const GET_ALL_Module_POSTS = gql`
    query($Slug: String!) {
      contents(filters: { Slug: { eq: $Slug } }) {
        data {
          attributes {
            Title
            text
            Slug
            Media{
              data{
                attributes{
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
      const result = await request(GRAPHQL_ENDPOINT, GET_ALL_Module_POSTS,{ Slug });
      
      const posts = result.contents.data.map((contents) => ({

        Title: contents.attributes.Title,
        text: contents.attributes.text,
        Slug: contents.attributes.Slug,
        Media : contents.attributes.Media.data
          
      }))

      return posts;
    } catch (error) {
      console.error('Error fetching category posts:', error);
      return [];
    }
}



export const GetContentBasedOnModules = async (MoSlug) => {
  const GET_ALL_CHAPTER_POSTS = gql`
  query($MoSlug: String!) {
    contents(
      filters: { 
        module: { MoSlug: { eq: $MoSlug } } 
      }
       
    ) {
      data {
        attributes {
          Title
          Slug
          Media{
            data{
              attributes{
                url
              }
            }
          }
  
          module {
            data {
              attributes {
                Title
                MoSlug
              }
            }
          }
        }
      }
    }
  }
  
  `;
  try {
    const result = await request(GRAPHQL_ENDPOINT, GET_ALL_CHAPTER_POSTS,{MoSlug});
    
    const posts = result.contents.data
      .map((contents) => ({
        Title: contents.attributes.Title,
        Slug: contents.attributes.Slug,
        Media : contents.attributes.Media,

        module: {
          Title: contents.attributes.module.data.attributes.Title,
          MoSlug: contents.attributes.module.data.attributes.MoSlug,
        },
      }))


    return posts;
  } catch (error) {
    console.error('Error fetching  posts:', error);
    return [];
  }
}
