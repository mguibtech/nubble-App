import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { Screen } from "../../../components/screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({ navigation }: ScreenProps) {

    const { reset } = useResetNavigationSuccess();


    function handleSignUp() {
        reset({
            title: 'Conta criada com sucesso!',
            description: 'Você já pode fazer login na sua conta.',
            icon: {
                name: 'checkRound',
                color: 'primary',
            },
        });
    }

    return (
        <Screen canGoBack scrollable>
            <Text preset="headingLarge" mb="s32">
                Criar conta
            </Text>
            <TextInput label="Seu username" placeholder="@" boxProps={{ mb: 's20' }} />
            <TextInput label="Nome completo" placeholder="Digite seu nome completo" boxProps={{ mb: 's20' }} />
            <TextInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{ mb: 's20' }}
            />
            <PasswordInput label="Nova senha" placeholder="Digite sua Senha" />

            <Button onPress={handleSignUp} preset="primary" title="Criar conta" mt="s56" />
        </Screen>
    )
}
