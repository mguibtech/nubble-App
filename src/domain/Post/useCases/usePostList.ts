import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setLoading(true);
      const list = await postService.getPost(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (error) {
      setErrorMessage(true);
      console.log('Error fetching posts', error);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (!loading) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {postList, loading, errorMessage, refetch: fetchData, fetchNextPage};
}
