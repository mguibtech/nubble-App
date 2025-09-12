import { Screen, Text } from '@components';
import { AppScreenProps } from '@routes';



export function PostCommentScreen({ }: AppScreenProps<'PostCommentScreen'>) {



    return (
        <Screen canGoBack title="Comentários">
            <Text preset="headingLarge">tela de COmentarios</Text>
        </Screen>
    );
}
