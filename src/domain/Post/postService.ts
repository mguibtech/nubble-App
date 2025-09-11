import {postAdapter} from './postAdapter';
import {postAPI} from './postAPI';
import {Post} from './postType';

async function getPost(): Promise<Post[]> {
  const postPageAPI = await postAPI.getList();

  return postPageAPI.data.map(postAdapter.toPost);
}

export const postService = {
  getPost,
};
