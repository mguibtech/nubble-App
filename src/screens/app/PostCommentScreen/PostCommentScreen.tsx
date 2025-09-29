
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment, usePostCommentList, useUser } from '@domain';

import { Box, Screen } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';

import { PostCommentBottom } from './components/PostCommentBottom';
import { PostCommentItem } from './components/PostCommentItem';
import { PostCommentTextMessage } from './components/PostCommentTextMessage';




export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
    const postId = route.params.postId;
    const postAuthorId = route.params.postAuthorId;

    const { bottom } = useAppSafeArea();
    const userId = useUser();

    const { list, fetchNextPage, hasNextPage, refresh } = usePostCommentList(postId);

    function renderItem({ item }: ListRenderItemInfo<PostComment>) {
        return <PostCommentItem postComment={item} onRemoveComment={refresh} postAuthorId={postAuthorId} userId={userId.id} />;
    }
    return (
        <Screen flex={1} canGoBack title="Comentários">
            <Box flex={1} justifyContent="space-between">

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={list}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: bottom }}
                    ListFooterComponent={<PostCommentBottom fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />}
                />
                <PostCommentTextMessage postId={postId} />
            </Box>

        </Screen>
    );
}
