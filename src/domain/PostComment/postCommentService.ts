import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentAPI} from './postCommentAPI';
import {PostComment} from './PostCommentTypes';

async function getPost(
  post_id: number,
  page: number,
): Promise<Page<PostComment>> {
  const postPageAPI = await postCommentAPI.getList(post_id, {
    page,
    per_page: 10,
  });

  return {
    data: postPageAPI.data.map(postCommentAdapter.toPostComment),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

async function create(post_id: number, message: string): Promise<PostComment> {
  const postComment = await postCommentAPI.create(post_id, message);

  return postCommentAdapter.toPostComment(postComment);
}

async function remove(posCommentId: number): Promise<string> {
  const response = await postCommentAPI.remove(posCommentId);
  return response.message;
}

/**
 * @description user can delete the comment if it the post author or comment author
 * @param userId the current session user id
 * @param postComment comment to be deleted
 * @param postAuthorId the id of post author
 */
function isAllowToDelete(
  userId: number,
  postComment: PostComment,
  postAuthorId: number,
): boolean {
  if (postComment.author.id === userId) {
    return true;
  }

  if (postAuthorId === userId) {
    return true;
  }

  return false;
}

export const postCommentService = {
  getPost,
  create,
  remove,
  isAllowToDelete,
};
