import {useMemo} from 'react';

import {useInfiniteQuery, type QueryKey} from '@tanstack/react-query';
import type {Page} from '@types';

export interface UsePaginatedListResult<TData> {
  queryKey: QueryKey;
  list: TData[];
  isError: boolean;
  isLoading: boolean; // mapearemos para isPending (v5)
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function usePaginatedList<TData>(
  queryKey: QueryKey,
  getList: (page: number) => Promise<Page<TData>>,
): UsePaginatedListResult<TData> {
  const query = useInfiniteQuery({
    queryKey,
    initialPageParam: 1,
    queryFn: ({pageParam}) => getList(Number(pageParam)),
    getNextPageParam: lastPage =>
      lastPage.meta?.hasNextPage ? lastPage.meta.currentPage + 1 : undefined,
  });

  const list = useMemo(
    () => query.data?.pages.flatMap(p => p.data) ?? [],
    [query.data],
  );

  return {
    queryKey,
    list,
    isError: !!query.isError,
    isLoading: query.isPending, // v5: alias para "carregando inicial"
    refresh: () => {
      void query.refetch();
    },
    fetchNextPage: () => {
      void query.fetchNextPage();
    },
    hasNextPage: !!query.hasNextPage,
  };
}
