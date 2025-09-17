
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment, usePostCommentList } from '@domain';

import { Box, Screen } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';

import { PostCommentBottom } from './components/PostCommentBottom';
import { PostCommentItem } from './components/PostCommentItem';
import { PostCommentTextMessage } from './components/PostCommentTextMessage';


function RenderItem({ item }: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
}

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
    const id = route.params.postId;
    const { bottom } = useAppSafeArea();

    const { postList, fetchNextPage, hasNextPage, refresh } = usePostCommentList(id);

    return (
        <Screen flex={1} canGoBack title="Comentários">
            <Box flex={1} justifyContent="space-between">

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={postList}
                    renderItem={RenderItem}
                    contentContainerStyle={{ paddingBottom: bottom }}
                    ListFooterComponent={<PostCommentBottom fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />}
                />
                <PostCommentTextMessage postId={id} onAddComment={refresh} />
            </Box>

        </Screen>
    );
}
