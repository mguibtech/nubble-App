import {apiAdapter} from '@api';
import {Page} from '@types';

import {postAdapter} from './postAdapter';
import {postAPI} from './postAPI';
import {Post} from './postType';

async function getPost(page: number): Promise<Page<Post>> {
  const postPageAPI = await postAPI.getList({page, per_page: 10});

  return {
    data: postPageAPI.data.map(postAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

export const postService = {
  getPost,
};
