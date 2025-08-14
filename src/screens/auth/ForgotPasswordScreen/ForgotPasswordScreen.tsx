import React from 'react';
import { Alert } from 'react-native';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button, FormTextInput, Screen, Text } from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { AuthScreenProps } from '@routes';

import { forgotPasswordSchema, ForgotPasswordSchema } from './forgotPasswordSchema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({ navigation }: AuthScreenProps<'ForgotPasswordScreen'>) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { reset } = useResetNavigationSuccess();
    const { control, handleSubmit, formState } = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),

        defaultValues: {
            email: '',
        },
        mode: 'onChange',
    });

    function submitForm({ email }: ForgotPasswordSchema) {
        // TODO: submit form

        // reset({
        //     title: `Enviamos as instruções para seu  ${'\n'}e-mail`,
        //     description:
        //         'Clique no link enviado no seu e-mail para recuperar sua senha',
        //     icon: {
        //         name: 'messageRound',
        //         color: 'primary',
        //     }

        // })

        Alert.alert('Recuperação de Senha', 'Instruções enviadas para o e-mail: ' + email);
    }


    return (
        <Screen canGoBack>
            <Text preset="headingLarge" mb="s16">
                Esqueci minha senha
            </Text>
            <Text preset="paragraphLarge" mb="s32">
                Digite seu e-mail e enviaremos as instruções para redefinição de senha
            </Text>
            <FormTextInput
                control={control}
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                boxProps={{ mb: 's20', mt: 's40' }}
            />
            <Button
                onPress={handleSubmit(submitForm)}
                disabled={!formState.isValid}
                title="Recuperar senha" />
        </Screen>
    );

}
