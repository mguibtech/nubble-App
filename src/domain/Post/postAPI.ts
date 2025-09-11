import {api, PageAPI} from '@api';

import {PostAPI} from './postType';

async function getList(): Promise<PageAPI<PostAPI>> {
  try {
    await new Promise(resolve => setTimeout(resolve, 4000));
    const response = await api.get<PageAPI<PostAPI>>('user/post');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const postAPI = {
  getList,
};
