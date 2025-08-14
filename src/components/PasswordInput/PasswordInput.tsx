import React, { useState } from 'react';

import { Icon } from '../Icon/Icon';
import { TextInput, TextInputPros } from '../TextInput/TextInput';


export type PasswordInputProps = Omit<TextInputPros, 'rightComponent'>

export function PasswordInput({ ...rNTextInputProps }: PasswordInputProps) {
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

    function toggleSecureTextEntry() {
        setIsSecureTextEntry(prev => !prev);
    }

    return (
        <TextInput
            secureTextEntry={isSecureTextEntry}
            {...rNTextInputProps}
            rightComponent={
                <Icon onPress={toggleSecureTextEntry} name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'} color="gray2" />}
        />
    );
}
