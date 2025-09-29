import {useState} from 'react';

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

/**
 * Custom hook for handling mutations.
 * @deprecated Use React Query or another library for data fetching and mutations.
 * @param mutationFn - The function to call for the mutation.
 * @param options - Options for the mutation.
 * @returns An object containing the mutate function and loading/error states.
 */
export function useMutation<TVariables, TData>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: MutationOptions<TData>,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function mutate(variables: TVariables) {
    try {
      setLoading(true);
      setError(null);
      const data = await mutationFn(variables);
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    } catch (mutateError) {
      if (options?.onError) {
        options.onError(options?.errorMessage || '');
      }
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    mutate,
    loading,
    error,
  };
}
