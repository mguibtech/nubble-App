import {useEffect, useState} from 'react';

import {Page} from '@types';

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [postList, setPostList] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setErrorMessage(null);
      setLoading(true);
      const {data, meta} = await getList(1);
      setPostList(data);
      if (meta.hasNextPage) {
        setPage(2);
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
      setPage(2);
    } catch (error) {
      setErrorMessage(true);
      console.log('Error fetching posts', error);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPage() {
    if (loading || !hasNextPage) {
      return;
    }
    try {
      setLoading(true);
      const {data, meta} = await getList(page);
      setPostList(prev => [...prev, ...data]);
      if (meta.hasNextPage) {
        setPage(prev => prev + 1);
      } else {
        setHasNextPage(false);
      }
      setPage(prev => prev + 1);
    } catch (er) {
      setErrorMessage(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    postList,
    loading,
    errorMessage,
    refresh: fetchInitialData,
    fetchNextPage,
  };
}
