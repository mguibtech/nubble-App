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

export const postCommentService = {
  getPost,
  create,
  remove,
};
