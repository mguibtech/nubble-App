
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment, usePostCommentList } from '@domain';

import { Screen } from '@components';
import { useAppSafeArea } from '@hooks';
import { AppScreenProps } from '@routes';

import { PostCommentBottom } from './components/PostCommentBottom';
import { PostCommentItem } from './components/PostCommentItem';


function RenderItem({ item }: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
}

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
    const id = route.params.postId;
    const { bottom } = useAppSafeArea();

    const { postList, fetchNextPage, hasNextPage } = usePostCommentList(id);
    console.log(postList);

    return (
        <Screen canGoBack title="Comentários">
            <FlatList
                showsVerticalScrollIndicator={false}
                data={postList}
                renderItem={RenderItem}
                contentContainerStyle={{ paddingBottom: bottom }}
                ListFooterComponent={<PostCommentBottom fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />}
            />
        </Screen>
    );
}
