import { Text, Screen } from '@components';
import { AppTabScreenProps } from '@routes';

export function MyProfileScreen({ }: AppTabScreenProps<'MyProfileScreen'>) {
    return (
        <Screen>
            <Text preset="headingMedium">My profile scrr</Text>
        </Screen>
    );
}
