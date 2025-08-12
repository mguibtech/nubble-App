import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/Button";
import { Box } from "../../../components/Box/Box";
import { Screen } from "../../../components/screen/Screen";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { useForm, Controller } from "react-hook-form";
import { Alert } from "react-native";

type LoginFormType = {
    email: string;
    password: string;
}

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {

    const { handleSubmit, control, formState } = useForm<LoginFormType>({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });


    function submitForm({ email, password }: LoginFormType) {
        Alert.alert("Login", "Formulário enviado com sucesso!" + ' E-mail: ' + email + ', Senha: ' + password);
    }

    function navigateToForgotPassword() {
        navigation.navigate('ForgotPasswordScreen');
    }

    return (
        <Screen>
            <Text bold preset='headingLarge' italic>Olá</Text>
            <Text bold preset='paragraphLarge' italic>Digite seu e-mail e senha para entrar</Text>

            <Box gap="s16" mt="s20">
                <Controller
                    control={control}
                    name="email"
                    rules={{
                        required: 'E-mail é obrigatório',
                    }}
                    render={({ field, fieldState }) => (
                        <TextInput
                            errorMessage={fieldState.error?.message}
                            value={field.value}
                            onChangeText={field.onChange}
                            label="E-mail"
                            placeholder="Digite seu e-mail"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="password"
                    rules={{
                        required: 'Senha é obrigatória',
                        minLength: { value: 6, message: 'A senha deve ter pelo menos 6 caracteres' },
                    }}
                    render={({ field, fieldState }) => (
                        <PasswordInput
                            value={field.value}
                            onChangeText={field.onChange}
                            errorMessage={fieldState.error?.message}
                            label="Senha"
                            placeholder="Digite sua senha" />
                    )
                    }
                />

            </Box>

            <Text onPress={navigateToForgotPassword} bold preset='paragraphCaption' color="primary" mt="s4" italic>Esqueci minha senha</Text>

            <Button
                onPress={handleSubmit(submitForm)}
                title="Entrar"
                mt="s40"
                disabled={formState.isSubmitting || !formState.isValid}
            />
            <Button title="Criar uma conta" preset="outline" mt="s10" />

        </Screen>
    );
}