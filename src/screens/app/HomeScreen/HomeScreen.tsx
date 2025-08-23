
import { Button, Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';


export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {

    function gotoSettingsScreen() {
        navigation.navigate('NewPostScreen');
    }

    return (
        <Screen>
            <Text preset="headingLarge">tela de home</Text>
            <Button onPress={gotoSettingsScreen} title="Title Button" />
            <Button onPress={gotoSettingsScreen} title="Title Button" />
        </Screen>
    );
}
