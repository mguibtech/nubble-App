import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { Box } from "../../../components/Box/Box";
import { Screen } from "../../../components/screen/Screen";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {

    function navigateToSignUp() {
        navigation.navigate('SignUpScreen');
    }
    return (
        <Screen>
            <Text bold preset='headingLarge' italic>Olá</Text>
            <Text bold preset='paragraphLarge' italic>Digite seu e-mail e senha para entrar</Text>

            <Box gap="s16" mt="s20">
                <TextInput label="E-mail" placeholder="Digite seu e-mail" />
                <PasswordInput label="Senha" placeholder="Digite sua senha" />

            </Box>

            <Text bold preset='paragraphCaption' color="primary" mt="s4" italic>Esqueci minha senha</Text>

            <Button title="Entrar" mt="s40" onPress={navigateToSignUp} />
            <Button title="Criar uma conta" preset="outline" mt="s10" />

        </Screen>
    );
}