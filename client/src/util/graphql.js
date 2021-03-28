import gql from 'graphql-tag';

export const FETCH_POST_QUERY = gql`
  {
    getPosts{
      id 
      body 
      createdAt 
      username 
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id 
        username
        createdAt 
        body
      }
    }
  }
`
export default FETCH_POST_QUERY;