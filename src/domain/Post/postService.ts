import {postAdapter} from './postAdapter';
import {postAPI} from './postAPI';
import {Post} from './postType';

async function getPost(page: number): Promise<Post[]> {
  const postPageAPI = await postAPI.getList({page});

  return postPageAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getPost,
};
