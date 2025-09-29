import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';

export function useUserGetById(id: number) {
  const {data, isError, isLoading, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getUserById(id),
    staleTime: 1000 * 60 * 2, // 2 minutes
  });

  return {
    user: data,
    isError,
    isLoading,
    refetch,
    isFetching,
  };
}
