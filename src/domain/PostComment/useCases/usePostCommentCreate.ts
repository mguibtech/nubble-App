import {PostComment} from '@domain';
import {MutationOptions, QueryKeys} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {postCommentService} from '../postCommentService';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  // const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
  //   ({message}) => postCommentService.create(postId, message),
  //   options,
  // );

  const queryClient = useQueryClient();

  const {mutate, isPending, isError} = useMutation<
    PostComment,
    unknown,
    {message: string}
  >({
    mutationFn: variables =>
      postCommentService.create(postId, variables.message),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PostCommentList, postId],
      });
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options.errorMessage || 'ocorreu um erro');
      }
    },
  });

  async function createComment(message: string) {
    await mutate({message});
  }

  return {
    createComment,
    loading: isPending,
    isError,
  };
}
