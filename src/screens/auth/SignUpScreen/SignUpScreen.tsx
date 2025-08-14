import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { signUpSchema, SignUpSchema } from "./signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RootStackParamList } from "@routes";
import { useResetNavigationSuccess } from "@hooks";
import { Button, FormPasswordInput, FormTextInput, Screen, Text } from "@components";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({ navigation }: ScreenProps) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { reset } = useResetNavigationSuccess();

    const { handleSubmit, formState, control } = useForm<SignUpSchema>(
        {
            resolver: zodResolver(signUpSchema),
            defaultValues: {
                username: '',
                fullName: '',
                email: '',
                password: '',
            },
            mode: 'onChange',
        },
    );


    function handleSignUp({ email, fullName, password, username }: SignUpSchema) {
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
                label="Seu username"
                placeholder="@"
                boxProps={{ mb: 's20' }}
            />

            <FormTextInput
                control={control}
                name="fullName"
                label="Nome completo"
                placeholder="Digite seu nome completo"
                autoCapitalize="words"
                boxProps={{ mb: 's20' }}
            />

            <FormTextInput
                control={control}
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{ mb: 's20' }}
            />

            <FormPasswordInput
                control={control}
                name="password"
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
