
import { usePostCommentList } from '@domain';

import { Screen, Text } from '@components';
import { AppScreenProps } from '@routes';



export function PostCommentScreen({ route }: AppScreenProps<'PostCommentScreen'>) {
    const id = route.params.postId;

    const { postList } = usePostCommentList(id);
    console.log(postList);
    return (
        <Screen canGoBack title="Comentários">
            <Text preset="headingLarge">tela de COmentarios</Text>
        </Screen>
    );
}
