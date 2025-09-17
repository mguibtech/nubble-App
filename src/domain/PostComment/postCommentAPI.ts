import {api, PageAPI, PageParams} from '@api';

import {PostCommentAPI} from './PostCommentTypes';

const PATH_POSTCOMMENT = 'user/post_comment';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await api.get<PageAPI<PostCommentAPI>>(PATH_POSTCOMMENT, {
      params: {post_id, ...pageParams},
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

async function create(
  post_id: number,
  message: string,
): Promise<PostCommentAPI> {
  const response = await api.post<PostCommentAPI>(PATH_POSTCOMMENT, {
    post_id,
    message,
  });

  return response.data;
}

export const postCommentAPI = {
  getList,
  create,
};
