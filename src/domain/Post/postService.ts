import {postAPI} from './postAPI';
import {Post} from './types';

async function getPost(): Promise<Post[]> {
  const postList = await postAPI.getList();
  return postList;
}

export const postService = {
  getPost,
};
