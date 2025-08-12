import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../../routes/Routes';
import { Screen } from '../../../components/screen/Screen';
import { Icon } from '../../../components/Icon/Icon';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({ route }: ScreenProps) {
    function goBackToBegin() {
        // TODO: navegar para a tela de login
    }
    return (
        <Screen>
            <Icon {...route.params.icon} />
            <Text preset="headingLarge" mt="s24">
                {route.params.title}
            </Text>
            <Text preset="paragraphLarge" mt="s16">
                {route.params.description}
            </Text>
            <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
        </Screen>
    );
}