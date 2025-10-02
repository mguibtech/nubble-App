import { useAuthCredentials } from '@services';

import { Text, Screen, Box, Icon } from '@components';
import { AppTabScreenProps } from '@routes';

export function MyProfileScreen({ navigation }: AppTabScreenProps<'MyProfileScreen'>) {
    const { authCredentials } = useAuthCredentials();
    const name = authCredentials?.user.fullName;
    return (
        <Screen>
            <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center">
                {name && <Text preset="headingMedium">{name}</Text>}
                <Icon
                    name="settings"
                    onPress={() => navigation.navigate('SettingsScreen')}
                />
            </Box>
        </Screen>
    );
}
