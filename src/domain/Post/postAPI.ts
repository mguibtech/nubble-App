import {api, PageAPI} from '@api';

import {PostAPI} from './postType';

async function getList(): Promise<PageAPI<PostAPI>> {
  const response = await api.get<PageAPI<PostAPI>>('user/post');
  console.log('getList', response.data);
  return response.data;
}

export const postAPI = {
  getList,
};
