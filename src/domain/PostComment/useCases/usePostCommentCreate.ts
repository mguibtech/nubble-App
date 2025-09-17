import {useState} from 'react';

import {postCommentService} from '../postCommentService';
import {PostComment} from '../PostCommentTypes';

interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: (message: string) => void;
}

export function usePostCommentCreate(post_id: number, options?: Options) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      const postComent = await postCommentService.create(post_id, message);
      if (options?.onSuccess) {
        options.onSuccess(postComent);
      }
    } catch (er) {
      if (options?.onError) {
        options.onError('Erro ao criar comentário');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    createComment,
    loading,
    error,
  };
}
