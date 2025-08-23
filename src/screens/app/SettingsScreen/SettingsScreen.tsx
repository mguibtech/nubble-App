

import { Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';



export function SettingsScreen({ navigation }: AppScreenProps<'SettingsScreen'>) {

    function goToGomeScreen() {
        navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
        });
    }

    return (
        <Screen canGoBack>
            <Text preset="headingLarge">tela de config</Text>
            <Button onPress={goToGomeScreen} title="Title Button" />
        </Screen>
    );
}
