import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../../../routes/Routes';
import { Screen } from '../../../components/screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { useForm } from 'react-hook-form';
import { forgotPasswordSchema, ForgotPasswordSchema } from './forgotPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormTextInput } from '../../../components/Form/FormTextInput';
import { Alert } from 'react-native';

type ScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'ForgotPasswordScreen'
>;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgotPasswordScreen({ navigation }: ScreenProps) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { reset } = useResetNavigationSuccess();
    const { control, handleSubmit, formState } = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),

        defaultValues: {
            email: '',
        },
        mode: 'onChange',
    })

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

        Alert.alert("Recuperação de Senha", "Instruções enviadas para o e-mail: " + email);
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