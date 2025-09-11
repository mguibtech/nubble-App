import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<boolean | null>(null);

  async function fetchData() {
    try {
      setLoading(true);
      const list = await postService.getPost();
      setPostList(list);
    } catch (error) {
      setErrorMessage(true);
      console.log('Error fetching posts', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {postList, loading, errorMessage, refetch: fetchData};
}
