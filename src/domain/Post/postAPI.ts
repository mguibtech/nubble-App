import {api, PageAPI} from '@api';

import {PostAPI} from './postType';

async function getList(): Promise<PageAPI<PostAPI>> {
  try {
    const response = await api.get<PageAPI<PostAPI>>('user/post');
    console.log('getList', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching post list:', error);
    throw error;
  }
}

export const postAPI = {
  getList,
};
