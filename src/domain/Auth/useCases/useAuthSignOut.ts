import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {authService} from '../authService';

export function useAuthSignOut() {
  const query = useQuery<string, unknown>({
    queryKey: [QueryKeys.AuthSignOut, 'signOut'],
    queryFn: authService.signOut,
    retry: false,
    enabled: false, // Só executa quando chamado manualmente
  });

  return {
    isLoading: query.isPending,
    signOut: () => query.refetch(),
  };
}
