

import { Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';



export function HomeScreen({ navigation }: AppScreenProps<'HomeScreen'>) {

    function gotoSettingsScreen() {
        navigation.navigate('SettingsScreen');
    }
    return (
        <Screen>
            <Text preset="headingLarge">tela de home</Text>
            <Button onPress={gotoSettingsScreen} title="Title Button" />
        </Screen>
    );
}
