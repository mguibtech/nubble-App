/**
 * @description Adapta a PostCommentAPI para o modelo de PostComment
 */

import {PostComment, PostCommentAPI} from './PostCommentTypes';

function toPostComment(postCommentAPI: PostCommentAPI): PostComment {
  return {
    id: postCommentAPI.id,
    message: postCommentAPI.message,
    created_at: postCommentAPI.created_at,
    author: {
      id: postCommentAPI.user.id,
      profileUrl: postCommentAPI.user.profile_url,
      name: postCommentAPI.user.full_name,
      username: postCommentAPI.user.username,
    },
  };
}

export const postCommentAdapter = {
  toPostComment,
};
