import { Text, Screen } from '@components';
import { AppTabScreenProps } from '@routes';

export function NewPostScreen({ }: AppTabScreenProps<'NewPostScreen'>) {
    return (
        <Screen>
            <Text preset="headingMedium">Tela de novo Post</Text>
        </Screen>
    );
}
