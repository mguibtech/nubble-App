import { Button } from "../../../components/Button/Button";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { Screen } from "../../../components/screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";

export function SignUpScreen() {
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

            <Button preset="primary" title="Criar conta" mt="s56" />
        </Screen>
    )
}
