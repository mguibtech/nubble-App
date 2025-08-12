import React, { useState } from "react";
import { TextInput, TextInputPros } from "../TextInput/TextInput";
import { Icon } from "../Icon/Icon";


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
                <Icon onPress={toggleSecureTextEntry} name={isSecureTextEntry ? "eyeOn" : "eyeOff"} color="gray2" />}
        />
    )
}