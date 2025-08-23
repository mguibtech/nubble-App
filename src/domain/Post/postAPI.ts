import {postListMock} from './postListMock';
import {Post} from './types';

async function getList(): Promise<Post[]> {
  //TODO: Simular dalay na API
  await new Promise(resolve => setTimeout(() => resolve(''), 300));
  return postListMock;
}

export const postAPI = {
  getList,
};
