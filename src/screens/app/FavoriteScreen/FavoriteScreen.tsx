import { Text, Screen } from '@components';
import { AppTabScreenProps } from '@routes';

export function FavoriteScreen({ }: AppTabScreenProps<'FavoriteScreen'>) {
    return (
        <Screen>
            <Text preset="headingMedium">Tela de FavoriteScreen</Text>
        </Screen>
    );
}
