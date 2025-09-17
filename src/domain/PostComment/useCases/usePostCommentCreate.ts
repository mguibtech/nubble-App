import {useState} from 'react';

import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(post_id: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      await postCommentService.create(post_id, message);
    } catch (er) {
      console.log(er);
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
