
import { useAuthSignIn } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToastService } from '@services';
import { useForm } from 'react-hook-form';

import { Button, FormPasswordInput, FormTextInput, Screen, Text } from '@components';
import { AuthScreenProps } from '@routes';

import { loginSchema, LoginSchema } from './loginSchema';




export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
    const { showToast } = useToastService();

    const { signIn, isLoading } = useAuthSignIn(
        {
            onSuccess: () => { showToast({ message: 'Login realizado com sucesso!', type: 'success' }); },
            onError: (message) => { showToast({ message, type: 'error' }); },
        }
    );


    const { handleSubmit, control, formState } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onChange',
    });


    function submitForm({ email, password }: LoginSchema) {
        signIn({ email, password });
        // Alert.alert('Login', 'Formulário enviado com sucesso!' + ' E-mail: ' + email + ', Senha: ' + password);
    }

    function navigateToForgotPassword() {
        navigation.navigate('ForgotPasswordScreen');
    }

    return (
        <Screen>
            <Text bold preset="headingLarge" italic>Olá</Text>
            <Text preset="paragraphLarge" mt="s8">Digite seu e-mail e senha para entrar</Text>

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
            />
            <Text onPress={navigateToForgotPassword} bold preset="paragraphCaption" color="primary" mt="s4" italic>Esqueci minha senha</Text>

            <Button
                onPress={handleSubmit(submitForm)}
                title="Entrar"
                mt="s40"
                disabled={formState.isSubmitting || !formState.isValid}
                loading={isLoading}
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
