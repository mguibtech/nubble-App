import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/screen/Screen";
import { Text } from "../../../components/Text/Text";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSuccess } from "../../../hooks/useResetNavigationSuccess";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";

type SignUpFormType = {
    username: string;
    fullName: string;
    email: string;
    password: string;
}

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({ navigation }: ScreenProps) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { reset } = useResetNavigationSuccess();

    const { handleSubmit, formState, control } = useForm<SignUpFormType>(
        {
            defaultValues: {
                username: '',
                fullName: '',
                email: '',
                password: '',
            },
            mode: 'onChange',
        },
    );


    function handleSignUp({ email, fullName, password, username }: SignUpFormType) {
        // reset({
        //     title: 'Conta criada com sucesso!',
        //     description: 'Você já pode fazer login na sua conta.',
        //     icon: {
        //         name: 'checkRound',
        //         color: 'primary',
        //     },
        // });

        Alert.alert("Sign Up", "Formulário enviado com sucesso!" +
            ' Username: ' + username + ', Nome: ' + fullName + ', E-mail: ' + email + ', Senha: ' + password);
    }

    return (
        <Screen canGoBack scrollable>
            <Text preset="headingLarge" mb="s32">
                Criar conta
            </Text>

            <FormTextInput
                control={control}
                name="username"
                rules={{
                    required: 'Username é obrigatório',
                }}
                label="Seu username"
                placeholder="@"
                boxProps={{ mb: 's20' }}
            />

            <FormTextInput
                control={control}
                name="fullName"
                rules={
                    { required: 'Nome completo é obrigatório' }
                }
                label="Nome completo"
                placeholder="Digite seu nome completo"
                autoCapitalize="words"
                boxProps={{ mb: 's20' }}
            />

            <FormTextInput
                control={control}
                name="email"
                rules={{
                    required: 'E-mail é obrigatório',
                }}
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{ mb: 's20' }}
            />

            <FormPasswordInput
                control={control}
                name="password"
                rules={{
                    required: 'Senha é obrigatória',
                    minLength: { value: 6, message: 'A senha deve ter pelo menos 6 caracteres' },
                }}
                label="Senha"
                placeholder="Digite sua senha"
                boxProps={{ mb: 's20' }}
            />

            <Button
                onPress={handleSubmit(handleSignUp)}
                preset="primary"
                title="Criar conta"
                mt="s56"
                disabled={!formState.isValid}
            />
        </Screen>
    )
}
