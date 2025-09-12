
import { FlatList, ListRenderItemInfo } from 'react-native';

import { PostComment, usePostCommentList } from '@domain';

import { Screen } from '@components';
import { AppScreenProps } from '@routes';

import { PostCommentItem } from './components/PostCommentItem';


function RenderItem({ item }: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
}

export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
    const id = route.params.postId;

    const { postList } = usePostCommentList(id);
    console.log(postList);

    return (
        <Screen canGoBack title="Comentários">
            <FlatList
                data={postList}
                renderItem={RenderItem}
            />
        </Screen>
    );
}
