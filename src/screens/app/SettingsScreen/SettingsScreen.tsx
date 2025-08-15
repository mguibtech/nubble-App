

import { Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen({ navigation }: AppScreenProps<'SettingsScreen'>) {

    function goToGomeScreen() {
        // navigation.navigate('AppTabNavigator', paranm);
    }

    return (
        <Screen>
            <Text preset="headingLarge">tela de config</Text>
            <Button onPress={goToGomeScreen} title="Title Button" />
        </Screen>
    );
}
