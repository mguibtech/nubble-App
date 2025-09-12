import {usePaginatedList} from 'src/domain/hooks';

import {postCommentService} from '../postCommentService';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return postCommentService.getPost(postId, page);
  }
  return usePaginatedList(getList);
}
