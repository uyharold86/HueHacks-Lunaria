import React, { userState } from 'react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Button, Confirm, Icon } from 'semantic-ui-react';

import { FETCH_POST_QUERY } from '../util/graphql';
import MyPopup from '../util/MyPopup';

function DeleteButton({ postId, commentId, callback }){
  const[confirmOpen, setConfirmOpen] = useState(false);

const mutation = commentId ? DELETE_COMMENT_MUTATION : DELETE_POST_MUTATION;

  const[deletePostOrMutation] = useMutation(mutation, {
      update(proxy){
        setConfirmOpen(false);
        if(!commentId){
          const data = proxy.readQuery({
          query: FETCH_POST_QUERY
        });
        data.getPost = data.getPosts.filter(p => p.id !== postId);
        proxy.writeQuery({ query: FETCH_POST_QUERY, data });
        }
        if(callback) callback(); 
      },
      variables:{
        postId,
        commentId
      }
  });

return(
  <>
          <MyPopup content={commentId ? 'Delete comment' : 'Delete post'}>
              <Button 
                as="div" 
                color="red" 
                floated="right" 
                onClick={() => setConfirmOpen(true)}
              >
                <Icon name="trash" style={{ margin: 0 }}/>
              </Button> 
          </MyPopup>
          <Confirm
            open={confirmOpen}
            onCancel={() => setConfirmOpen(false)}
            onConfirm={deletePostorMutation}
          />
  </>
)
}

const DELETE_POST_MUTATION = gql`
    mutation deletePost($postId: ID!){
        deletePost(postId:$postId)
    }
`;
//to delte a post or comment, gonna do comment mutation
const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!){
    deleteComment(postId: $postId, commentId: $commentId) {
      id
      comments {
        id
        username
        createdAt
        body
      }
      commentCount
    }
  }
`;
export default DeleteButton;