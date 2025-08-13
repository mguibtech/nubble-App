import { Text } from "../../../components/Text/Text";
import { Button } from "../../../components/Button/Button";
import { Screen } from "../../../components/screen/Screen";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../routes/Routes";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";
import { loginSchema, LoginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextInput } from "../../../components/Form/FormTextInput";
import { FormPasswordInput } from "../../../components/Form/FormPasswordInput";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: ScreenProps) {


    const { handleSubmit, control, formState } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });


    function submitForm({ email, password }: LoginSchema) {
        Alert.alert("Login", "Formulário enviado com sucesso!" + ' E-mail: ' + email + ', Senha: ' + password);
    }

    function navigateToForgotPassword() {
        navigation.navigate('ForgotPasswordScreen');
    }

    return (
        <Screen>
            <Text bold preset='headingLarge' italic>Olá</Text>
            <Text bold preset='paragraphLarge' italic>Digite seu e-mail e senha para entrar</Text>

            <FormTextInput
                control={control}
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{ mb: 's20', mt: 's40' }}
            />

            <FormPasswordInput
                control={control}
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                boxProps={{ mb: 's20' }}
            />

            <Text onPress={navigateToForgotPassword} bold preset='paragraphCaption' color="primary" mt="s4" italic>Esqueci minha senha</Text>

            <Button
                onPress={handleSubmit(submitForm)}
                title="Entrar"
                mt="s40"
                disabled={formState.isSubmitting || !formState.isValid}
            />
            <Button
                onPress={() => navigation.navigate('SignUpScreen')}
                title="Criar uma conta"
                preset="outline"
                mt="s10"
            />

        </Screen>
    );
}