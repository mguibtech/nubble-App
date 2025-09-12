import {api, PageAPI, PageParams} from '@api';

import {PostCommentAPI} from './PostCommentTypes';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await api.get<PageAPI<PostCommentAPI>>(
      'user/post_comment',
      {
        params: {post_id, ...pageParams},
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const postCommentAPI = {
  getList,
};
